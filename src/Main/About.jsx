import Title from "../Title.jsx";
import aboutImage from "/public/images/about.jpg"
import { Link } from "react-router-dom";
import style from "./About.module.css"
function About(prop){
    const light = `${style.button} ${style.light}`
    const heavy = `${style.button} ${style.heavy}`
    return(
        <section className={style.about}>
            <Title title="About" subtitle="Embracing Innovation for Sustainable Agriculture"/>
            <section className={style.aboutChild}>
                <img className={style.aboutImage} src={aboutImage} alt="" />
                <div>
                    <p className={style.aboutText}>
                        Welcome to RoboHarvest 2024, the 3rd Symposium of the School of Information and Communication Technology (SICT) at the Federal University of Technology Owerri (FUTO). At RoboHarvest, we're on a mission to explore the future of food production through the lens of cutting-edge technologies such as artificial intelligence, robotics, and vertical farming.
                        In today's rapidly evolving world, the future of agriculture holds immense promise and potential. With advancements in AI, robotics, and vertical farming, we're witnessing a transformative shift in the way food is grown, harvested, and distributed. RoboHarvest brings together experts, innovators, and thought leaders from academia, industry, and research to delve into this exciting frontier.
                    </p>
                    <div className={style.buttonCon}>{prop.stat ? (<>
                    <Link to="/registration" className={heavy}>Secure a Spot Now</Link>
                        <Link to="/learn-more" className={light}>Learn More</Link>
                        </>) : <Link to="/registration" className={heavy}>Secure a Spot Now</Link>}
                    </div>
                </div>
            </section>
        </section>
    )
}
export default About;