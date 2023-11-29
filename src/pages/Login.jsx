import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'

export default function Login() {
    const [loginData , setLoginData] = useState({
        email : "",
        password : ""
    });
    const handelLogin = (e) =>{
        e.preventDefault();
        console.log(loginData);
    }
  return (
    <>
    <Navbar/>
    <div style={{
        "width": "50%",
    }} className="mx-auto my-5">
    <h1 className='text-center'>Login</h1>
    <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" value={loginData.email} onChange={
        (e) =>{
            setLoginData({...loginData , email : e.target.value})
        }
    } className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" value={loginData.password} onChange={
        (e) =>{
            setLoginData({...loginData , password : e.target.value})
        }
    } className="form-control" id="exampleInputPassword1"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={handelLogin} className="btn btn-dark">Submit</button>
</form>
</div>
    </>
  )
}
