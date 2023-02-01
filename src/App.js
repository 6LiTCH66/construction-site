import './App.css';
import {Navbar, Footer} from "./components";
import {Header, Services, Projects, Contact} from "./containers";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Services/>
        <Projects/>
        <Contact/>

    </div>
  );
}

export default App;
