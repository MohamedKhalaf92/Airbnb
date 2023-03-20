import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Hero } from "./Components/Hero";
import { Card } from "./Components/Card";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {data.map((CardData) => (
        <Card
          img={CardData.coverImg}
          title={CardData.title}
          description={CardData.description}
          rating={CardData.stats.rating}
          reviewCount={CardData.stats.reviewCount}
          location={CardData.location}
          price={CardData.price}
          openSpots={CardData.openSpots}
        />
      ))}
    </div>
  );
}

export default App;
