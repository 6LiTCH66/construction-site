import React, {useEffect} from 'react';
import "./construction.css"
import {ContactForm} from "../index";
import {Link} from "react-router-dom";

function ServicesTemplate(props) {


    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });


    }, [])

    return (
        <div className="construction-box">
            <div className="construction-header">
                <div className="construction-header_wrapper">
                    <p className="construction-header_title">
                        {props.service_title}

                    </p>
                    <hr/>
                    <p className="construction-header_description">
                        {props.service_description}

                    </p>
                </div>

            </div>

            <div className="construction-container">
                <div className="construction-wrapper">
                    <div className="work-types_container">
                        <p className="work-types_title">

                            {props.type_of_work_title}

                        </p>
                        <ul className="work-types">
                            {props.type_of_work_content.map((link, id) =>(
                                <li key={id}>
                                    <Link to={link.link_url}>
                                        {link.link_title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="work-info_container">
                        <p className="work-info_title">{props.title}</p>

                        <p className="work-info_text">
                            {props.service_content.cost_title}
                        </p>
                        <ul>
                            <li className="work-info_text">
                                {props.service_content.cost_description}
                            </li>
                        </ul>
                        <p className="work-info_text" id="work-description">
                            {props.service_content.content_description}
                        </p>
                        <ContactForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicesTemplate;