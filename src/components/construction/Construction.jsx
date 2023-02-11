import React from 'react';
import "./construction.css"
import {ContactForm} from "../index";
import {Link} from "react-router-dom"

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
                                <Link to="/terrace-construction">Строительство терасс</Link>
                            </li>

                            <li>
                                <Link to="/canopy-construction">Строительство навесов</Link>
                            </li>

                            <li>
                                <Link to="/pergola-construction">Строительство перголы</Link>
                            </li>

                            <li>
                                <Link to="/extensions-construction">Строительство пристроек</Link>
                            </li>

                            <li>
                                <Link to="/woodsheds-construction">Строительство дровников и сараев</Link>
                            </li>

                            <li>
                                <Link to="/warp-bed-construction">Устройство тёплых грядок</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="work-info_container">
                        <p className="work-info_title">{props.title}</p>

                        <p className="work-info_text">
                            Стоимость работ составляет:
                        </p>
                        <ul>
                            <li className="work-info_text">
                                просим Вас связаться с нами что бы обсудить стоимость работы
                            </li>
                        </ul>
                        <p className="work-info_text" id="work-description">
                            {props.description}
                        </p>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Construction;