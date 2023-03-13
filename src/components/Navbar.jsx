import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="top"> 
            <img src="https://cdn-icons-png.flaticon.com/128/724/724664.png" alt="" height={15} />
            <a> 0509418224</a>
            <span> | </span>
            <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="" height={15}/>
            <a> enquiry@urbansciencemep.com</a>
        </div>
        <div className="bottom">
            <div className="leftNav">
                <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" height={60} />
            </div>
            <div className="centerNav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Project">Project</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </div>
            <div className="rightNav">
                <button>Enquire Now</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar