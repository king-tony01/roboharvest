import React, {useState} from "react";
import styles from "./NewsLetter.module.css"
import Spinner from "../Spinner";
import SuccessPage from "../SuccessPage";
import ErrorPage from "../ErrorPage";
function NewsLetter(){
    const iconsStyle = `fas fa-envelope ${styles.icon}`;

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("")

    async function subscribe(){
        setLoading(l => l = true)
        const response = await fetch(`${location.origin}/newsletter`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({email: document.getElementById("subscribe_email").value})
        })
        const resdata = await response.json();
        if(resdata.stat){
            setLoading(l => l = false);
            setSuccess(s => s = true);
            setMessage(m => m = resdata.message)
            document.getElementById("subscribe_email").value = ""
        }else{
            setLoading(l => l = false);
            setError(e => e = true)
        }
    }
    return(
        <section className={styles.newsSec}>
            <h3 className={styles.title}>Stay informed and connected with RoboHarvest 2024!</h3>
            <p className={styles.para}>
                Sign up for our newsletter to receive the latest updates, event announcements, and exclusive insights into the future of food with AI, robotics, and vertical farming.
            </p>
            <div className={styles.newsInput}>
                <i className={iconsStyle}></i>
                <input className={styles.input} type="email" name="email" id="subscribe_email" placeholder="yours@example.com"/>
                <button className={styles.button} id="signup" onClick={subscribe}> {loading ? <Spinner/> : "Sign Up"}</button>
            </div>
            {success ? <SuccessPage message={message}/> : error ? <ErrorPage message={message}/> : ""}
        </section>
    )
}
export default NewsLetter