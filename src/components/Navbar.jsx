import React from 'react'
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { createContextProvider } from '../App';
import { useContext } from 'react';

export default function Navbar() {
  const value = useContext(createContextProvider);
  const [login, setLogin] = useState(true)

  useEffect(() => {
    if (window.location.pathname === '/signup') {
      setLogin(true)
    }
    else if (window.location.pathname === '/login') {
      setLogin(false)
    }
    else {
      setLogin(true)
    }
  }, []);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">CEX Exchange {value}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">Features</a>
        {login && <Link to="/login" className="btn btn-outline-dark">Login
        </Link>}
        {!login && <Link to="/signup" className="btn btn-outline-dark">Signup</Link>}
      </div>
    </div>
  </div>
</nav>
  )
}
