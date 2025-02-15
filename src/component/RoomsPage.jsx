import React from 'react'
import Room from './partials/Room'

export default function RoomsPage() {
  return (
    <>
    <div class="back_re">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="title">
                     <h2>Our Room</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- our_room --> */}
      <Room/>
    </>
  )
}
