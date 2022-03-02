import React, { useEffect, useState } from 'react';
import Loaders from '../components/Loaders';
import Error from '../components/Error';
import axios from 'axios';
import { Tabs } from 'antd';
import { Tag, Divider } from 'antd';


import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const { TabPane } = Tabs;






function ProfileScreen() {

    //useEffect hooks
    const user = JSON.parse(localStorage.getItem("currentUser"))

    useEffect(() => {
        if (!user) {
            window.location.href = '/login'
        }

    }, [])

    function adminAccess(){
        window.location.href='/admin'
    }
    return (
       
        <div className='ml-3 mt-3 bs' data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
             
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="PROFILE" key="1" >
                <h4>My Profile</h4> <hr/>
                    <br></br>
                    <h5><b>Name : </b>{user.name}</h5>
                    <h5><b>Email : </b>{user.email}</h5>

                    <h5><b>Admin Access : </b>{user.isAdmin ? 'Yes' : 'No'}</h5>
                    <button className='btn btn-secondary' href='/admin' onClick={adminAccess}>ADMIN PANEL</button>
                </TabPane>
                <TabPane tab="BOOKINGS" key="2" >
                    <MyBookings />
                </TabPane>

            </Tabs>
        </div>
    )
}

export default ProfileScreen

//creating inpage component
export function MyBookings() {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const[bookings,setbookings]=useState([])
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState();
    useEffect(async () => {
        try {
            setloading(true)

            const data = (await axios.post('api/booking/getbookingsbyuserid',{userid:user._id})).data
            setbookings(data)
            setloading(false)
            
            
        }
        catch (error) {
            console.log(error);
            setloading(false)
            
        }
    }, []);

    async function cancelBooking(bookingid,busid){
        try {
            setloading(true)
            const result=(await axios.post("/api/booking/cancelbooking",{bookingid,busid})).data;
            console.log(result)
            setloading(false)
            Swal.fire('Cancelled','Booking cancelled successfully','success').then(data=>{
                window.location.reload()
            })
        } catch (error) {
            console.log(error)
            setloading(false)
            Swal.fire('Opps','Something Went Wrong','error')
        }

    }
    return (
        <div>
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md-6 align-items-center'>
                <h4 className='text-center'><b>MY BOOKINGS</b></h4><hr/>
                    {loading && (<Loaders />)}
                    {bookings && (bookings.map(booking=>{
                        return (<div className=' bs '>
                            
                            <h4>{booking.bus}</h4><hr />
                            <h5><b>Booking Id :</b> {booking._id}</h5>
                            <h5><b>Book Date :</b> {booking.fromdate}</h5>
                            <h5><b>Expire Date :</b> {booking.todate}</h5>
                            <h5><b>Amount :</b> {booking.totalamount}</h5>
                            <h5><b>Status :</b> {booking.status == 'Cancelled' ? ( <Tag color="red">Cancelled</Tag>) : (<Tag color="green">Confirmed</Tag>)}</h5>

                            
                           {booking.status !== 'Cancelled' &&(
                                <button style={{float:"right"}} className='btn btn-secondary cncl' onClick={()=>{cancelBooking(booking._id,booking.busid)}}>Cancel Booking</button>
                           )}
                            <br></br>
                           
                            
                        </div>)
                    }))}
                </div>
            </div>

        </div>
    )
}