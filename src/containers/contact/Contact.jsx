import React, {useState} from 'react';
import "./contact.css"
import {ContactForm} from "../../components"

function Contact(props) {
    const [value, setValue] = useState();

    return (
        <div className="contact-container">
            <div className="contact-wrapper">
                <p className="contact-info">
                    <i>
                        Cвяжитесь с нами через форму или по номеру +327 555 555 55
                    </i>
                </p>
                <select className="form-select" defaultValue="DEFAULT" onChange={(e) => setValue(e.target.value)}>
                    <option value="DEFAULT" defaultValue hidden>Пожалуйста выберите</option>
                    <option value="building">Строительство</option>
                    <option value="repair">Ремонт</option>
                    <option value="consultations">Консультации</option>
                </select>
                <ContactForm/>
            </div>
        </div>
    );
}

export default Contact;