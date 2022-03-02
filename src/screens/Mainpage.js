import React from 'react'
import {Carousel} from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Mainpage() {
  return (
    <div className='row m-4 '>
      <h5 className='text-center mainpagetxt'>WELCOME TO NEW ERA OF BOOKING</h5>
      <div className='col-md-8 mt-5 midsec' >
        <Carousel>
          <Carousel.Item>
            <img height={550} width={560}
              className="d-block w-100 imgss"
              src="https://img.search.brave.com/sST_kgiNXNSCfM_jMU5LTFnkXXTjFQKaSXPGXXKrCYo/rs:fit:1200:1200:1/g:ce/aHR0cDovL2JyZWFr/Zm9ydGhqb3VybmV5/cy5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMTUvMDYvRG9s/bGFycGhvdG9jbHVi/XzYzMDY4NTUzLmpw/Zw"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className='label'>Always Beautiful Buses</h3>
              <p className='label'>We help you travelling to different places</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img height={550} width={560}
              className="d-block w-100 imgss"
              src="https://img.search.brave.com/wFvrjIHsSBkL9JGxJoXUEhjKINOyePZDEZcV4TlCgXs/rs:fit:1000:550:1/g:ce/aHR0cHM6Ly9mdW5l/bmRlci5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTgvMDMv/cGVydS1idXMtdHJh/dmVsLXRpcHMtMS5q/cGc"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className='label'>Availability Chances</h3>
              <p className='label'>Once you choose our bus than we will manage anyhow to complete your desired place.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img height={550} width={560}
              className="d-block w-100 imgss"
              src="https://img.search.brave.com/3CXwmJv_jlfpo767Ok7Lv-j_nu9EOszJCENuQtK6ivM/rs:fit:1064:708:1/g:ce/aHR0cHM6Ly93d3cu/bWlzaW9uZXJvc2J1/c2xpbmUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE4LzA2/L0Fkb2JlU3RvY2tf/NzkyMTM1MDguanBl/Zw"
              alt="First slide"
            />

            <Carousel.Caption>
              <h3 className='label'>Awesome Interior Feel</h3>
              <p className='label'>We always focus on our user's comfortable so we have vehicles with full facilities and best feels.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br></br>
      <br></br>
      <hr></hr>
      <div className='col-md-5 mt-5' data-aos="fade-down-left">
        <img src='https://img.search.brave.com/VRgNiOreqRiYzmWC4uum3jt_P5rJakpd1XmKLfzRhU0/rs:fit:996:490:1/g:ce/aHR0cHM6Ly93d3cu/aHllcmVzLXRvdXJp/c20uY28udWsvd3At/Y29udGVudC91cGxv/YWRzL3NpdGVzLzIv/d3BldG91cmlzbWUv/MjI4MTkwNC1kaWFw/b3JhbWEuanBn' className='img img-fluid imgg'></img>
      </div>
      <div className='col-md-7 mt-5' data-aos="flip-left">

        <h4 className='text-center hmtxt' >
          We are so proud to announce that, we are now open to faciliate our users with the best of the best. You can now order your favourite bus for a rent according your choice.
          We are always available to serve you and main moto of our team is to fascinate users with the best service we could give.

        </h4>
      </div>

    </div>


  )
}

export default Mainpage

