import "./App.css";
import Footer from "./components/Footer";
import Projetos from "./components/projetos";
import Home from "./components/home";

import Header from "./components/header";
import Sobrenos from "./components/sobrenos";

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
