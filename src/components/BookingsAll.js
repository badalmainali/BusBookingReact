import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Loaders from '../components/Loaders';
import Error from '../components/Error';

function BookingsAll() {
    //usestate
    const [bookings, setbookings] = useState([])
    const [loading, setloading] = useState(true)
    const [error, seterror] = useState()
    //use effect
    useEffect(async () => {
        try {
            setloading(true)
            const data = (await axios.get("/api/booking/getallbookings")).data

            setbookings(data)
            setloading(false)
        }
        catch (error) {
            console.log(error)
            setloading(false)
            seterror(true)

        }
    }, [])
    return (
        <div className='row'>
            <div className='col-md-11'>

                <h5>All Bookings</h5>

                {loading && (<Loaders />)}

                <table className='table table-bordered bs'>
                    <thead>
                        <tr>
                            <th>Booking ID</th>

                            <th>User ID</th>
                            <th>Bus </th>
                            <th>From</th>
                            <th>To</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.length && (bookings.map(booking => {
                            return <tr>
                                <td>{booking._id}</td>

                                <td>{booking.userid}</td>
                                <td>{booking.bus}</td>
                                <td>{booking.fromdate}</td>
                                <td>{booking.todate}</td>
                                <td>{booking.status}</td>
                                <td><i className='fa fa-edit' ></i></td>
                                <td><i className='fa fa-trash' ></i></td>
                            </tr>
                        }))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

export default BookingsAll