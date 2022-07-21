import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import MainNav from "./components/MainNav";
import Nav from "./components/Nav";

function App() {
  return (
    <div id="App">
      <Nav />
      <div id="main">
        <MainNav />
        <Hero />
      </div>
    </div>
  );
}

export default App;
