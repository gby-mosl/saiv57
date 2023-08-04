import logo from '../assets/images/logos/saiv57_head.png'

function toggleMenu() {
    const navButton = document.getElementById('navButton')
    const navMenu = document.getElementById('navMenu')
    navButton.classList.toggle('is-active')
    navMenu.classList.toggle('is-active')
}
function Navbar() {
    return(
        <nav className={"navbar is-fixed-top pl-5 pr-5"} role={"navigation"} aria-label={"main navigation"}>
            <div className={"navbar-brand"}>
                <a className={"navbar-item title is-4 has-text-primary mb-0"} href={"#"}>
                    <img src={logo} alt={"Tête de robot SAIV57"} className={"image is-32x32 mr-2"}/>SAIV57
                </a>

                <a role={"button"} className={"navbar-burger"} id={"navButton"} aria-label={"menu"} aria-expanded={"false"} onClick={toggleMenu}>
                    <span aria-hidden={"true"}></span>
                    <span aria-hidden={"true"}></span>
                    <span aria-hidden={"true"}></span>
                </a>
            </div>

            <div className={"navbar-menu"} id={"navMenu"}>
                <div className={"navbar-end"}>
                    <a className={"navbar-item is-capitalized"} href={"#home"}>
                        accueil
                    </a>
                    <a className={"navbar-item is-capitalized"} href={"#about"}>
                        à propos
                    </a>
                    <a className={"navbar-item is-capitalized"} href={"#activities"}>
                        activités
                    </a>
                    {/*<a className={"navbar-item is-capitalized"} href={"#skill"}>*/}
                    {/*    compétences*/}
                    {/*</a>*/}
                    <a className={"navbar-item is-capitalized"} href={"#staff"}>
                        équipe
                    </a>
                    <a className={"navbar-item is-capitalized"} href={"#contact"}>
                        contact
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar