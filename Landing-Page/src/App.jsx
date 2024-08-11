import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import OurCreations from "./components/OurCreations";
import Footer from "./components/Footer";
import HamburgerMenu from "./components/HamburguerMenu";

function App() {
  return (
    <div className="App">
      <div className="Header-Main-container">
        <HamburgerMenu />
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
