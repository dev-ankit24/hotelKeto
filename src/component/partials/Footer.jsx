import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   <>
   <footer>
         <div class="footer">
            <div class="container">
               <div class="row">
                  <div class=" col-md-4">
                     <h3>Contact US</h3>
                     <ul class="conta">
                        <li><i class="fa fa-map-marker" aria-hidden="true"></i> Karol Bagh, New Delhi, IND</li>
                        <li><i class="fa fa-mobile" aria-hidden="true"></i> +91 9953842789</li>
                        <li> <i class="fa fa-envelope" aria-hidden="true"></i><a href="#">info@perfectconsultacny.co</a></li>
                     </ul>
                  </div>
                  <div class="col-md-4">
                     <h3>Menu Link</h3>
                     <ul class="link_menu">
                        <li class="active"><Link to="/">Home</Link></li>
                        <li><Link to="/about"> about</Link></li>
                        <li><Link to="/room">Our Room</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        {/* <li><Link to="/blog">Blog</Link></li> */}
                        <li><Link to="/contact">Contact Us</Link></li>
                     </ul>
                  </div>
                  <div class="col-md-4">
                     <h3>News letter</h3>
                     <form class="bottom_form">
                        <input class="enter" placeholder="Enter your email" type="text" name="Enter your email"/>
                        <button class="sub_btn">subscribe</button>
                     </form>
                     <ul class="social_icon">
                        <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="copyright">
               <div class="container">
                  <div class="row">
                     <div class="col-md-10 offset-md-1">
                        
                        <p>
                        © 2025 All Rights Reserved.
                        
                        
                        </p>

                     </div>
                  </div>
               </div>
            </div>
         </div>
         </footer>
   </>
  )
}
