import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Online Quran Academy | All Rights Reserved</p>
            <div className="social-links">
                <a href="https://facebook.com" target="_blank">Facebook</a>
                <a href="https://wa.me/923001234567" target="_blank">WhatsApp</a>
                <a href="https://youtube.com" target="_blank">YouTube</a>
            </div>
        </footer>
    );
}

export default Footer;
