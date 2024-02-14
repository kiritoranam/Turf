import React, { useEffect, useState } from 'react';

import ImageSlider from '../components/ImageSlider';
import '../custom.css';

import WhyTurf from "../components/WhyTurf";

const Landing = () => {

    
    

    return (
    <div className="relative">
        

            {/* Image Slider */}
        <section>
            <div>
            <ImageSlider />
            </div>
        </section>

           

            {/* Grounds Section */}
        <section>
            
        </section>

            {/* WhyTurf Section */}
        <section className=" mb-5">
            <div>
                <WhyTurf/>
            </div>
        </section>
    </div>
                
    );
};

export default Landing;
