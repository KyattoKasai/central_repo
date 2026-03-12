import './ListItem.css'

function ListItem(props) {
    return (
        <>
            {props.listItemData.map((item, index) => (
                <div className="list-item" key={index}>
                    <img src={item.imgSrc} alt={item.alt} />
                    <div>
                        <h3>{item.h3}</h3>
                        <p>{item.p}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListItem;