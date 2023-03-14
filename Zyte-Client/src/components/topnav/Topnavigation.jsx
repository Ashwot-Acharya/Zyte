import React from 'react'
import "../../assets/css/navigation.css"

function Topnavigation() {
  return (
    <nav className='nav-nav'>
      <div className='nav'>
      <div className='navi-comp'>
            <div className='el-comps'>ZYTE</div>
            <div className='el-comps'>About</div>
        </div>
        <div className='navi-comp'>
                <div className='el-comps'>Profile</div>
                <div className='bg-blue-500 nav-button hover:bg-blue-700 text-white font-bold'>
                  <a href='/register'><button className='el-comps'> Get Started </button> </a>
                </div>
        </div>
      </div>
    </nav>
  )
}

export default Topnavigation