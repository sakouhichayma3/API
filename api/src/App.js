import React from 'react';
import Userliste from './composant/Userliste';

const App = () => {
  return (
    <div style={{marginTop: "50px", boxSizing:"border-box", borderBlockStyle:"double", backgroundImage: "linear-gradient(pink,lightblue)", padding:"30px",fontsize: "20px", color:"#4a54f1", textalign:"center"}}>
      <Userliste/>
    </div>
  );
}

export default App;
