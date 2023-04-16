import React from "react";
import '../assets/css/App.css';
import '../assets/css/Header.css';
import '../assets/css/Body.css';
import '../assets/css/Footer.css';

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import ApiUsers from "./ApiUsers";
function App() {
  return (
    <React.StrictMode>
       <ApiUsers/>
      <Header/>
       <Body/>
       <Footer/>

  
    </React.StrictMode>
  );
}

export default App;
