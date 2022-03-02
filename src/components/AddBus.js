import React, { useState } from 'react'
import axios from 'axios';
import Loaders from '../components/Loaders';
import Error from '../components/Error';

import Swal from 'sweetalert2';
function AddBus() {

    //usestate for all fields
    const[name,setname]=useState()
    const[maxpeople,setmaxpeople]=useState()
    const[phonenumber,setphone]=useState()
    const[rentperday,setrentperday]=useState()
    const[type,settype]=useState()
    const[imgone,setimgone]=useState()
    const[imgtwo,setimgtwo]=useState()
    const[imgthree,setimgthree]=useState()
    const[description,setdescription]=useState()

    const[loading,setloading]=useState(true)
    const[error,seterror]=useState()

    //function for adding the bus
    async function addBus(){

      const newbus={
        name,
        maxpeople,
        phonenumber,
        rentperday,
        type,
        imageurls:[imgone,imgtwo,imgthree],
        description
      }
      try {
        setloading(true)
       const result=await (axios.post('/api/buses/addbus',newbus).data)
       setloading(false)
       
       console.log(result)
       Swal.fire('Congrats','Bus Added Successfully','success')
       window.location.reload();
     
       
       
      } 
      catch (error) {
        setloading(false)
        console.log(error)
      }
    }

  return (
    <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
          <h3 className='addbustxt'>ADD BUS FILLING THE FORMS</h3>
            <input type='text' className='form-control' placeholder='Bus Name' value={name} onChange={(e)=>{setname(e.target.value)}} />
            <input type='text' className='form-control' placeholder='Max People' value={maxpeople} onChange={(e)=>{setmaxpeople(e.target.value)}} />
            <input type='text' className='form-control' placeholder='Phone Number' value={phonenumber} onChange={(e)=>{setphone(e.target.value)}}/>
            <input type='text' className='form-control' placeholder='Rent Per Day' value={rentperday} onChange={(e)=>{setrentperday(e.target.value)}} />
            <input type='text' className='form-control' placeholder='Type' value={type} onChange={(e)=>{settype(e.target.value)}} />
            <input type='text' className='form-control' placeholder='Image Url One' value={imgone} onChange={(e)=>{setimgone(e.target.value)}} />
            <input type='text' className='form-control' placeholder='Image Url Two' value={imgtwo} onChange={(e)=>{setimgtwo(e.target.value)}} />
            <input type='text' className='form-control' placeholder='Image Url Three' value={imgthree} onChange={(e)=>{setimgthree(e.target.value)}} />
            <input type='text' className='form-control' placeholder='Descriptions' value={description} onChange={(e)=>{setdescription(e.target.value)}} />
            
            <div className='btnaddbus'>
            <button className='btn btn-secondary' onClick={addBus}>S U B M I T</button>
            </div>
            

        </div>
    </div>
  )
}

export default AddBus