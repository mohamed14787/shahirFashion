import { Grid } from "@material-ui/core";
import './App.css';
import { CiLocationOn } from "react-icons/ci";
import { FaLocationArrow } from "react-icons/fa";
import Button from '@material-ui/core/Button';

import Slider from 'react-slick';
import { Slide } from 'react-slideshow-image';
import ImageSlider from "./slider";

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

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '400px'
}


function Second (){
    return(
      
        <div className="container">
 <div className="left-column">
  <div className="content">
  <h2 className="bl">READY-TO-WEAR</h2>
  </div>
  <div>
    <h1 className="bl">FALL / WINTER 2023</h1>
  </div>
  <div>
  <Button className="large-button" variant="text"  style={{ backgroundColor: 'black', border: 'none',color: "white" ,paddingRight:"30px",paddingLeft:"30px",fontSize:"30px"}}>Shop</Button>
  </div>  

        </div>
        <div className="right-column">
        <ImageSlider slides={SliderData} />
        </div>
        
      </div>
      
  
    )
}
export default Second;