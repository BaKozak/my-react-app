
function Food() {

    const food1 = "Kimchi";
    const food2 = "Bulgogi";

    return (
        <ul>
            <li>Rice</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food