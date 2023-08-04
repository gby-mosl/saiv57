import React, {useRef} from "react"
import emailjs from '@emailjs/browser'

function Contact() {
    const refForm = useRef()
    const handleBlur = (event) => {
        const lastname = document.getElementById('inpt_lastname')
        const firstname = document.getElementById('inpt_firstname')
        const email = document.getElementById('inpt_email')
        const company = document.getElementById('inpt_company')
        const message = document.getElementById('txt_message')
        const submit = document.getElementById('btn_submit')
        // console.log(lastname.value, firstname.value, company.value, email.value, message.value)
        const error_msg = event.target.parentNode.parentNode.querySelector(".help")
        if(event.target.value === "") {
            error_msg.classList.remove("is-hidden")
        } else {
            error_msg.classList.add("is-hidden")
        }
        submit.disabled = lastname.value === "" || firstname.value === "" || company.value === "" || email.value === "" || message.value === "";
    }


    const sendMail = (event) => {
        const notification = document.querySelector(".notification")
        event.preventDefault()
        emailjs.sendForm("service_xj52ggk", "template_r0z4y9b", refForm.current, "e6NDqNJ49TTfHv1mw").then(
            (result) => {
                console.log(result.text)
                notification.value = "Test de message"
                notification.classList.remove("is-hidden")
            },
            (error) => {
                console.log(error.text)
                notification.classList.remove("is-success")
                notification.classList.remove("is-hidden")
                notification.classList.add("is-danger")
                notification.value = "Une erreur est survenue"
            }
        )
    }

    return (
        <section className={"section contact"} id={"contact"}>
            <h1 className={"title has-text-primary"}>Contact</h1>
            <h2 className={"subtitle"}>Nous restons à votre écoute pour toute demande.</h2>
            <form ref={refForm} className={"form"} onSubmit={sendMail}>
                <div className={"field"}>
                    <label className={"label"} id={"lastname"}>Nom</label>
                    <div className={"control has-icons-left"}>
                        <input className={"input"} type={"text"} id={"inpt_lastname"} name={"lastname"} onBlur={handleBlur} />
                        <span className={"icon is-small is-left"}>
                            <i className={"fas fa-user"}></i>
                        </span>
                    </div>
                <p className="help is-danger is-hidden" id={"lastname-error"}>Veuillez saisir votre nom.</p>
                </div>

                <div className={"field"}>
                    <label className={"label"} id={"firstname"}>Prénom</label>
                    <div className={"control has-icons-left"}>
                        <input className={"input"} type={"text"} id={"inpt_firstname"} name={"firstname"} onBlur={handleBlur}/>
                        <span className={"icon is-small is-left"}>
                            <i className={"fas fa-user"}></i>
                        </span>
                    </div>
                    <p className="help is-danger is-hidden" id={"firstname-error"}>Veuillez saisir votre prénom.</p>
                </div>

                <div className={"field"}>
                    <label className={"label"} id={"company"}>Société</label>
                    <div className={"control has-icons-left"}>
                        <input className={"input"} type={"text"} id={"inpt_company"} name={"company"} onBlur={handleBlur} />
                        <span className={"icon is-small is-left"}>
                            <i className={"fas fa-building"}></i>
                        </span>
                    </div>
                    <p className="help is-danger is-hidden">Veuillez saisir le nom de votre entreprise.</p>
                </div>

                <div className={"field"}>
                    <label className={"label"} id={"email"}>E-mail</label>
                    <div className={"control has-icons-left"}>
                        <input className={"input"} type={"email"} id={"inpt_email"} name={"email"} onBlur={handleBlur}/>
                        <span className={"icon is-small is-left"}>
                            <i className={"fas fa-envelope"}></i>
                        </span>
                    </div>
                    <p className="help is-danger is-hidden">Veuillez saisir une adresse mail valide.</p>
                </div>

                <div className={"field"}>
                    <label className={"label"}>Message</label>
                    <div className={"control"}>
                        <textarea className={"textarea"} id={"txt_message"} name={"message"} rows={"8"} placeholder={"Votre message..."} onBlur={handleBlur}></textarea>
                    </div>
                    <p className="help is-danger is-hidden">Veuillez saisir votre message.</p>
                </div>

                <div className={"field is-grouped"}>
                    <button type={"submit"} className={"button is-primary"} id={"btn_submit"} disabled>Envoyer</button>
                </div>
            </form>
            <div className="notification is-success mt-3 is-hidden">
                <button className="delete"></button>
                Votre message à été envoyé.
            </div>
        </section>
    )
}

export default Contact