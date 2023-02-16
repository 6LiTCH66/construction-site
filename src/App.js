import './App.css';
import React from "react";
import {Navbar, Footer, Home, ServicesTemplate} from "./components";
import {ContactUs, Offer} from "./containers";
import {Routes, Route} from "react-router-dom";
import ru from "./languages/ru.json"
function App() {

  return (

          <div className="App">

              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>

                  {ru.services.map((services) => (
                      services.type_of_work_links.map((service, index) => (
                          <Route key={index} path={service.link_url} element={
                              <ServicesTemplate
                                  service_title={services.service_title}
                                  service_description={services.service_description}
                                  type_of_work_title={services.type_of_work_title}
                                  type_of_work_content={services.type_of_work_links}
                                  title={service.link_title}
                                  service_content={service.content}
                              />
                          }/>
                      ))
                  ))}
                    <Route path="/offer" element={<Offer/>}/>
                    <Route path="/contact" element={<ContactUs/>}/>
              </Routes>
              <Footer/>
          </div>

  );
}

export default App;
