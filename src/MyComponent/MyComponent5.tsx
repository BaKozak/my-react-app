import { useState } from "react"

type Car = {
    year: number;
    make: string;
    model: string;
}

function MyComponent5() {

    const [cars, setCars] = useState<Car[]>([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar() {

        const newCar = { year: carYear, make: carMake, model: carModel }

        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index: number) {
        setCars(c => c.filter((_, i) => i !== index ));
    }

    function handleYearChange(event: any) {
        setCarYear(event.target.value)
    }

    function handleMakeChange(event: any) {
        setCarMake(event.target.value);
    }

    function handleModelChange(event: any) {
        setCarModel(event.target.value);
    }


    return (
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} placeholder="Enter car year" />
            <br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make" />
            <br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model" />
            <br />
            <button onClick={handleAddCar}>Add car</button>


        </div>
    )
}
export default MyComponent5