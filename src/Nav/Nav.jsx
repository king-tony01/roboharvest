import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from "./Nav.module.css";
import logo from "/images/logo.png";

function Nav() {
        //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const current = pathname.split("/")
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <img src={logo} alt="Logo" />
        <h2><span className={styles.span}>Robo</span><span className={styles.span}>Harvest</span></h2>
      </Link>
      <ul>
        <li><Link exact className={current[1] === "" ? `${styles.active}` : ""} to="/">Home</Link></li>
        <li><Link className={current[1] === "about" ? `${styles.active}` : ""} to="/about">About</Link></li>
        <li><Link className={current[1] === "speakers" ? `${styles.active}` : ""} to="/speakers">Speakers</Link></li>
        <li><Link className={current[1] === "schedule" ? `${styles.active}` : ""} to="/schedule">Schedule</Link></li>
        <li><Link className={current[1] === "registration" ? `${styles.active}` : ""} to="/registration">Registration</Link></li>
        <li><Link className={current[1] === "venue" ? `${styles.active}` : ""} to="/venue">Venue</Link></li>
        <li><Link className={current[1] === "contact" ? `${styles.active}` : ""} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
