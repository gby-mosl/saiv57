import robot from "../assets/images/photos/robotic_3.jpg"
function About() {
    return(
        <section className={"section bottom-border about is-centered"} id={"about"}>
            <h3 className={"title is-size-2 has-text-grey has-text-centered has-text-weight-bold mb-6"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, veritatis!
            </h3>

            <div className={"columns about__content is-desktop is-centered"}>
                <div className={"column"}>
                    <img className={"image about__image"} src={robot}/>
                </div>
                <div className={"column"}>
                    <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Dolor quasi assumenda ea in excepturi corrupti consequatur facilis voluptate molestias delectus et iure,
                        exercitationem rerum, facere unde dignissimos, culpa repellat eius?
                    </p>
                    <p> Dolor harum dignissimos quos non est hic ut, beatae magni iste iusto, ab aliquam assumenda molestias magnam.
                        Esse, dignissimos ad doloremque officia laborum reprehenderit sunt. Sequi numquam rem quasi enim!
                    </p>
                    <p> Illum eos harum quaerat veritatis excepturi eius non dignissimos iste nemo, officiis ipsam voluptas vitae
                        recusandae animi commodi at impedit cum quia deleniti quos suscipit voluptatibus accusamus unde nulla? Doloribus.
                    </p>
                    <p> Enim nesciunt excepturi commodi ipsa praesentium in dolorem laudantium debitis a quis iure illo
                        eum amet explicabo, voluptate molestiae quidem. Rem consectetur quod exercitationem explicabo reprehenderit,
                        qui illum molestias maxime.
                    </p>
                    <a className={"button is-outlined is-primary mt-5"} href={'#contact'}>Contactez-nous</a>

                </div>
            </div>
        </section>
    )
}

export default About