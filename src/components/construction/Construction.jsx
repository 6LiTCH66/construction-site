import React from 'react';
import "./construction.css"
import {ContactForm} from "../index";

function Construction(props) {
    return (
        <div className="construction-box">
            <div className="construction-header">
                <div className="construction-header_wrapper">
                    <p className="construction-header_title">
                        Строительные работы
                    </p>
                    <hr/>
                    <p className="construction-header_description">
                        Уже много лет эстонские дачники и домовладельцы пользуются услугами нашей команды.
                        <br/>
                        Сарай или пристройка к дому, крыльцо или теплая грядка, - все выполним.
                    </p>
                </div>

            </div>

            <div className="construction-container">
                <div className="construction-wrapper">
                    <div className="work-types_container">
                        <p className="work-types_title">
                            Виды строительных работ
                        </p>
                        <ul className="work-types">
                            <li>
                                <a href="">Строительство терасс</a>
                            </li>

                            <li>
                                <a href="">Строительство навесов</a>
                            </li>

                            <li>
                                <a href="">Строительство перголы</a>
                            </li>

                            <li>
                                <a href="">Строительство пристроек</a>
                            </li>

                            <li>
                                <a href="">Строительство дровников и сараев</a>
                            </li>

                            <li>
                                <a href="">Устройство тёплых грядок</a>
                            </li>
                        </ul>
                    </div>

                    <div className="work-info_container">
                        <p className="work-info_title">Строительство террас</p>

                        <p className="work-info_text">
                            Стоимость работ составляет:
                        </p>
                        <ul>
                            <li className="work-info_text">
                                просим Вас связаться с нами что бы обсудить стоимость работы
                            </li>
                        </ul>
                        <p className="work-info_text" id="work-description">
                            Строительство террасы стоит заказать именно у нас, так как мы сами выполняем работу от начала до конца. Наши специалисты заложат фундамент, а также выполнят строительные и отделочные работы.
                        </p>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Construction;