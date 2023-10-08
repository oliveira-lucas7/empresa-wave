import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/header";
import Projetos from "./components/projetos";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Projetos />
      <Footer />
    </div>
  );
}

export default App;
