import React from 'react';
import {Header, Services, Projects, Contact} from "../../containers";

function Home(props) {
    return (
        <div className="home-container">
            <Header/>
            <Services/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default Home;