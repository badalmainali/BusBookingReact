import React from 'react'

function Footer() {
    return (
        <div class="mt-5 pt-5 pb-5 footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-5 col-xs-12 about-company">
                        <h2 style={{color:'white'}}>Easy Bus</h2>
                        <p class="pr-5 text-white-50">
                            We are here to faciliates our users with the best available buses in the market for rent. We are available any time for your service and we will be pleased if you
                            take service from us
                        </p>
                        <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
                    </div>
                    <div class="col-lg-3 col-xs-12 links">
                        <h4 class="mt-lg-0 mt-sm-3" style={{color:'white'}}>Our Social Links</h4>
                        <ul class="m-0 p-0">
                            <li>- <a href="www.facebook.com">Facebook</a></li>
                            <li>- <a href="www.instragram.com">Instagram</a></li>
                            <li>- <a href="www.twitter.com">Twitter</a></li>
                            <li>- <a href="www.youtube.com">Youtube</a></li>
                            <li>- <a href="www.github.com">Github</a></li>
                            <li>- <a href="www.linkedin.com">Linkedin</a></li>
                            
                        </ul>
                    </div>
                    <div class="col-lg-4 col-xs-12 location">
                        <h4 class="mt-lg-0 mt-sm-4" style={{color:'white'}}>Location</h4>
                        <p>22, Starmall Putalisadak Kathmandu Nepal </p>
                        <p class="mb-0"><i class="fa fa-phone mr-3"></i>(+977) 9815957785</p>
                        <p><i class="fa fa-envelope-o mr-3"></i>badalma12@gmail.com</p>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col copyright">
                        <p class=""><small class="text-white-50">© 2022. All Rights Reserved.</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer