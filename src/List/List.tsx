import stylesList from './List.module.css'

function List(props: ListProps) {

    const category = props.category || "No category";
    const itemList = props.items || [];

    const listItems = itemList.length > 0
        ? itemList.map(
            (item: Item) =>
                <li key={item.id}>
                    {item.name}: {item.calories}
                </li>)
        : null;

    return (
        <>
            <h3 className={stylesList["list-category"]} data-cy="list-category">{category}</h3>
            {listItems && (
                <ol className={stylesList["list-items"]} data-cy="list-items">{listItems}</ol>
            )}
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