import React, {useState} from 'react';
import "./contactForm.css"

function ContactForm(props) {
    const [name, setName] = useState(" ")
    const [email, setEmail] = useState(" ")

    const nameChange = event =>{
        setName(event.target.value);

        if (event.target.value.trim().length > 0){
            console.log('✅ Input is not empty');
        }else{
            console.log('⛔️ Input is empty');
        }
    }
    const emailChange = event =>{
        setEmail(event.target.value);

        if (event.target.value.trim().length > 0){
            console.log('✅ Input is not empty');
        }else{
            console.log('⛔️ Input is empty');
        }
    }

    return (
        <>
            <div className="contact-form_row">
                <div className="input-container">
                    <div className={`form-input ${name ? "" : "error-helper-text"}`}>
                        <input type="text" placeholder="Имя" id="first_name" onChange={nameChange}/>
                        <label htmlFor="first_name" className="required">Имя</label>
                    </div>
                    {!name ? <p className="error-input">Обязательное поле</p> : <></>}

                </div>
                <div className="input-container">
                    <div className={`form-input ${email ? "" : "error-helper-text"}`}>
                        <input type="email" placeholder="Э-почта" id="email" onChange={emailChange}/>
                        <label htmlFor="email" className="required">Э-почта</label>
                    </div>
                    {!email ? <p className="error-input">Обязательное поле</p> : <></>}
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

            <div className="form-button">
                <button className="send-button">
                    Отправить форму
                </button>
            </div>

        </>
    );
}

export default ContactForm;