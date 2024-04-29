import style from "./Socials.module.css"
function Socials(){
    const facebook = `fab fa-facebook ${style.icon}`
    const twitter = `fab fa-twitter ${style.icon}`
    const linkedin = `fab fa-linkedin ${style.icon}`
    const pinterest = `fab fa-pinterest ${style.icon}`
    return(
        <ul>
            <li><a className={style.a} href="#"><i className={facebook}></i></a></li>
            <li><a className={style.a} href="#"><i className={twitter}></i></a></li>
            <li><a className={style.a} href="#"><i className={linkedin}></i></a></li>
            <li><a className={style.a} href="#"><i className={pinterest}></i></a></li>
        </ul>
    )
}
export default Socials