import styles from "./NewsLetter.module.css"
function NewsLetter(){
    const iconsStyle = `fas fa-envelope ${styles.icon}`;
    return(
        <section className={styles.newsSec}>
            <h3 className={styles.title}>Stay informed and connected with RoboHarvest 2024!</h3>
            <p className={styles.para}>
                Sign up for our newsletter to receive the latest updates, event announcements, and exclusive insights into the future of food with AI, robotics, and vertical farming.
            </p>
            <div className={styles.newsInput}>
                <i className={iconsStyle}></i>
                <input className={styles.input} type="email" name="email" id="email" placeholder="yours@example.com"/>
                <button className={styles.button} id="signup">Sign Up</button>
            </div>
        </section>
    )
}
export default NewsLetter