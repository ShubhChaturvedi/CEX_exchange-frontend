import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import axios from 'axios';


export default function Signup() {
    const [signupData , setSignupData] = useState({
        name : "",
        email : "",
        password : "",
        phone : "",
        address : "",
        aadharCard : "",
        panCard : ""
    });
    const handelSignup = async (e) =>{
        e.preventDefault();
        const response = await axios.post("http://127.0.0.1:8000/auth/signup/" , signupData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(response);
    }
  return (
    <>
    <Navbar/>
    <div style={{
        "width": "50%",
    }} className="mx-auto my-5">
    <h1 className='text-center'>Sign up</h1>
    <form>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Your Name</label>
    <input type="text"
    value={signupData.name} 
    onChange={ (e) =>{
        setSignupData({...signupData , name : e.target.value})
    }}
    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email"
    value={signupData.email}
    onChange={ (e) =>{
        setSignupData({...signupData , email : e.target.value})
    }}
    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password"
    value={signupData.password}
    onChange={ (e) =>{
        setSignupData({...signupData , password : e.target.value})

    }}
    class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Phone Number</label>
    <input type="number"
    value={signupData.phone}
    onChange={ (e) =>{
        setSignupData({...signupData , phone : e.target.value})
    }}
    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Address</label>
    <input type="text" 
    value={signupData.address}
    onChange={ (e) =>{
        setSignupData({...signupData , address : e.target.value})
    }}
    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Aadhar Card</label>
    <input 
    value={signupData.aadharCard}
    onChange={ (e) =>{
        setSignupData({...signupData , aadharCard : e.target.value})
    }}
    type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Pan Card</label>
    <input type="text" 
    value={signupData.panCard}
    onChange={ (e) =>{
        setSignupData({...signupData , panCard : e.target.value})
    }}
    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={handelSignup} class="btn btn-dark">Submit</button>
</form>
</div>
    </>
  )
}
