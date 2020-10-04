import React, { useEffect } from 'react';
import './App.css';
import anime from 'animejs'

function App() {
  return (
    <div className="App">
      <HelloWorldComponent />
      <HelloWorldComponent />
      <HelloWorldComponent />
    </div>
  );
}

function HelloWorldComponent() {

  const message = "Hello, World!";

  useEffect(() => {
    anime({
      targets: '.display-2',
      translateY: 250,
      rotate: 3,
      // backgroundColor: '#FFF',
      duration: 1000,
      easing: 'easeOutSine',
      delay: anime.stagger(400)
    });
    console.log("Use effect called");

  })

  return (
    <div>
      <h1 className="display-2" >{message}</h1>
    </div>
  );
}


export default App;
