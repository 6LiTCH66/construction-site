import React from 'react';
import "./contactForm.css"

function ContactForm(props) {
    return (
        <>
            <div className="contact-form_row">
                <div className="form-input">
                    <input type="text" placeholder="Имя" id="first_name"/>
                    <label htmlFor="first_name">Имя</label>
                </div>
                <div className="form-input">
                    <input type="email" placeholder="Э-почта" id="email"/>
                    <label htmlFor="email">Э-почта</label>
                </div>
            </div>
            <div className="contact-form_row">
                <div className="form-input">
                    <input type="tel" placeholder="Телефон" id="telephone"/>
                    <label htmlFor="telephone">Телефон</label>
                </div>
                <div className="form-input">
                    <input type="text" placeholder="Место работы" id="working_place"/>
                    <label htmlFor="working_place">Место работы</label>
                </div>
            </div>
            <div className="form-input contact-form_row">
                <textarea id="work_description" rows="5" placeholder="Описание работы"></textarea>
                <label htmlFor="work_description" className="textarea-label">Описание работы</label>
            </div>
        </>
    );
}

export default ContactForm;