import React from 'react'
import 'animate.css';
import "../../assets/css/auth.css"
import dummy_img from '../../assets/image/blender.jpg'

function RegisterPage() {
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
         <form className='Register-Box'>
           <div>
           <div>
                <input className='input-text' placeholder='Full Name' type='text'/>
            </div>
            <div>
                <input className='input-text' placeholder='email' type='text'/>
            </div>
            <div>
                <input className='input-text' placeholder='UserName' type='text'/>
            </div>
              <div>
                    <input className='input-password' placeholder='Password' type="password" />
              </div>  
              <div>
                    <input className='input-password' placeholder='Confirm Password' type="password" />
              </div>
              <div className=''>
              <button className='bg-blue-500 hove:bg-blue-700 mybtn text-white text-bold p-3 rounded'>Register</button>
            </div>

           </div>
          </form>
        </div>
      
      
      </div>


    </div>
  )
}

export default RegisterPage