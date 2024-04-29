function Copyright(){
    const styles = {
        padding: "20px",
        background: "#003434",
        textAlign: "center",
        color: "#C4C4C4"
    }
    return(
        <p style={styles}>Copyright &copy; {new Date().getFullYear()} RoboHarvest. All rights reserved</p>
    )
}
export default Copyright;