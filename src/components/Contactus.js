import React from 'react'

function Contactus() {
  return (
    <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8 text-center'>
            <h2>C O N T A C T - U S</h2> <hr />
            <div className='text-center'>
            <h3>Please Enter YOur Valid Information Only</h3>
              <div className='cntct '>
               
                <input type='text' className='form-control' placeholder='Enter Name:' />
                <input type='text' className='form-control' placeholder='Enter Your Email:' />
                <input type='text' className='form-control' placeholder='Enter Address:' />
                <input type='text' className='form-control' placeholder='Enter Phone:' />
                <input type='text' className='form-control' placeholder='Your message' />
                <br />
                <button className='btn btn-secondary cntbtn'>S U B M I T</button>
                </div>
                <br />
                <hr />
                <h3>FIND US HERE</h3>
                <br />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.3397240501326!2d85.3209996150289!3d27.70679528279208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19078d20d389%3A0x50ef4c7ca2f183a0!2sNIC%20ASIA%20Bank%20Ltd.%20Bagbazar%20Branch!5e0!3m2!1sen!2snp!4v1645672592266!5m2!1sen!2snp" width={900} height={450} style={{border:'0'}} allowfullscreen="" loading="lazy"></iframe>
                
            </div>
        </div>
    </div>
  )
}

export default Contactus