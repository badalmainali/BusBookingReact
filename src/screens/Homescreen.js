import React, { useState, useEffect } from 'react'
import Bus from '../components/Bus'
import axios from 'axios';
import Loaders from '../components/Loaders';
import 'antd/dist/antd.css';
import moment from 'moment';
import Error from '../components/Error';
import { DatePicker } from 'antd';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const { RangePicker } = DatePicker;

function Homescreen() {

    //usestate

    const [fromdate, setfromdate] = useState()
    const [todate, settodate] = useState()
    //for bus data
    const [buses, setbuses] = useState([])

    const [duplicatebus, setduplicatebus] = useState([])

    //for loading time 
    const [loading, setloading] = useState()
    const [error, seterror] = useState()

    //search functionality
    const [searchkey, setsearchkey] = useState()
    const [type, settype] = useState()

    //this is used for working with API endpoints
    //also known as react hooks



    useEffect(async () => {


        try {
            setloading(true)
            const data = (await axios.get('api/buses/getallbuses')).data
            setbuses(data);
            setduplicatebus(data);
            setloading(false)

        }
        catch (error) {
            seterror(true)
            console.log(error)
            setloading(false)
        }
    }, [])

    //search filter
    function filterBySearch() {

        const tempbus = duplicatebus.filter(bus => bus.name.toLowerCase().includes(searchkey.toLowerCase()))

        setbuses(tempbus)
    }

    //important part 
    //functions
    function filterByDate(dates) {
        // console.log(moment(dates[0].format('DD-MM-YYYY'))) //from date
        // console.log(moment(dates[1].format('DD-MM-YYYY'))) //to date
        setfromdate(moment(dates[0]).format('DD-MM-YYYY')) //from date
        settodate(moment(dates[1]).format('DD-MM-YYYY')) //to date

        var tempbuses = []
        var availability = false
        for (const buses of duplicatebus) {
            if (buses.currentbookings.length > 0) {
                for (const booking of buses.currentbookings) {
                    if (!moment(moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate))
                        && !moment(moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(booking.fromdate, booking.todate))
                    ) {
                        if (
                            moment(dates[0]).format('DD-MM-YYYY') !== booking.fromdate &&
                            moment(dates[0]).format('DD-MM-YYYY') !== booking.todate &&
                            moment(dates[1]).format('DD-MM-YYYY') !== booking.fromdate &&
                            moment(dates[1]).format('DD-MM-YYYY') !== booking.todate
                        ) {
                            availability = true
                        }
                    }
                }
            }
            if (availability = true || buses.currentbookings.length == 0) {
                tempbuses.push(buses)
            }
            setbuses(tempbuses)
        }
    }

    //showing part starts from here
    return (
        <div className='container'>

            <h4 style={{ textAlign: 'center' }} className='mt-3'>Book for your favourite destinations..</h4>
            <hr></hr>
            <div className='row' >
                <div className='col-md-3 datebar' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                    <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
                </div>
                <div className='col-md-5 searchbar' data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="3000">
                    <input type='text' className='form-control' placeholder='Search..' value={searchkey}
                        onChange={(e) => { setsearchkey(e.target.value) }} onKeyUp={filterBySearch}
                    />
                </div>

            </div>
            <div className='row justify-content-center mt-5'>
                {/* if loading is true show loader     than check response              else check the error */}
                {loading ? (<Loaders />)
                    : (buses.map((bus) => {

                        return <div className='col-md-10 mt-4 mx-auto'>
                            <Bus bus={bus} fromdate={fromdate} todate={todate} />
                        </div>
                    }))
                }
            </div>

        </div>
    );
}

export default Homescreen