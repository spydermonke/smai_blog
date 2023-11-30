import React from 'react';
import 'katex/dist/katex.min.css';
// import { BlockMath } from 'react-katex';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Kmeans from './components/Kmeans';
import Theorms1 from './components/Theorms1';
import Theorms2 from './components/Theorms2';
import Theorms3 from './components/Theorms3';
import Theorms4 from './components/Theorms4';
import Agglomerative from './components/Agglomerative';
import Nearest from './components/Nearest';
import Theory from './components/Theory';
import Theorms5 from './components/Theorms5';



function App() {
  return (
    <div className="App">
      
    <Navbar/>
    <div className=" container d-flex flex-column justify-content-center bg-white mt-5" >
     
      <Intro />
      < Kmeans/>
      <Nearest/>
      <Agglomerative/>
      <Theorms1/>
      <Theorms2/>
      <Theorms3/>
      <Theorms4/>
      <Theorms5/>
      <Theory/>
    </div>
    </div>
  );
}

export default App;
