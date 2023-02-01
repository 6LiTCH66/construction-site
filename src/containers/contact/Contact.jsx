import React from 'react';
import "./contact.css"
import {ContactForm} from "../../components"
function Contact(props) {
    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <ContactForm/>
            </div>
        </div>
    );
}

export default Contact;