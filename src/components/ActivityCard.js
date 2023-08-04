function ActivityCard(props) {
    return (
        <div className={"activity-content columns is-mobile is-vcentered"}>
            <figure>
                <img className={"column activity-image"} src={ require(`../assets/images/icons/${props.image}`)} alt={"icone de présentation"} />
            </figure>
            <p className={"column activity-text"}>{props.activity}</p>
        </div>
    )
}

export default ActivityCard