

export default function ItemList(props: any) {
    return (
        <div className="container-item-list" >
            <div className="date-container">
                <span>{props.dia}</span>
            </div>
            <div className="hour-container">
                <span>{props.hour}</span>
            </div>
        </div>
    )
}