
import React, { useState } from 'react';

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const SliderData = [
    {
        image1:
        "./logo.png"
        ,
        image2:                "./logo.png",

        image3:                "./logo.png"

    },
    {
        image1:
        "./whiteLogo.png"
        ,
        image2:                "./whiteLogo.png",

        image3:                "./whiteLogo.png"


    },
    {
        image1:
        "./logo.png"
        ,
        image2:                "./whiteLogo.png",

        image3:                "./whiteLogo.png"
    }
   
  ];
  

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
     
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
                <div className="container">
               <div className='left-column'>
               <img src={require("./Rectangle 7.png")} alt={`travel image 1`} className='image' />
                </div>
                <div className='middle-column'>
               <img src={require("./Rectangle 8.png")} alt={`travel image 2`} className='image' />
                </div>
                
                <div className='right-column'>
               <img src={require("./Rectangle 9.png")} alt={`travel image 3`} className='image' />
               </div>
             </div>)}
          </div>
        );
      })
      }

<FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
    </section>
  );
};

export default ImageSlider;
