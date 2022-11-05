import logo from './logo.svg';
import './App.css';
import { Tooltip, Box } from '@mantine/core';
import {BrowserRouter, Routes, Route}from 'react-router-dom'

import Homepage from "./pages/Homepage";
import Contact from './pages/Contact';

function App() {
  return (<BrowserRouter>
  <Routes>
  <Route path="/*" element={
     <Homepage/>
    }/>
  <Route
    path="/contact"
    element={
     <Contact/>
    }/>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
