// Word splitter for title reveals. Wraps each word in an overflow-hidden
// mask so it can rise from behind its own baseline. Preserves <em> styling
// and keeps <br> / other elements intact (contact headline uses <br>).
// Whitespace between masks stays as real text nodes so lines wrap naturally.

export function splitWords(el: HTMLElement): HTMLElement[] {
  const words: HTMLElement[] = [];

  const wrapWord = (word: string, italic: boolean): HTMLElement => {
    const mask = document.createElement('span');
    mask.className = 'w-mask';
    const inner = document.createElement(italic ? 'em' : 'span');
    inner.className = 'w';
    inner.textContent = word;
    mask.appendChild(inner);
    words.push(inner);
    return mask;
  };

  const splitTextNode = (node: Text, italic: boolean): Node[] => {
    const parts = node.textContent?.split(/(\s+)/) ?? [];
    return parts
      .filter((p) => p.length)
      .map((p) => (/^\s+$/.test(p) ? document.createTextNode(' ') : wrapWord(p, italic)));
  };

  const out: Node[] = [];
  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      out.push(...splitTextNode(node as Text, false));
    } else if (node.nodeType === Node.ELEMENT_NODE && (node as Element).tagName === 'EM') {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          out.push(...splitTextNode(child as Text, true));
        } else {
          out.push(child.cloneNode(true));
        }
      });
    } else {
      out.push(node.cloneNode(true)); // <br> etc.
    }
  });

  el.replaceChildren(...out);
  return words;
}
