import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Button,Card} from 'react-bootstrap';
import Header from './Components/Header/Header';
import "./index.css"
import AllCards from './Components/Main/AllCards';
import Footer from './Components/Main/Footer';
import { Route,Routes } from 'react-router-dom';
import Komms from './Components/Komms/Komms1';





function App() {
  
  
  
  

  return<>
  
  <Header />
  <AllCards/>
  <Footer/>
  <Komms/>
  <Routes>
    <Route path="/komms1" element={<Komms />}></Route>
  </Routes>
  
  
    </>
  ;

}

export default App;
