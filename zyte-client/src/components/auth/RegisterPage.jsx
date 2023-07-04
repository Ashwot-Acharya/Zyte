import React, { createFactory } from 'react'
import 'animate.css';
import "../../assets/css/auth.css"
import dummy_img from '../../assets/image/blender.jpg'
import axios from '../../api.js'

import { useState } from 'react';





function RegisterPage() {
const [firstname , Fname] =useState('')
const [lastname, Lname] = useState('')
const [email, setemail] = useState('')
const [password , setpassword] = useState('')



const handelsubmit = async(e) =>{
  e.preventDefault()
  const sendjsx = {
    firstName : firstname,
    lastName : lastname , 
    email : email, 
    password: password
  }
  try{
    const response =  await axios.post('/auth/register', sendjsx)
  } catch(err){
    console.log(err)
  }
}


  return (
    <div>
<div className='Login-form'>
        <div className='w-8/12 '> 
        <div className='overlay w-8/12'>

        </div>
          <img src={dummy_img} className='myimg' />
           <div className='abs-post'>
              <h1 className='text-7xl text-white text-bold animate__animated animate__bounce '>
                <a href='/'>ZYTE</a>
              </h1>
              <p className='text-2xl text-white text-bold animate_animated '>Your friendly Developer platofrm </p>
           </div>
        </div>
        <div className='w-4/12 '>
         <form className='Register-Box' onSubmit={handelsubmit}>
           <div>
           <div>
                <input className='input-text' onChange={(e)=>Fname(e.target.value)} placeholder='First Name' type='text'/>
            </div>
            <div>
                <input className='input-text' onChange={(e)=>Lname(e.target.value)} placeholder='Last Name' type='text'/>
            </div>
            <div>
                <input className='input-text'  onChange={(e)=>setemail(e.target.value)}  placeholder='email' type='text'/>
            </div>
              <div>
                    <input className='input-password' onChange={(e)=>setpassword(e.target.value)} placeholder='Password' type="password" />
              </div>  
           
              <div className=''>
              <button className='bg-blue-500 hove:bg-blue-700 mybtn text-white text-bold p-3 rounded'  >Register</button>
            </div>

           </div>
          </form>
        </div>
      
      
      </div>


    </div>
  )
}

export default RegisterPage