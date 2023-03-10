import React from 'react'
import './Categories.css'

function Categories() {
   
  return ( 
  <>
    <div className='category-main'>
        <div className='categories'>
            <div className='dd'>
            {/* <div className='cat'> */}
                <img src="/app_image/accessories.png" alt=""></img>
              
            {/* </div>   */}
            <p>Accessories</p>
            </div>
            <div className='dd'>
          
            <img src="/app_image/computers.png" alt=""></img>
               
          
            <p>Computers</p>
            </div>
            <div className='dd'>

            <img src="/app_image/mobile.png" alt=""></img>
              
           <p>Mobiles</p>
            </div>
            <div className='dd'>
       
            <img src="/app_image/tabe.png" alt=""></img>
                
           <p>Tablets</p></div>

            <div className='dd'>

     <img src="/app_image/home.png" alt=""></img>
               
           <p>Home <br></br>Appliances</p> </div>

            <div className='dd'>
  
            <img src="/app_image/watch.png" alt=""></img>
              
          <p>Watches <br></br> & Perfumes</p> </div>

            
            <div className='dd'>
        
            <img src="/app_image/travel.png" alt=""></img>
              
            <p>Travel Bags</p> </div>


            
            <div className='dd'>
       
            <img src="/app_image/personal.png" alt=""></img>
         <p>Personal Care</p> </div>
            <div className='dd'>
     


                
          
            <img src="/app_image/camera.png" alt=""></img>
               
           <p>Cameras  <br></br> & Drones</p> </div>

            <div className='dd'>
           
             <img src="/app_image/offer.png" alt=""></img>
               
             <p>Offer Zone</p>
            </div>


        </div>

       
    </div>
    <div className='bannerimage'>
    <img src="/homeslider/1659393213.jpeg" alt=""></img>
   </div>
   </>
  )
}

export default Categories