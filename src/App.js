import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { createContext} from "react"

const createContextProvider = createContext();

function App() {
  return (
    <>
    <createContextProvider.Provider value={"$5000"}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </createContextProvider.Provider>
    </>
  );
}

export {App, createContextProvider};
