import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Loaders from '../components/Loaders'
import Error from '../components/Error'
import Success from '../components/Success'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function RegisterScreen() {
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState();
  const [success, setsuccess] = useState();

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [password, setpassword] = useState('')
  const [cpassword, setcpassword] = useState('')

  async function register() {
    if (password == cpassword) {
      const user = {
        name,
        email,
        phone,
        password,
        cpassword
      }
      try {
        setloading(true)
        const result = await axios.post('/api/users/register', user).data
        setloading(false)
        setsuccess(true)

        // after registration complete lets clear out fields
        setname('')
        setemail('')
        setphone('')
        setpassword('')
        setcpassword('')

      }
      catch (error) {

        console.log(error)
        setloading(false)
        seterror(true)
      }
    }
    else {
      console.log('password error')
    }
  }

  return (
    <div>
      {/* if true than show this type function */}
      {loading && (<Loaders />)}
      {error && (<Error />)}


      <p className='reg'>R E G I S T E R</p>


      <div className='row m-4 register'>

        <div div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"  data-aos-duration="3000" className='col-md-4 lreg '>

          <img alt='' className='img bigimgs' src={process.env.PUBLIC_URL + '/images/register.jpg'} />

        </div>
        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000" className='col-md-6 rreg '>
          <div className='input-reg '>
            <p className='regtxt'>R E G I S T E R - U S E R</p>
            <input type='text' className='form-control' placeholder='Name' value={name} onChange={(e) => { setname(e.target.value) }} />
            <input type='text' className='form-control' placeholder='Email' value={email} onChange={(e) => { setemail(e.target.value) }} />
            <input type='text' className='form-control' placeholder='Phone' value={phone} onChange={(e) => { setphone(e.target.value) }} />
            <input type='password' className='form-control' placeholder='Password' value={password} onChange={(e) => { setpassword(e.target.value) }} />
            <input type='password' className='form-control' placeholder='Confirm Password' value={cpassword} onChange={(e) => { setcpassword(e.target.value) }} />
            <button className='btn btn-secondary btn-reg' onClick={register}>Submit</button>
            <p className='lgns'>Not new? <a className='lgn' href='/login' >Login</a></p>

          </div>
          {/* if success than show message from Success.js as we have used props */}
          {success && <Success message='Registration Successfull' />}

        </div>
      </div>
    </div>
  )
}

export default RegisterScreen