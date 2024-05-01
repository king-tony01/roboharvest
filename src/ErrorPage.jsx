function ErrorPage(prop){
    return(
        <section className="error-container">
            <i className="fas fa-exclamation-circle"></i>
            <p>{prop.message}</p>
        </section>
    )
}
export default ErrorPage