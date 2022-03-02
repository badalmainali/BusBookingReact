import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout'

import Loaders from '../components/Loaders';
import Error from '../components/Error';

import moment from 'moment';
import Swal from 'sweetalert2';


function Bookingscreen() {

  //getting the params id

  const { busid, fromdate, todate } = useParams();




  // const totaldays = (todates - fromdates)

  const fromdates = moment(fromdate, 'DD-MM-YYYY')
  const todates = moment(todate, 'DD-MM-YYYY')

  //calculating total days
  const totaldays = moment.duration(todates.diff(fromdates)).asDays() + 1 //it calculates difference from todate to from date



  //useState
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [bus, setbus] = useState();
  const[data,setdata]=useState([])
  const [totalamount, settotalamount] = useState()

  

  //useEffect
  useEffect(async () => {

    if(!localStorage.getItem('currentUser')){
      window.location.reload='/login'
    }

    try {
      setloading(true)
      const data = (await axios.post("/api/buses/getbusbyid", { busid: busid })).data;
      settotalamount(data.rentperday * totaldays)
      setbus(data);

      setloading(false);
    }
    catch {
      seterror(true)
      setloading(false)

    }
  }, []);

  const username=(JSON.parse(localStorage.getItem('currentUser')).name)

  async function onToken(token) {
    console.log(token);
    const bookingDetails = {
      bus,
      userid: JSON.parse(localStorage.getItem('currentUser'))._id,
      
      fromdate,
      todate,
      totalamount,
      totaldays,
      token

    };
    try {
      setloading(true)
      const result = await axios.post('/api/booking/bookbus', bookingDetails);
      setdata(result)
      setloading(false)
      Swal.fire('Congratulations','Bus booked successfully','success').then(window.location.href('/booking'))
    } catch (error) {
      setloading(false)
    }
  }
  //
  return (
    <div>
      {/* lets write the conditions first */}
      {loading ? (<h3><Loaders /></h3>) : error ? (<h3><Error /></h3>) : (<div>
        <div className='row bookscreen mx-auto bs'>
          <h4 style={{ textAlign: 'center' }}>*Go through carefully before going to checkout*</h4><hr />
          <div className='col-md-5 '>
            <h2>{bus.name}</h2>
            <img alt='' src={bus.imageurls[0]} className='bigimg' />
          </div>

          <div className='col-md-6 mt-3'>
            <div className='mt-2'>

              <h3>Booking Details</h3><hr />
              <p><b>Your Name:</b>{username}</p>
              <p><b>Book From: </b>{fromdate}</p>
              <p><b>To: </b>{todate}</p>
              <p><b>Total Seats: </b>{bus.maxpeople}</p>
            </div>

            <div>
              <h3 style={{ textAlign: 'right' }}>Amount</h3><hr />
              <p style={{ textAlign: 'right' }}><b>Total Days: </b>{totaldays}</p>
              <p style={{ textAlign: 'right' }}><b>Rent Per Day: </b>{bus.rentperday}</p><hr />
              <h4 style={{ textAlign: 'right' }}><b>Total Amount : </b>{totalamount}</h4><hr />
            </div>
            <div style={{ float: 'right' }}>

              <StripeCheckout
                currency='NPR'
                amount={totalamount * 100}
                token={onToken}
                stripeKey="pk_test_51KUwo9A1lZDIcNEERGKrLdYiq9tkFcxwwc4eXYLa6YIqeCahD1YzPv8dX9EwIRfryTahrrbRVbQSS32yplSIl1D5004femmF8G" >
                <button className='btn btn-secondary' >Pay Now{" "}</button>
              </StripeCheckout>
            </div>
          </div>

        </div>

      </div>)}

    </div>
  )
}

export default Bookingscreen