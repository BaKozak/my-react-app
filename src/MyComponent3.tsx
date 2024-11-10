import { useState } from "react";

function MyComponent3() {

    const [car, setCar] = useState({
        year: 2024,
        make: "Volkswagen",
        model: "Touran"
    });

    function handleYearChange(event: any) {
        setCar(c => ({ ...c, year: event.target.value }));
    }

    function handleMakeChange(event: any) {
        setCar(c => ({ ...c, make: event.target.value }))
    }

    function handleModelChange(event: any) {
        setCar(c => ({ ...c, model: event.target.value }))
    }

    return (
        <div>
            <p>Car info: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChange} /> <br />
            <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
            <input type="text" value={car.model} onChange={handleModelChange} /> <br />
        </div>
    )
}
export default MyComponent3