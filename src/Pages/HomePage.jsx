import Header from "../Header.jsx"
import Footer from "../Footer.jsx"
import About from "../Main/About.jsx"
import Speakers from "../Main/Speakers.jsx"
import Guests from "../Main/Guests.jsx"
import Schedule from "../Main/Schedule.jsx"
import Register from "../Main/Register.jsx"
import Venue from "../Main/Venue.jsx"
import Invitation from "../Main/Invitation.jsx"
import Contact from "../Main/Contact.jsx"
function HomePage(){
    return(
        <>
      <Header/>
      <About stat={true}/>
      <Speakers/>
      <Guests/>
      <Schedule/>
      <Register/>
      <Venue/>
      <Invitation/>
      <Contact/>
      <Footer/>
    </>
    )
}
export default HomePage