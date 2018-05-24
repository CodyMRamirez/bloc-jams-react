import React from 'react';
import './../Landing.css';

const Landing = () => (
  <section className="landing">
    <div className="title" id="bloc-jams">
      <h1 className="bloc-jams">Bloc Jams</h1>
      <h1 className="hero-title">Turn the music up!</h1>
    </div>
    <section className="selling-points">
      <div className="point" id="first-point">
        <h2 className="point-title">Choose your music</h2>
        <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
      </div>
      <div className="point" id="second-point">
        <h2 className="point-title" id="point-three">Unlimited, streaming, ad-free</h2>
        <p className="point-description">No arbitrary limits. No distractions.</p>
      </div>
      <div className="point" id="third-point">
        <h2 className="point-title">Mobile enabled</h2>
        <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
      </div>
    </section>
  </section>
);

export default Landing;
