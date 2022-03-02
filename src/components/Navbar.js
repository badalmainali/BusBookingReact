import React from 'react'


function Navbar() {

    //getting the info of current logged in user
    const user = JSON.parse(localStorage.getItem('currentUser'));

    //function for logout and redirecting to the homepage
    function logout(){
        localStorage.removeItem('currentUser')
        window.location.href='/login'
    }


    return (
        <div>
            <nav className="navbar navbar-expand-lg ">
                <a className="navbar-brand" href="#"><span className='head-one'>EASY-</span><span className='head-two'>-BUS</span></a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" ><i style={{color:"white"}} class="fa fa-bars"></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-20">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/aboutus">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/booking">Booking</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>


                        {user ? (<><div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i style={{color:"white"}} class="fa fa-user"></i> {user.name}
                            </button>
                            <div class="dropdown-menu mr-10" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item" href="/profile">My Profile</a>
                                <a class="dropdown-item" href="#" onClick={logout}>Logout</a>
                                
                            </div>
                        </div></>) : (
                            <>
                                <li className="nav-item regg">
                                    <a className="nav-link regs" href="/register">Register</a>
                                </li>
                                <li className="nav-item logg">
                                    <a className="nav-link logn" href="/login">Login</a>
                                </li>
                            </>)}
 
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar