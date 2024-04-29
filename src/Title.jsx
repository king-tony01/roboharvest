function Title(props){
    const sec = {
        margin: "20px 0",
        textAlign: "center"
    }
    const strong = {
        color: "#008080",
        display: "block",
        fontSize: "20px"
    }
    const h2 = {
        fontSize: "30px",
        maxWidth: "800px",
        margin: "0 auto"
    }
    return(
        <section style={sec}>
            <strong style={strong}>{props.title}</strong>
            <h2 style={h2}>{props.subtitle}</h2>
        </section>
    )
}
export default Title