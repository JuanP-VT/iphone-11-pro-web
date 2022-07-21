import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div id="App">
      <Nav />
      <div id="main">
        <Hero />
      </div>
    </div>
  );
}

export default App;
