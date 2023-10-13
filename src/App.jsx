import "./App.css";
import Footer from "./components/Footer";
import Projetos from "./components/projetos";
import Header from "./components/header";
import Carrosel from "./components/carrosel";
import Sobrenos from "./components/Sobrenos";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <Carrosel />
      <Card />

      <Projetos />
      <Sobrenos />
      <Footer />
    </div>
  );
}

export default App;
