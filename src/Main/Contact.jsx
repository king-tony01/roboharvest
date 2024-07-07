import React, {useState} from "react";
import Title from "../Title.jsx";
import style from "./Contact.module.css"
import placeholder from "/public/images/placeholder.png"
import contactImage from "/public/images/contact.jpg"
import ErrorPage from "../ErrorPage.jsx";
import SuccessPage from "../SuccessPage.jsx";
import Spinner from "../Spinner.jsx";


function Contact(){
    const user = `fas fa-user ${style.icon}`
    const email = `fas fa-envelope ${style.icon}`

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    async function sendMessage(e){
        e.preventDefault();
        setLoading(true);
    const message = {
        email: document.getElementById("email").value,
        fullName: document.getElementById("fullname").value,
        message: document.getElementById("message").value
    }
    const response = await fetch(`${location.origin}/message`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(message),
    });
    const resData = await response.json();
    if(resData.stat){
        setLoading(false);
        setSuccess(true)
    }else{
        setError(true);
        setLoading(false);
    }
}

    return(
        <section className={style.contactMain}>
            {success ? (
                <SuccessPage message="Message sent successfuly"/>
            ) : error ? (<ErrorPage message="Problem occured while sending message"/>) : <>
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
                            nkemdirimedward@gmail.com
                        </a>
                        <a className={style.a} href="tel:+2349063213825">
                            <i className="fas fa-phone"></i>
                            +234 81 0302 5793
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
                        <input className={style.inputSmall} type="text" name="name" id="fullname" placeholder="Full name"/>
                    </div>
                    <div className={style.input}>
                        <i className={email}></i>
                        <input className={style.inputSmall} type="text" name="email" id="email" placeholder="Email"/>
                    </div>
                    <textarea className={style.textArea} name="message" id="message" placeholder="Write your message"></textarea>
                    <button className={style.button} onClick={(e)=>sendMessage(e)}>{loading ? <Spinner/> : "Send Message"}</button>
                </form>
            </section>
            </>}
        </section>
    )
}
export default Contact;