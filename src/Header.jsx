import Nav from "./Nav/Nav.jsx"
import Hero from "./Hero/Hero.jsx"
import HeroDown from "./Hero/HeroDown.jsx"
import Arrow from "./Hero/Arrow.jsx"
function Header(){
    const styles = {
        background: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/images/hero.jpg)",
        backgroundSize: "100%",
        backgroundPosition: "top",
        minHeight: "100vh",
        paddingBottom: "20px"
    }
return(
    <header style={styles}>
      <Hero/>
      <HeroDown/>
      <Arrow/>
    </header>
)
}
export default Header