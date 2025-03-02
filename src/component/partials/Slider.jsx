import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Slider() {
   const Booking=()=>{
      alert("Sorry ! Booking Service Not Available")
   }
  return (
    <>
    <section class="banner_main">
         <div id="myCarousel" class="carousel slide banner" data-ride="carousel">
            <ol class="carousel-indicators">
               <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
               <li data-target="#myCarousel" data-slide-to="1"></li>
               <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <img class="first-slide" src="images/banner11.png" alt="First slide"/>
                  <div class="container">
                  </div>
               </div>
               <div class="carousel-item">
                  <img class="second-slide" src="images/banner12.png" alt="Second slide"/>
               </div>
               <div class="carousel-item">
                  <img class="third-slide" src="images/banner13.png" alt="Third slide"/>
               </div>
            </div>
            <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
         </div>
         <div class="booking_ocline">
            <div class="container">
               <div class="row">
                  <div class="col-md-5">
                     <div class="book_room">
                        <h1>Book a Room Online</h1>
                        <form class="book_now">
                           <div class="row">
                              <div class="col-md-12">
                                 <span>Arrival</span>
                                 <img class="date_cua" src="images/date.png"/>
                                 {/* <input class="online_book"  placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy"/> */}
                                 <DatePicker
                                 class="online_book"  
         //  selected={arrivalDate}
         //  onChange={handleArrivalChange}
          dateFormat="dd/MM/yyyy"  // डेट फॉर्मेट सेट करें
          placeholderText="dd/mm/yyyy"  // प्लेसहोल्डर दिखाने के लिए
          className="online_book"
        />
                                 {/* <input type="date"   class='form-control' /> */}
                              </div>
                              <div class="col-md-12 mb-3">
                                 <span>Departure</span>
                                 <img class="date_cua" src="images/date.png"/>
                                 
                                 {/* <input class="online_book" placeholder="dd/mm/yyyy" type="date" name="dd/mm/yyyy"/> */}
                                 {/* <input type="date"  class='form-control' /> */}
                                 <DatePicker
                                 class="online_book"  
         //  selected={arrivalDate}
         //  onChange={handleArrivalChange}
          dateFormat="dd/MM/yyyy"  // डेट फॉर्मेट सेट करें
          placeholderText="dd/mm/yyyy"  // प्लेसहोल्डर दिखाने के लिए
          className="online_book"
        />
                              </div>
                              <div class="col-md-12">
                                 <button class="book_btn" onClick={Booking}>Book Now</button>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
    
    
    </>
  )
}
