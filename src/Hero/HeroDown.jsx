import styles from "./HeroDown.module.css"
function HeroDown(){
    return(
        <section className={styles.downSection}>
            <div className={styles.downCon}>
                <i className="fas fa-clock"></i>
                <p className={styles.downP}>9 AM</p>
            </div>
            <div className={styles.downCon}>
                <i className="fas fa-calendar-day"></i>
                <p className={styles.downP}>22nd May 2024</p>
            </div>
            <div className={styles.downCon}>
                <i className="fas fa-map-marker-alt"></i>
                <p className={styles.downP}>Hall of Excellence FUTO</p>
            </div>
        </section>
    )
}
export default HeroDown