import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="top"> 
            <img src="https://cdn-icons-png.flaticon.com/128/724/724664.png" alt="" height={15} />
            <a href="#"> 0509418224</a>
            <span> | </span>
            <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="" height={15}/>
            <a href="#"> enquiry@urbansciencemep.com</a>
        </div>
        <div className="bottom">
            <div className="leftNav">
                <img src="https://www.urbansciencemep.com/_next/static/images/blackLogo-10fc2f582f155efcc2c792a97edc1f33.png" alt="" height={60} />
            </div>
            <div className="centerNav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Project</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
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