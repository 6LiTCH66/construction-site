import React from 'react';
import "./services.css"
import construction_work from "../../assets/construction.jpg"
import repair_work from "../../assets/repair.jpg"
import consultation from "../../assets/consultation.jpg"
function Services(props) {
    return (
        <div className="services-container">
            <div className="services-content_header">
                <span className="services-content_title">
                    Наши услуги
                </span>
                <span className="services-content_description">
                    Наша компания предлагает широкий спектр строительных услуг для клиентов, желающих провести строительные или ремонтные работы.
                </span>

            </div>
            <div className="services-content_body">

                <div className="services-content_wrapper" id="construction_work">
                    <div className="services-content_wrapper-image">
                        <img src={construction_work} alt="construction work"/>
                    </div>
                    <div className="services-content_wrapper-content">
                        <span className="services-content_wrapper_title">
                            Строительство
                        </span>
                        <span className="services-content_wrapper_description">
                            Мы предоставляем услуги по строительству терасс, навесов, перголы, пристроек, дровников - сараев и устройство тёплых грядок.
                        </span>
                        <a href="#" className="services-content_button">Узнать больше</a>
                    </div>
                </div>



                <div className="services-content_wrapper" id="repair_work">
                    <div className="services-content_wrapper-image" id="repair_work-image">
                        <img src={repair_work} alt="repair work"/>
                    </div>
                    <div className="services-content_wrapper-content">
                        <span className="services-content_wrapper_title">
                            Ремонт
                        </span>
                        <span className="services-content_wrapper_description">
                            Наша компания предлагает профессиональные услуги по ремонту и реставрации полов, деревянных фасадов и террас.                        </span>
                        <a href="#" className="services-content_button">Узнать больше</a>
                    </div>
                </div>


                <div className="services-content_wrapper" id="consultation_work">
                    <div className="services-content_wrapper-image">
                        <img src={consultation} alt="consultation"/>
                    </div>
                    <div className="services-content_wrapper-content">
                        <span className="services-content_wrapper_title">
                            Консультация
                        </span>
                        <span className="services-content_wrapper_description">
                            С удовольствием предоставляем Вам бесплатную консультацию. Наши специалисты готовы помочь Вам с решением любой проблемы. Задавайте вопросы и получайте качественные ответы.                        </span>
                        <a href="#" className="services-content_button">Узнать больше</a>
                    </div>
                </div>



            </div>
        </div>
    );
}

export default Services;