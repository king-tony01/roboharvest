
import React, { useState } from "react";
import Spinner from "../Spinner"
import style from "./Register.module.css"
import registerImage from "/public/images/registration.jpg"
import SuccessPage from "../SuccessPage" 
import ErrorPage from '../ErrorPage';

function Register(){
    const icon1 = `fas fa-user ${style.icon}`
    const icon2 = `fas fa-envelope ${style.icon}`
    const icon3 = `fas fa-phone ${style.icon}`

    const [loading, setLoading] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("")
async function submitForm(e) {
  e.preventDefault();
  setLoading(true);
  const form = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    role: document.getElementById("role").value,
  };
  console.log(form);
  const response = await fetch(`${location.origin}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
  if (response.ok) {
    const resData = await response.json();
    console.log(resData);
    if (resData.stat) {
      setLoading(false);
      setRegistrationSuccess(true);
      setMessage(m=>m = resData.message);
    } else {
      setLoading(false);
      setError(true);
      setMessage(m=>m = resData.message);
    }
  } else {
    setError(true);
    setLoading(false);
  }
}
return (
        <section className={style.register}>
           
            {registrationSuccess ? (
                <SuccessPage message={message} />
            ) : error ? (<ErrorPage message={message}/>) : (
                <>
                    <h2 className={style.formTitle}>Secure your spot at the forefront of agricultural innovation <br /> – register now to join the revolution!</h2>
                    <section className={style.formDivide}>
                        <img className={style.formImage} src={registerImage} alt="" />
                        <form action="">
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
                            <button className={style.registerButton} onClick={async(e)=>submitForm(e)}>{loading ? <Spinner /> : 'Submit'}</button>
                        </form>
                    </section>
                </>
            )}
        </section>
    )
}
export default Register
