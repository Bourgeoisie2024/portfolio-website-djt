import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Socials from "./components/Socials";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <TechStack />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
