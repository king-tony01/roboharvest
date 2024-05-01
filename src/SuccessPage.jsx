function SuccessPage(prop){
    return(
        <section className="success-container">
            <i className="fas fa-check-circle"></i>
            <p>{prop.message}</p>
        </section>
    )
}

export default SuccessPage