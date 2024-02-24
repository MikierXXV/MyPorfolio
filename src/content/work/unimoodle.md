---
title: Unimoodle Project
publishDate: 2024-01-22 00:00:00
img: /MyPorfolio/assets/unimoodle/logo.png
img_alt: Unimoodle logo
description: |
  Development of two plugins to offer improvements in Moodle functionalities for teachers. 
tags:
  - Moodle 
  - PHP
  - JS, HTML, CSS
---

<h2 class="center"> Introduction </h2>
<p>Teachers work to be able to offer training to their students and provide follow-up to promote and implement it. Many tools are currently available to cover this, but not all of them tend to provide a relevant user experience.

Many universities, colleges and other educational institutions are users of Moodle, the open source platform that provides a wide range of components that make it easy for teachers to acquire this monitoring. Although the platform integrates a large set of functionalities and is composed of a large community, there are certain sections that are not intuitive and require a certain degree of knowledge of the platform on the part of the user. 

For this reason the Unimoodle project has been carried out, promoted by a group of 15 Spanish universities, where UVa (University of Valladolid) coordinates it. This consists in developing a set of batches where certain sections are treated to create components that improve the existing functionalities and user experience. Within the set of batches, the development of the improvement in the data export and in the gradebook has been carried out, in order to allow the generation of formulas in a more intuitive way, in the Moodle grading elements.

All batches and their integrated components will be public to the Moodle community so they can make use of them. This set of developments will facilitate the work of teachers when editing formulas in the gradebook.<p>


<h2 class="center"> Development </h2>
<p>In this project, developed in a team of 5 people (one project manager and four developers) from UPCNet and IThinkUPC, we had to develop two plugins. One for the export of the gradebooks and the other for the management of the reports, these integrates new functionalities that facilitates the user experience. The languages used were mainly PHP, because is the one that Moodle uses. Also uses HTML for the templates applying Mustache, CSS for the style of the enviroment and JS for the manipulation of the DOM and the events managements. Moreover, we have developed the testing of the functionalities using Phpunit and Behat. We used docker to make the implementation and to run the test with the help of Selenium.</p>


<h3 class="center"> Sections developed by me </h3>

><h4 class="center" >Formula editor, for the report plugin</h4>
<p>This is one of the parts of the development for the report plugin, in which the teacher can generate a formula and assign it to a item (these are the following item types: assigment, total of categories, evaluative items, etc) by interacting with the different sections that open up as the user go along. This formula will be integrated for each of the students that are participants in the current course joined. It's needed to select the evaluative items that are going to be related in the formula, select the operation to apply (<b>maximum</b>, <b>minimum</b>, <b>mean average</b>, <b>sum</b> and <b>weighted mean average</b>), generate the formula and save the changes. We can see an example in the image below:</p>

<img  height="700" width="700"  alt="Screen of the formula editor" src="/MyPorfolio/assets/unimoodle/editor_formula_1.png"/>

><p class="center" >Improved exporter</p>
<p>Natively, Moodle has four formats to export the gradebook, these are: .ods, .csv, .xls, .xml. The objective of the development of the plugin was to add the group filter and show it as a result in the exported file by adding a column in the gradebook with the group of the student where is enroled. Moreover, one of the requirements was to integrate the profile fields of the users, both customised and personalised, in a section in the exporter where the teacher can select the ones that wants to add in the export of the gradebook.</p>
<p>As having different types of export formats, I have developed one plugin for the .csv and .xls, as the requirements were stiuplated. We can't create as centralized exporter because of the modularity of Moodle. Here we show the result of the improved exporters, the main example is for the CSV format.</p>

<img  height="500" width="700"  alt="Screen of the formula editor" src="/MyPorfolio/assets/unimoodle/Group_filter.png"/>

><h4 class="center" >Official Page</h4>
<p>Finally, here is the official webpage of the plugins. The following link redirects to the ones developed were you can find them in spanish and english versions. <a href="https://www.unimoodle.ulpgc.es/index.php?title=Documentaci%C3%B3n_UNIMOODLE#P11:_Mejoras_del_libro_de_calificaciones" target="_blank">Unimoodle Page</a></p> 


<style> 
  p {
    text-align: justify;
    margin-bottom: 2rem;
  }

  .center {
    text-align: center;
  }

</style>