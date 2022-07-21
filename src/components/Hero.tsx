import React from "react";

function Hero() {
  return (
    <div id="Hero">
      <div className="imgContainer">
        <img
          src="https://assets.website-files.com/5d9d9b94bce4557fd6335ce9/5d9da988bce4552fdc33d69c_iphone%20endframe-p-1080.png"
          alt="phone"
        />
      </div>
      <div className="separator"></div>
      <div id="heroText">
        <h1>
          And then there was <br />
          Pro.
        </h1>
        <p className="alter">
          A transformative triple‑camera system that adds tons of capability
          without complexity. An unprecedented leap in battery life. And a
          mind‑blowing chip that doubles down on machine learning and pushes the
          boundaries of what a smartphone can do. Welcome to the first iPhone
          powerful enough to be called Pro.
        </p>
        <h2 className="alter">From $24.95/mo. or $599 with trade-in.*</h2>
        <div className="links">
          <a href="#">Watch the keynote</a>
          <a href="#">Watch the film</a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
