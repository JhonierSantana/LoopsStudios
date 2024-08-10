import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import OurCreations from "./components/OurCreations";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="Header-Main-container">
        <Header />
        <Main />
      </div>
      <Section /> {}
      <OurCreations />
      <Footer />
    </div>
  );
}

export default App;
