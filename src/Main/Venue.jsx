import Title from "../Title.jsx";
import style from "./Venue.module.css"
const one = `fas fa-clock ${style.icon}`
const two = `fas fa-calendar-day ${style.icon}`
const three = `fas fa-map-marker-alt ${style.icon}`
function Venue(){
    return(
        <section className={style.venue}>
            <Title title="Venue and Time" subtitle="Our Premier Symposium Venue and Schedule of Events"/>
            <section className={style.venueDivide}>
                <iframe className={style.map} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2639.974206583124!2d6.991534100525978!3d5.388410057431219!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425dcecdcddefd%3A0x300a4f8d506bec7e!2sHall%20Of%20Excellence%201000%20Cap.%20FUTO!5e1!3m2!1sen!2sng!4v1714194982431!5m2!1sen!2sng"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <section>
                    <ul className={style.mainList}>
                        <li className={style.listLink}>
                            <i className={one}></i>
                            <p>9 AM</p>
                        </li>
                        <li className={style.listLink}>
                            <i className={two}></i>
                            <p>Wednesday 22nd May  2024</p>
                        </li>
                        <li className={style.listLink}>
                            <i className={three}></i>
                            <p>Hall of Excellence FUTO</p>
                        </li>
                    </ul>
                </section>
            </section>
        </section>
    )
}
export default Venue;