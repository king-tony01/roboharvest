import style from "./Register.module.css"
import registerImage from "/images/registration.jpg"
function Register(){
    const icon1 = `fas fa-user ${style.icon}`
    const icon2 = `fas fa-envelope ${style.icon}`
    const icon3 = `fas fa-phone ${style.icon}`
    return(
        <section className={style.register}>
            <h2 className={style.formTitle}>Secure your spot at the forefront of agricultural innovation <br /> – register now to join the revolution!</h2>
            <section className={style.formDivide}>
                <img className={style.formImage} src={registerImage} alt="" />
                <form action="" >
                    <fieldset className={style.field}>
                        <div className={style.inputWrap}>
                            <i className={icon1}></i>
                            <input className={style.input} type="text" name="firstName" id="firstName" placeholder="First name"/>
                        </div>
                        <div className={style.inputWrap}>
                            <i className={icon1}></i>
                            <input className={style.input} type="text" name="lastName" id="lastName" placeholder="Last name"/>
                        </div>
                        <div className={style.inputWrap}>
                            <i className={icon2}></i>
                            <input className={style.input} type="email" name="email" id="email" placeholder="Email"/>
                        </div>
                        <div className={style.inputWrap}>
                            <i className={icon3}></i>
                            <input className={style.input} type="tel" name="phone" id="phone" placeholder="Phone (Optional)"/>
                        </div>
                    </fieldset>
                    <fieldset className={style.below}>
                        <select className={style.select} name="role" id="role">
                            <option value="staff">Staff</option>
                            <option value="undergraduate">Undergraduate</option>
                            <option value="postgraduate">Postgraduate</option>
                        </select>
                    </fieldset>
                    <button className={style.registerButton}>Submit</button>
                </form>
            </section>
        </section>
    )
}
export default Register