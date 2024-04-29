import Socials from "./Socials.jsx";
import style from "./MiddleFooter.module.css"
function MiddleFooter(){
    const styles = {
        color: "white",
        textDecoration: "none"
    }
    return(
        <section className={style.middle}>
            <Socials/>
            <div>
                <a style={styles} href="#">Terms of Service |</a>
                <a style={styles} href="#"> Privacy Policy</a>
            </div>
        </section>
    )
}
export default MiddleFooter;