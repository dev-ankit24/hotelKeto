import React from 'react'
import { Link } from 'react-router-dom'

export default function Room() {
   const Booking=()=>{
      alert("Sorry ! Booking Service Not Available")
   }
  return (
    <>
    <div  class="our_room">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Our Room</h2>
                     <p >Lorem Ipsum available, but the majority have suffered </p>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure><img src="images/room7.jpg" alt="#"/></figure>
                     </div>
                   
                     <small className=' room-price position-absolute start-0 top-100 translate-middle-y bg-danger text-white rounded py-1 px-3 ms-4'>&#8377; 1450/Night</small>
                     <div class="bed_room">

                     <div className="d-flex justify-content-between mb-3">
                                    <h4 className="mb-0 mx-1">Executive Suite</h4>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                    </div>
                                </div>
                     
                       <div className="d-flex mb-3">
                                    <span className="border-end mx-1 pe-3"><i className="fa fa-bed text-danger  mx-1"></i>3 Bed</span>|
                                    <span className="border-end mx-1 pe-3"><i className="fa fa-bath text-danger mx-1"></i>2 Bath</span>|
                                    <span><i className="fa fa-wifi text-danger mx-1"></i>Wifi</span>
                                </div>
                                <p className="text-body mb-3 room-para"  style={{fontWeight:"300"}}>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                       
                         <div className="d-flex justify-content-between mx-1">
                                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">View Detail</a>
                                    <Link  to="/" onClick={Booking} className="btn btn-sm btn-danger rounded py-2 px-4" >Book Now</Link>
                                </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure><img src="images/room8.jpg" alt="#"/></figure>
                     </div>
                   
                     <small className=' room-price position-absolute start-0 top-100 translate-middle-y bg-danger text-white rounded py-1 px-3 ms-4'>&#8377; 1310/Night</small>
                     <div class="bed_room">
                     <div className="d-flex justify-content-between mb-3">
                                    <h4 className="mb-0 mx-1">Junior Suite</h4>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                    </div>
                                </div>
                     
                       <div className="d-flex mb-3">
                                    <span className="border-end mx-1 pe-3"><i className="fa fa-bed text-danger  mx-1"></i>3 Bed</span>|
                                    <span className="border-end mx-1 pe-3"><i className="fa fa-bath text-danger mx-1"></i>2 Bath</span>|
                                    <span><i className="fa fa-wifi text-danger mx-1"></i>Wifi</span>
                                </div>
                                <p className="text-body mb-3 room-para"  style={{fontWeight:"300"}}>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                       
                         <div className="d-flex justify-content-between mx-1">
                                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">View Detail</a>
                                    <Link  to="/" onClick={Booking} className="btn btn-sm btn-danger rounded py-2 px-4" >Book Now</Link>
                                </div>
                      </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure><img src="images/room9.jpg" alt="#"/></figure>
                     </div>
                   
                     <small className=' room-price position-absolute start-0 top-100 translate-middle-y bg-danger text-white rounded py-1 px-3 ms-4'>&#8377; 1399/Night</small>
                     <div class="bed_room">
                     <div className="d-flex justify-content-between mb-3">
                                    <h4 className="mb-0 mx-1">Super Deluxe</h4>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                    </div>
                                </div>
                     
                       <div className="d-flex mb-3">
                                    <span className="border-end mx-1 pe-3"><i className="fa fa-bed text-danger  mx-1"></i>3 Bed</span>|
                                    <span className="border-end mx-1 pe-3"><i className="fa fa-bath text-danger mx-1"></i>2 Bath</span>|
                                    <span><i className="fa fa-wifi text-danger mx-1"></i>Wifi</span>
                                </div>
                                <p className="text-body mb-3 room-para"  style={{fontWeight:"300"}}>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                       
                         <div className="d-flex justify-content-between mx-1">
                                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">View Detail</a>
                                    <Link  to="/" onClick={Booking} className="btn btn-sm btn-danger rounded py-2 px-4" >Book Now</Link>
                                </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure><img src="images/room10.jpeg" alt="#"/></figure>
                     </div>
                   
                     <small className=' room-price position-absolute start-0 top-100 translate-middle-y bg-danger text-white rounded py-1 px-3 ms-4'>&#8377; 1650/Night</small>
                     <div class="bed_room">
                     <div className="d-flex justify-content-between mb-3">
                                    <h4 className="mb-0 mx-1">Executive Suite</h4>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                    </div>
                                </div>
                     
                       <div className="d-flex mb-3">
                                    <span className="border-end mx-1 pe-3"><i className="fa fa-bed text-danger  mx-1"></i>3 Bed</span>|
                                    <span className="border-end mx-1 pe-3"><i className="fa fa-bath text-danger mx-1"></i>2 Bath</span>|
                                    <span><i className="fa fa-wifi text-danger mx-1"></i>Wifi</span>
                                </div>
                                <p className="text-body mb-3 room-para"  style={{fontWeight:"300"}}>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                       
                         <div className="d-flex justify-content-between mx-1">
                                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">View Detail</a>
                                    <Link  to="/" onClick={Booking} className="btn btn-sm btn-danger rounded py-2 px-4" >Book Now</Link>
                                </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure><img src="images/room12.jpg" alt="#"/></figure>
                     </div>
                   
                     <small className=' room-price position-absolute start-0 top-100 translate-middle-y bg-danger text-white rounded py-1 px-3 ms-4'>&#8377; 1590/Night</small>
                     <div class="bed_room">
                     <div className="d-flex justify-content-between mb-3">
                                    <h4 className="mb-0 mx-1">Junior Suite</h4>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                    </div>
                                </div>
                     
                       <div className="d-flex mb-3">
                                    <span className="border-end mx-1 pe-3"><i className="fa fa-bed text-danger  mx-1"></i>3 Bed</span>|
                                    <span className="border-end mx-1 pe-3"><i className="fa fa-bath text-danger mx-1"></i>2 Bath</span>|
                                    <span><i className="fa fa-wifi text-danger mx-1"></i>Wifi</span>
                                </div>
                                <p className="text-body mb-3 room-para"  style={{fontWeight:"300"}}>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                       
                         <div className="d-flex justify-content-between mx-1">
                                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">View Detail</a>
                                    <Link  to="/" onClick={Booking} className="btn btn-sm btn-danger rounded py-2 px-4" >Book Now</Link>
                                </div>
                     </div>
                  </div>
               </div>
               <div class="col-md-4 col-sm-6">
                  <div id="serv_hover"  class="room">
                     <div class="room_img">
                        <figure><img src="images/room13.jpg" alt="#"/></figure>
                     </div>
                   
                     <small className=' room-price position-absolute start-0 top-100 translate-middle-y bg-danger text-white rounded py-1 px-3 ms-4'>&#8377; 1150/Night</small>
                     <div class="bed_room">
                     <div className="d-flex justify-content-between mb-3">
                                    <h4 className="mb-0 mx-1">Super Deluxe</h4>
                                    <div className="ps-2">
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                        <small className="fa fa-star text-warning"></small>
                                    </div>
                                </div>
                     
                       <div className="d-flex mb-3">
                                    <span className="border-end mx-1 pe-3"><i className="fa fa-bed text-danger  mx-1"></i>3 Bed</span>|
                                    <span className="border-end mx-1 pe-3"><i className="fa fa-bath text-danger mx-1"></i>2 Bath</span>|
                                    <span><i className="fa fa-wifi text-danger mx-1"></i>Wifi</span>
                                </div>
                                <p className="text-body mb-3 room-para"  style={{fontWeight:"300"}}>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                       
                         <div className="d-flex justify-content-between mx-1">
                                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href="">View Detail</a>
                                    <Link  to="/" onClick={Booking} className="btn btn-sm btn-danger rounded py-2 px-4" >Book Now</Link>
                                </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  )
}
