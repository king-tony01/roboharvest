import React, {useState} from "react"
import Title from "../Title"
import agendaImage from "/public/images/agenda.jpg"
import style from "./Schedule.module.css"
import { schedule } from "../assets/schedule.js"
import { Link } from 'react-router-dom';
function Schedule(){
    const [isOpen, setisOpen] = useState(Array(schedule.length).fill(false));
    const isOpenStyle = {
        margin: "10px 0",
        height: "fit-content",
        transition: "0.5s all",
    }
    const isClosedStyle = {
        margin: "10px 0",
        overflow: "hidden",
        height: "0",
        transition: "0.5s all",
    }

    function open(index){
        const newIsOpen = [...isOpen];
        newIsOpen[index] = !newIsOpen[index];
        setisOpen(newIsOpen);
    }
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
                                <li className={style.list} key={i + 1} onClick={()=>open(i)}>
                            <span className={style.number}>0{i + 1}</span>
                            <div className={style.cardWrap}>
                                <div className={style.cardHead}>
                                    <p>
                                        {s.title}
                                    </p>
                                    <i className={`fas fa-chevron-${isOpen[i] ? 'up' : 'down'}`}></i>
                                </div>
                                <div style={isOpen[i] ? isOpenStyle : isClosedStyle}>
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