import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <>
        <div className="container1">
        <h3>Connect with us</h3>
            <div className="heading">
                <div className="left">
                    <div className='border'>
                    <header>Enquiry</header>
                    <p>enquiry@urbansciencemep.com</p>
                    <p>+91 XXX XXXX XXX</p>
                    </div>
                    <div className='border'>
                    <header>Placement Team</header>
                    <p>enquiry@urbansciencemep.com</p>
                    <p>+91 XXX XXXX XXX</p>
                    </div>
                    <div>
                    <header>General Enquiry</header>
                    <p>enquiry@urbansciencemep.com</p>
                    <p>+91 XXX XXXX XXX</p>
                    </div>
                </div>
                <div className="right">
                    <label htmlFor="email">Email
                        <input type="text" name="email" id="email" />
                    </label>
                    <label htmlFor="email">Contact Number
                        <input type="number" name="email" id="email" />
                    </label>
                    <label htmlFor="email">Massage
                        <input type="text" name="email" id="email" />
                    </label>
                    <button>Submit</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact