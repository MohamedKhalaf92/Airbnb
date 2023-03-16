import './App.css';
import {Navbar} from "./Components/Navbar"
import {Hero} from "./Components/Hero"
import {Card} from "./Components/Card"
import data from "./data"

function App() {
 
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     {data.map((CardData => 
       <Card data={CardData}/>
       
     ))}
  
    </div>
  );
}

export default App;
