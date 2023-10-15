import React from "react";
import logo from './images/Logo.svg';

function Footer() {
    return(
        <footer className="footer-container">
            <img src={logo}height={200} width={200} alt="Logo"/>
            <section>
                <h1>Navigation</h1>
                <ul className="footer-menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reservation">Reservation</a></li>
                    <li><a href="#order">Order Online</a></li>
                    <li><a href="#login">Login</a></li>
                </ul>

            </section>
            <section>
                <h1>Contact</h1>
                <ul className="footer-menu">
                    <li><a href="#phone">Phone Number</a></li>
                    <li><a href="#email">Email</a></li>
                    <li><a href="#address">Address</a></li>
                </ul>
            </section>
            <section>
                <h1>Social Media</h1>
                <ul className="footer-menu">
                    <li><a href="#insta">Instagram</a></li>
                    <li><a href="#linkdin">LinkedIn</a></li>
                    <li><a href="#pinterest">Pinterest</a></li>
                </ul>
            </section>

        </footer>
    )

}
export default Footer;