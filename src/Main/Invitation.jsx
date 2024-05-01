import style from "./Invitation.module.css"
import flyer from "/public/images/flyer.jpg"
function Invitation(){
    const icon = `fas fa-cloud-download-alt ${style.icon}`
    return(
        <section className={style.invitation}>
            <img className={style.image} src={flyer} alt="" />
            <section>
                <h2 className={style.title}>Tell a friend to Tell a friend to Tell a friend!!! 🥳</h2>
                <p className={style.text}>
                    Spread the word about RoboHarvest 2024! Download our official invitation flyer and share the excitement of exploring the future of food with AI, robotics, and vertical farming.
                </p>
                <button className={style.button}>Download Flyer <i className={icon}></i></button>
            </section>
        </section>
    )
}
export default Invitation