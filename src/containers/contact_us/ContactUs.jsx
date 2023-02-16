import React, {useState} from 'react';
import "./contactUs.css"
function ContactUs(props) {
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
        <div className="contact-us-box">
            <div className="contact-us-header">
                <div className="contact-us-header_wrapper">
                    <h1 className="contact-us_title">Kонтакты</h1>
                </div>
            </div>
            <div className="contact-us-container">
                <div className="contact-us_wrapper">
                    <div className="contact-us_form">

                        <div className="input-container">
                            <div className={`form-input ${name ? "" : "error-helper-text"}`}>
                                <input type="text" placeholder="Имя" id="first_name" onChange={nameChange}/>
                                <label htmlFor="first_name" className="required">Имя</label>
                            </div>
                            {!name ? <p className="error-input">Обязательное поле</p> : <></>}

                        </div>
                        <div className="input-container" style={{marginTop: "40px"}}>
                            <div className={`form-input ${email ? "" : "error-helper-text"}`}>
                                <input type="email" placeholder="Э-почта" id="email" onChange={emailChange}/>
                                <label htmlFor="email" className="required">Э-почта</label>
                            </div>
                            {!email ? <p className="error-input">Обязательное поле</p> : <></>}
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

                    </div>

                    <div className="contact-us_info">
                        <p className="contact-us_info_title">Вы можете связаться с нами, позвонив или отправив сообщение.</p>
                        <div className="contact-us-text_container">
                            <h2 className="contact-us-company contact-us-text">
                                SEMARIM OÜ
                                <br/>
                                Registrikood: 14439231
                            </h2>
                            <h2 className="contact-us-text">
                                Э-почта: <a href="mailto:rimgor@yandex.ru">rimgor@yandex.ru</a>
                                <br/>
                                Tелефон: <a href="tel:+37258491096">+372 58491096</a>
                            </h2>
                            <h2 className="contact-us-text">
                                Harju maakond, Maardu linn, Veeru tn 16-37, 74113
                            </h2>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default ContactUs;