import React from 'react';
import "./construction.css"
function Construction(props) {
    return (
        <div className="construction-container">
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
            {/*<div className="construction-wrapper">*/}

            {/*</div>*/}
        </div>
    );
}

export default Construction;