import { useState } from "react"
import stylesColorPickerContainer from './ColorPickerContainer.module.css'


function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");

    const handleColorChange = (event: any) => {
        setColor(event.target.value)
    }

    return (<div className={stylesColorPickerContainer["color-picker-container"]}>
        <h1>Color Picker</h1>
        <div className={stylesColorPickerContainer["color-display"]} style={{ backgroundColor: color }}>
            <p>Selected color: {color}</p>
        </div>

        <label>Select a color</label>
        <input type="color" value={color} onChange={handleColorChange} />
    </div>)
}

export default ColorPicker