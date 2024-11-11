import { useState, useEffect } from "react";
import stylesDigitalClock from './DigitalClock.module.css'

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number: number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className={stylesDigitalClock["clock-container"]}>
            <div className={stylesDigitalClock["clock"]}>
                <span>{formatTime()}</span>
            </div>
        </div>)

}

export default DigitalClock