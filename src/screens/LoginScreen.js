import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Loaders from '../components/Loaders'
import Error from '../components/Error'
import Success from '../components/Success'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function LoginScreen() {

  

  //working on usestate
  const[success,setsuccess]=useState()
  const[loading,setloading]=useState(false)
  const[error,seterror]=useState()

  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')

 async function login(){
    const user={
      email,
      password
       
      
      
    }
    try {
      setloading(true)
      const result=(await axios.post('/api/users/login',user)).data
      setloading(false)

      //clearing out the field after successs
      setemail('')
      setpassword('')
      //lets navigate the user after login
      //storing user result
      localStorage.setItem('currentUser',JSON.stringify(result));
      

      window.location.href='/booking'
    }
     catch (error) {
      console.log(error)
      setloading(false)
      seterror(true)
    }
    
  }
  
  return (
    <div>
       <p className='reg'>L O G I N</p>
      
      {/* lets see the looping for the loading and the error */}
      {loading && (<Loaders/>)}
      
      {/* {success && (<Success message={'Login Successfull'}/>) } */}
      
        <div className='row m-4 login'>
        
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='col-md-8 rreg '>
         
          <div className='input-reg '>
            <p className='regtxt lgnhd'>L O G I N - U S E R</p>
            
            <input type='text' className='form-control' placeholder='Email' value={email} onChange={(e)=>{setemail(e.target.value)}} />
            
            <input type='password' className='form-control' placeholder='Password' value={password} onChange={(e)=>{setpassword(e.target.value)}} />


          
            <button className='btn btn-secondary btn-reg' onClick={login}  >Login</button>
            <p className='lgns'>You can register from, <a className='lgn' href='/register' >Register</a></p>
            
          </div>
           {/* error message handling */}
        {error && (<Error message='Invalid Credentials'/>)}
        </div>
      </div>
    </div>
  )
}

export default LoginScreen