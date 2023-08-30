import React, { useEffect, useState } from 'react';
import {buildStyles, CircularProgressbar, CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({value, src, color}) => {
    const [percentage, setPercentage] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            if (percentage < value) {
                setPercentage(percentage + 1);
            }
        }, 50);
    }, [percentage]);

    return (
        <div style={{textAlign:"center"}}>
            <div style={{ width: 150}}>
                <CircularProgressbarWithChildren value={value} styles={buildStyles({
                    pathTransitionDuration: 1,
                    pathColor: color,
                    textColor: color,
                    trailColor: '#d6d6d6',
                })} >
                    <img
                        style={{ width: 80 }}
                        src={src}
                        alt=""
                    />
                </CircularProgressbarWithChildren>
            </div>
        </div>
    );
}
export default CircularProgressBar;

/*
<div style={{textAlign:"center"}}>
            <div style={{ width: 150}}>
                <CircularProgressbarWithChildren value={percentage} styles={buildStyles({
                    pathTransitionDuration: 1,
                    pathColor: '#a8379f',
                    textColor: '#a8379f',
                    trailColor: '#d6d6d6',
                })} >
                <img
                    style={{ width: 80, marginTop: -5 }}
                    src="https://i.imgur.com/b9NyUGm.png"
                    alt="doge"
                />
                </CircularProgressbarWithChildren>
            </div>
        </div>
*/