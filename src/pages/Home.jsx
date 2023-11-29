import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [send , setSend] = useState({
    sendersID : "chaturvedishubh@gmail.com",
    ReceiversID : "",
    amount : ""
  });

  const handelSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://127.0.0.1:8000/exchange/tokenExchange/" , send , { headers: { "Content-Type": "application/json" }});
    console.log(response);
    
  }
  return (
    <>
      <Navbar />
      <div  style={{
        "width": "50%",
      }} className="mx-auto my-5 card">
        <div className="card-body">
        <h5 className="card-title">Your Email</h5>
          <p className="card-text">
            example@gmail.com <br /> </p>
          <h5 className="card-title">Your Balance</h5>
          <p className="card-text">$ 4000</p>

        </div>
      </div>
      <div style={{
        "width": "50%",
      }} className="mx-auto my-5">
        <h1 className='text-center'>Send Money</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Receiver's ID</label>
            <input type="email" onChange={(e) => {setSend({...send , ReceiversID : e.target.value})}} value={send.ReceiversID} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Amount</label>
            <input type="number" value={send.amount} onChange={(e) => { setSend({...send, amount : e.target.value})}} className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" onClick={handelSubmit} className="btn btn-dark">PAY NOW</button>
        </form>
      </div>

      <div style={{
        "width": "50%",
      }} className="mx-auto my-5">
        <h1 className='text-center'>Give permission to child</h1>
        <form>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Child's ID</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Amount</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-dark">ALLOW PERMISSION</button>
        </form>
      </div>
    </>
  )
}
