import Title from "../Title"
import agendaImage from "/images/agenda.jpg"
import style from "./Schedule.module.css"
import { schedule } from "../assets/schedule.js"
import { Link } from 'react-router-dom';
function Schedule(){
    return(
        <section className={style.parent}>
            <Title  title="Agenda" subtitle="Explore, Engage, and Evolve in the Future of Food"/>
            <section className={style.divide}>
                <section>
                    <img className={style.image} src={agendaImage} alt="" />
                    <Link className={style.button} to="/registration">Register to Attend</Link>
                </section>
                <section>
                    <ul>
                        {schedule.map((s, i)=>{
                            return(
                                <li className={style.list} key={i + 1}>
                            <span className={style.number}>0{i + 1}</span>
                            <div className={style.cardWrap}>
                                <div className={style.cardHead}>
                                    <p>
                                        {s.title}
                                    </p>
                                    <i className="fas fa-chevron-down"></i>
                                </div>
                                <div className={style.content}>
                                    <strong>{s.time}</strong>
                                    <p>
                                       {s.description}
                                    </p>
                                </div>
                            </div>
                        </li>
                            )
                        })}
                    </ul>
                </section>
            </section>
        </section>
    )
}
export default Schedule