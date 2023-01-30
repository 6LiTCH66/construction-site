import './App.css';
import {Navbar} from "./components";
import {Header, Services, Projects} from "./containers";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Services/>
        <Projects/>

    </div>
  );
}

export default App;
