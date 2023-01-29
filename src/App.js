import './App.css';
import {Navbar} from "./components";
import {Header, Services} from "./containers";
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Services/>

    </div>
  );
}

export default App;
