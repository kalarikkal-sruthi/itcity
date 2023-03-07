import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Banner.css'

function Baner() {
    var settings = {
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        margin:0
    };
    return (
        <>
          
            <div> <Slider {...settings}>
                <div>
                    <h3>
                    <img src="/homeslider/1659393213.jpeg" alt=""></img>


                    </h3>
                </div>
                <div>
                    <h3>  <img src="/homeslider/1663083592.jpg" alt=""></img></h3>
                </div>
                <div>
                <h3>  <img src="/homeslider/1663088379.jpg" alt=""></img></h3>
                </div>
               
            </Slider>
            </div>

        </>
    )
}

export default Baner