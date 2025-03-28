import { use, useState } from "react";


interface ListGroupProps {
    items: string[];
    heading: string;
}

function ListGroup(props: ListGroupProps) {

    
    const [selectedIndex, setSelectedIndex] = useState(-1);


    const getMessage = () => {
        return items.length === 0 ? <p>No item found</p> : null;;
    }

    return (
        <>
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item, index) => (<li className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item}
                onClick={() => { setSelectedIndex(index); }}>{item}</li>))}
            </ul>
        </>
    );
}

export default ListGroup;
