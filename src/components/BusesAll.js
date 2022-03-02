import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Loaders from '../components/Loaders';
import Error from '../components/Error';

import Swal from 'sweetalert2';

function BusesAll() {
  //usestate
  const [buses, setbuses] = useState([])
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState()
  //use effect
  useEffect(async () => {
    try {
      setloading(true)
      const data = (await axios.get("/api/buses/getallbuses")).data

      setbuses(data)
      setloading(false)
    }
    catch (error) {
      console.log(error)
      setloading(false)
      seterror(true)

    }
  }, [])

  async function deleteBus(_id){
    // alert(_id)
    try {
      setloading(true)
      const result=(await axios.delete(`/api/buses/delete/${_id}`))
      setloading(false)
      
      Swal.fire('Congrats','Bus deleted successfully','success')
      window.location.reload();
    }
    catch (error) {
      
    }
  }
  return (
    <div className='row'>
      <div className='col-md-11'>

        <h5>All Buses</h5>

        {loading && (<Loaders />)}

        <table className='table table-bordered bs'>
          <thead>
            <tr>
              <th>Bus ID</th>
              
              <th>Name</th>
              <th>Type </th>
              <th>Rent Per Day</th>
              <th>Max People</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
          {buses.length && (buses.map(bus=>{
            return <tr>
              <td>{bus._id}</td>
             
              <td>{bus.name}</td>
              <td>{bus.type}</td>
              <td>{bus.rentperday}</td>
              <td>{bus.maxpeople}</td>
              <td>{bus.phonenumber}</td>
              <td><i className='fa fa-edit' ></i></td>
              <td><i className='fa fa-trash' onClick={()=>{deleteBus(bus._id)}}></i></td>
            </tr>
          }))}
          </tbody>
        </table>
        
      </div>
    </div>
  )
}

export default BusesAll