import stylesList from './List.module.css'

function List(props: ListProps) {

    const category = props.category;
    const itemList = props.items || [];

    const listItems = itemList.map(
        (item: Item) =>
            <li key={item.id}>
                {item.name}: &nbsp;
                {item.calories}
            </li>)

    return (
        <>
            <h3 className={stylesList["list-category"]}>{category}</h3>
            <ol className={stylesList["list-items"]}>{listItems}</ol>
        </>)
}

type Item = {
    id: number,
    name: string,
    calories: number
}

interface ListProps {
    category?: string;
    items?: Item[];
}

export default List