import stylesOther from './Other.module.css'
import List from '../List/List'
import ColorPicker from '../ColorPicker/ColorPicker';

function Other() {

    const fruits: any = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Banana", calories: 105 },
        { id: 3, name: "Orange", calories: 45 },
    ];

    const vegetables: any = [
        { id: 6, name: "Carrot", calories: 25 },
        { id: 7, name: "Cabbage", calories: 45 },
        { id: 8, name: "Potato", calories: 50 },
    ];


    return (
        <>
            <h1 className={stylesOther["header"]}>List of Fruits & their calories</h1>
            {fruits.length > 0 && <List items={fruits} category="Fruits" />}
            {vegetables.length > 0 && <List items={vegetables} category="Vegetables" />}
            <ColorPicker />
        </>
    )
}

export default Other