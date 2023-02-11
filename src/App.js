import './App.css';
import {Navbar, Footer, Home, ServicesTemplate} from "./components";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ru from "./languages/ru.json"
import {useEffect} from "react";
function App() {

  return (
      <BrowserRouter>
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

              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>

  );
}

export default App;
