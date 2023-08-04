function StaffCard(props) {
    return(
        <div className={"staffCard columns mb-5"}>
            <figure className={"staffCard__avatar column is-narrow"}>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className={""} src={ require(`../assets/images/staff/${props.image}`) }
                     alt={`Photo de ${props.firstname} ${props.lastname}`}
                />
            </figure>
            <div className={"staffCard__text column"}>
                <h3 className={"title is-size-4 has-text-centered-mobile has-text-primary"}>{props.firstname} {props.lastname.toUpperCase()}</h3>
                <h4 className={"subtitle is-size-5 has-text-centered-mobile has-text-grey"}>{props.job}</h4>
                <p className={""}>{props.description}</p>
            </div>
        </div>
    )
}
export default StaffCard