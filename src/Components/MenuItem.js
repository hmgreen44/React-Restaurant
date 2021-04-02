function MenuItem(props) {

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.menuItem.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted"></h6>
                <p className="card-text">{props.menuItem.description}</p>
                <p>{props.menuItem.price}</p>

            </div>
        </div>
    )
}

export default MenuItem