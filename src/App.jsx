import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Topics Covered</h1>
      <p className='first-para'>The following is a list of all the topics we cover in the MDN learning area.</p>
      <section id="getting-started">
        <a href="#getting-started">Getting Started with the web</a>
        <p>Provides a practical introduction to web development for complete beginners.</p>
      </section>
      <section id="html-structuring">
        <a href="#html-structuring">HTML - Structuring the Web</a>
        <p>HTML is the language that we use to structure the different parts of our content
and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
      </section>
      <section id="css-styling">
        <a href="#css-styling">CSS - Styling the Web</a>
        <p>CSS is the language that we use to control our web content's style and layout, as
well as adding behavior like animation. This topic provides comprehensive
coverage of CSS.</p>
      </section>
    </div>
  );
}

export default App;
