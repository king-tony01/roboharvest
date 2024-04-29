import Title from "../Title.jsx"
import vcImage from "/images/vc.jpg"
import deanImage from "/images/dean.jpg"
import style from "./Guests.module.css"
function Guests(){
    return(
        <section className={style.mainCon}>
            <Title title="Special Guests" subtitle="Celebrating Leadership in Agricultural Innovation: Our Esteemed Vice Chancellor and Dean"/>
            <section className={style.container}>
                <div className={style.card}>
                    <img className={style.cardImage} src={deanImage} alt="" />
                    <div className={style.overLay}>
                        <strong className={style.str}>Prof. Felista U. Eze</strong>
                        <p className={style.p}>
                            Dean, School of Information and Communication Technology
                        </p>
                        <span className={style.role}>Chief host</span>
                    </div>
                </div>
                <div className={style.card}>
                    <img className={style.cardImage} src={vcImage} alt="" />
                    <div className={style.overLay}>
                        <strong className={style.str}>Prof. Nnenna Nnannaya OTI</strong>
                        <p className={style.p}>
                            8th Substantive Vice-Chancellor
                            Federal University of Technology, Owerri
                        </p>
                        <span className={style.role}>Special guest</span>
                    </div>
                </div>
            </section>
        </section>
    )
}
export default Guests