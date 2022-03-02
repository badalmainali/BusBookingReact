import React, { useEffect, useState } from 'react'



import { Modal, Button, Carousel } from 'react-bootstrap'


import { Link } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Bus({ bus , fromdate, todate}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div data-aos="fade-right" className='row bs'>
            <div data-aos="fade-right" className='col-md-4 '>
                {/* we are showing the first image as it is in index 0 */}
                <img src={bus.imageurls[0]} className='img mt-3 smallimg' />

            </div>
            <div className='col-md-7'>
                <h5><b>Name:</b> {bus.name}</h5>
                <p><b>Max People:</b> {bus.maxpeople}</p>
                <p><b>Contact:</b> {bus.phonenumber}</p>
                <p><b>Type:</b> {bus.type}</p>
                <p><b>Rent Per Day: </b>{bus.rentperday}</p>

                <div style={{ float: 'right' }}>
                    <button className='btn btn-secondary' onClick={handleShow}>Explore More</button>

                    {/* hiding button unless user selects the date */}
                    {(fromdate && todate) &&(
                        <Link to={"/book/"+bus._id+"/"+fromdate+"/"+todate}> 
                        <button className='btn btn-secondary mx-2'>Book It</button>
                    </Link>
                    )
                    }
                    

                </div>

            </div>

            {/* This is for the popup */}

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>{bus.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel prevLabel='' nextLabel=''>
                        {bus.imageurls.map(url => {
                            return <Carousel.Item>
                                <img
                                    className="d-block w-100 bigimg"
                                    src={url}
                                    alt="Third slide"
                                />


                            </Carousel.Item>

                        })}
                    </Carousel>
                    <p>{bus.descriptions}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Bus