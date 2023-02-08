import './App.css';
import {Navbar, Footer, Home} from "./components";
import {Header, Services, Projects, Contact} from "./containers";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Footer/>

    </div>
  );
}

export default App;
