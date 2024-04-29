import Copyright from "./Copyright.jsx"
import MiddleFooter from "./MiddleFooter.jsx"
import NewsLetter from "./NewsLetter/NewsLetter.jsx"
function Footer(){
    const styles = {
        background: "#004848",
        paddingTop: "20px"
    }
    return(
        <footer style={styles}>
            <NewsLetter/>
            <MiddleFooter/>
            <Copyright/>
        </footer>
    )
}
export default Footer