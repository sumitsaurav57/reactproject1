import Navbar from './navbar';
import Input from './input';
import './App.css';
import { useState } from 'react';
import img2 from './images/3.svg'
import Section from './Section';

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace('./', ' ')] = r(item);
  })
  return images;
}

function App() {
/*   const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
  console.log(images) */
/*   const img = img2; */
  return (
    <div className="App">
      <header className="App-header relative overflow-hidden">
        <Navbar />
        <Section/>
        <Input/>
      </header>
    </div>
  );
}

export default App;
