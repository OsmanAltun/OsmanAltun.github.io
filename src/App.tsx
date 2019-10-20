import React from 'react';
import Navigation from "./components/Navigation"
import Intro from "./components/Intro"
import AboutMe from "./components/AboutMe"
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Intro />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
