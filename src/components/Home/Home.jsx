import React, {useEffect}from 'react';
import {Header, Services, Projects, Contact} from "../../containers";

function Home(props) {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
    }, [])
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