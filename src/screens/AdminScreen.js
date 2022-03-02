import React, { useEffect, useState } from 'react'

import BookingsAll from '../components/BookingsAll';

import { Tabs } from 'antd';
import BusesAll from '../components/BusesAll';
import AllUsers from '../components/AllUsers';
import Swal from 'sweetalert2';
import AddBus from '../components/AddBus';
const { TabPane } = Tabs;

function AdminScreen() {

  useEffect(()=>{
    if(!JSON.parse(localStorage.getItem('currentUser')).isAdmin){
      const a=window.location.href='/'
      { a ? (Swal.fire('Failed','You are not Admin','error')) : (Swal.fire('Welcome','Welcome to Admin Page','success'))}
      
    }
  },[])

  return (
    <div className='mt-3 ml-3 bs'>
      <h2>Admin Panel</h2>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="Bookings" key="1">
          <BookingsAll />
        </TabPane>
        <TabPane tab="Buses" key="2">
          <BusesAll />
        </TabPane>
        <TabPane tab="Add Bus" key="3">
          <AddBus />
        </TabPane>
        <TabPane tab="Users" key="4">
          <AllUsers />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default AdminScreen





//for all buses
export function Buses() {

  
}