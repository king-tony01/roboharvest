import Title from "../Title.jsx";
import style from "./Contact.module.css"
import placeholder from "/images/placeholder.png"
import contactImage from "/images/contact.jpg"
function Contact(){
    const user = `fas fa-user ${style.icon}`
    const email = `fas fa-envelope ${style.icon}`
    return(
        <section className={style.contactMain}>
            <Title title="Contact Us" subtitle="Get in touch with us!"/>
            <p className={style.half}>
                Get in touch with us! Whether you have questions, feedback, or inquiries, we're here to help. Feel free to reach out to our dedicated team members for assistance and support.
            </p>
            <section className={style.contactDivide}>
                <div className={style.wrap}>
                    <img className={style.smallImage} src={placeholder} alt="" />
                    <div>
                        <a className={style.a} href="mailto:kingtony3825@gmail.com">
                            <i className="fas fa-envelope"></i>
                            kingtony3825@gmail.com
                        </a>
                        <a className={style.a} href="tel:+2349063213825">
                            <i className="fas fa-phone"></i>
                            +234 90 6321 3825
                        </a>
                    </div>
                </div>
                <div className={style.wrap}>
                    <img className={style.smallImage} src={placeholder} alt="" />
                    <div>
                        <a className={style.a} href="mailto:kingtony3825@gmail.com">
                            <i className="fas fa-envelope"></i>
                            kingtony3825@gmail.com
                        </a>
                        <a className={style.a} href="tel:+2349063213825">
                            <i className="fas fa-phone"></i>
                            +234 90 6321 3825
                        </a>
                    </div>
                </div>
            </section>
            <p>Or you can leave us a message and we will get in touch with you as soon as possible</p>
            <section className={style.formArea}>
                <img className={style.formImage} src={contactImage} alt="" />
                <form action="" className={style.mainForm}>
                    <div className={style.input}>
                        <i className={user}></i>
                        <input className={style.inputSmall} type="text" name="name" id="" placeholder="Full name"/>
                    </div>
                    <div className={style.input}>
                        <i className={email}></i>
                        <input className={style.inputSmall} type="text" name="email" id="" placeholder="Email"/>
                    </div>
                    <textarea className={style.textArea} name="message" id="" placeholder="Write your message"></textarea>
                    <button className={style.button}>Send Message</button>
                </form>
            </section>
        </section>
    )
}
export default Contact;