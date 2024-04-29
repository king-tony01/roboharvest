import styles from "./Hero.module.css"
import { Link } from 'react-router-dom';
function Hero(){
    const iconStyle = `fas fa-arrow-right-long ${styles.icon}`
return(
    <section className={styles.hero}>
        <h1 className={styles.titleOrange}>The future of food</h1>
        <h1 className={styles.titleWhite}>AI, Robotics and Vertical Farming</h1>
        <p className={styles.heroDesc}>Join us for the 3rd Symposium of the School of Information and Communication Technology (SICT) as we delve into the future of food production. Discover how AI, robotics, and vertical farming are revolutionizing agriculture.</p>
        <Link to="/registration" className={styles.heroButton}>Register Now <i className={iconStyle}></i></Link>
    </section>
)
}
export default Hero