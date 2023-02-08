import './App.css';
import {Navbar, Footer, Home, Construction} from "./components";
import {Header, Services, Projects, Contact} from "./containers";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/terrace-construction" element={<Construction/>}/>
              </Routes>
              <Footer/>
          </div>
      </BrowserRouter>

  );
}

export default App;
