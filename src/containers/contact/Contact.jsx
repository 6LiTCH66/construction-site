import React, {useState} from 'react';
import "./contact.css"
import {ContactForm} from "../../components"

function Contact(props) {
    const [value, setValue] = useState();

    return (
        <div className="contact-container">
            <div className="contact-wrapper">
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