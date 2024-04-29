import style from "./SpeakerCard.module.css"

function SpeakerCard(props){
    const facebook = `fab fa-facebook ${style.icon}`
    const linkedin = `fab fa-linkedin ${style.icon}`
    const twiter = `fab fa-twitter ${style.icon}`
    const instagram = `fab fa-instagram ${style.icon}`
    return(
        <section className={style.card}>
            <img className={style.cardImage} src={props.image} alt="" />
            <div className={style.cardOverlay}>
                <strong>{props.fullName}</strong>
                <p className={style.para}>{props.role}</p>
                <small className={style.small}>{props.department}</small>
                <div className={style.socials}>
                    <a href="#"><i className={facebook}></i></a>
                    <a href="#"><i className={linkedin}></i></a>
                    <a href="#"><i className={twiter}></i></a>
                    <a href="#"><i className={instagram}></i></a>
                </div>
            </div>
        </section>
    )
}
export default SpeakerCard