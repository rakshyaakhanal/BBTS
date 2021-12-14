import React from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import "./Components/Sidebar/Sidebar.css";
import Navbar from './Components/Navbar/Navbar';
import Dashboard from './Components/Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FunctionalComponentDemo from "./Components/FunctionalComponentDemo";

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/FunctionalComponentDemo" element={<FunctionalComponentDemo />} />
    //     <Route exact path="/Navbar" element={<Navbar />} />
    //     <Route exact path="/Sidebar" element={<Sidebar />} />
    //     <Route exact path="/Dashboard" element={<Dashboard />} />
    //   </Routes>
    // </BrowserRouter>
<>
  <Navbar />
  <Sidebar />
  {/* <Dashboard /> */}
</>

  )
}

export default App;
