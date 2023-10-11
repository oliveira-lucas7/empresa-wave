import "./App.css";
import Footer from "./components/Footer";
import Projetos from "./components/projetos";
import Home from "./components/home";
import Sobrenos from "./components/Sobrenos";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projetos />
      <Sobrenos />
      <Footer />
    </div>
  );
}

export default App;
