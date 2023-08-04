function Header() {
    return(
        <section className={"section header is-flex is-align-items-center is-justify-content-center"} id={"home"}>
            <div className={"header__content is-flex is-flex-direction-column is-align-items-center"}>
                <h1 className={"title is-size-1 has-text-primary has-text-weight-bold"}>
                    SAIV57
                </h1>
                <h2 className={"subtitle is-size-5 has-text-white has-text-centered has-text-weight-bold"}>
                    Bureau d'Études & Solution Robotique
                </h2>

                <a className={"button is-primary"} href={'#contact'}>Contactez-nous</a>
            </div>

        </section>
    )
}

export default Header