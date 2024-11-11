import { useState } from "react"
import stylesCounter from './Counter.module.css'

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div className={stylesCounter["counter-container"]}>
            <p className={stylesCounter["count-display"]}>{count}</p>
            <button className={stylesCounter["counter-button"]} onClick={decrement}>Decrement</button>
            <button className={stylesCounter["counter-button"]} onClick={reset}>Reset</button>
            <button className={stylesCounter["counter-button"]} onClick={increment}> Increment</button>
        </div>
    )
}

export default Counter