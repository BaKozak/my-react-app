import { useState, useRef, useEffect } from "react";
import stylesStopWatch from './StopWatch.module.css'

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdRef: any = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current)
        }

    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {

        //let hours: number = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes: number = Math.floor(elapsedTime / (1000 * 60) % 60);
        let seconds: number = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds: number = Math.floor((elapsedTime % 1000) / 10);

        // hoursStr: string = String(hours).padStart(2, "0");
        const minutesStr: string = String(minutes).padStart(2, "0");
        const secondsStr: string = String(seconds).padStart(2, "0");
        const millisecondsStr: string = String(milliseconds).padStart(2, "0");

        return `${minutesStr}: ${secondsStr}: ${millisecondsStr}`;
    }

    return (
        <div className={stylesStopWatch["stop-watch"]}>
            <div className={stylesStopWatch["display"]}> {formatTime()}</div>
            <div className={stylesStopWatch["controls"]}>
                <button onClick={start} className={stylesStopWatch["start-button"]}>Start</button>
                <button onClick={stop} className={stylesStopWatch["stop-button"]}>Stop</button>
                <button onClick={reset} className={stylesStopWatch["reset-button"]}>Reset</button>
            </div>
        </div>)
}

export default StopWatch