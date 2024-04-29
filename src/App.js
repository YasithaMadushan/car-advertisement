import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderPage from './Components/HeaderPage';
import HomePage from "./Components/HomePage";
import CarDetailsPage from "./Components/CarDetailsPage";

function App() {
  return (
    <Router>
      <div>
        <HeaderPage />
      <div className='container mt-4'>
        <Routes>
        <Route exact path="/" Component={HomePage}/>
        <Route path="/car/:id" Component={CarDetailsPage}/>
        </Routes>
          
      </div>
      </div>
    </Router>
  );
}

export default App;
