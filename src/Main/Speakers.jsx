import Title from "../Title.jsx";
import SpeakerCard from "./SpeakerCard.jsx";
import style from "./Speakers.module.css"
import edwardImage from "/images/edward.jpg"
import myProfile from "/images/myprofile.png"
import daniel from "/images/daniel.jpg"

function Speakers(){
    return(
        <section className={style.container}>
            <Title title="Speakers" subtitle="Meet the Visionaries Shaping the Future of Agriculture"/>
            <section className={style.grid}>
                <SpeakerCard fullName="Okolie Amuche Anthony" department="Information Technology" role="Backend Developer" image={myProfile}/>
                <SpeakerCard fullName="Nkemdirim Edward Nnamdi" department="Software Engineering" role="Frontend Developer" image={edwardImage}/>
                <SpeakerCard fullName="Chinatu Daniel Chimeriri" department="Information Technology" role="Technical Writter" image={daniel}/>
            </section>
        </section>
    )
}
export default Speakers