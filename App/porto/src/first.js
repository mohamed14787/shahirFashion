import { Grid } from "@material-ui/core";
import './App.css';
import { CiLocationOn } from "react-icons/ci";

import { FaLocationArrow } from "react-icons/fa";
import Button from '@material-ui/core/Button';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdAssignmentInd } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";







function First(){
    return(
<div className="page">
      <nav>
        <div className="left-section">
        <CiLocationOn size={30} />
        <h6>Egypt</h6>

        </div>
        <div className="middle-section">
<img src={require("./whiteLogo.png")}
    style={{ width: "114px", height: "83px" }
    }
></img>          
        </div>
        <div className="right-section">
            <IoSearch size={30}/>
        <FaLocationArrow size={30} />
        <FaRegHeart  size={30}/>
        <MdAssignmentInd size={30}/>
        <FaCartShopping  size={30}/>




        </div>
      </nav>
      <nav className="second">
      <Grid container spacing={3}>
      <Grid item xs={1}>
        <Button variant="text"  style={{ backgroundColor: 'transparent', border: 'none',color: "white" }}>Home</Button>
      </Grid>
      <Grid item xs={1}>
        <Button variant="text"  style={{ backgroundColor: 'transparent', border: 'none' ,color: "white"}}>About</Button>
      </Grid>
      <Grid item xs={1}>
        <Button variant="text"  style={{ backgroundColor: 'transparent', border: 'none',color: "white" }}>Services</Button>
      </Grid>
    </Grid>
       
      </nav>
      <div className="content">
        <div>
        <h2>READY-TO-WEAR </h2>
        </div>
        <div>
        <h1>FALL / WINTER 2023 </h1>
        </div>
        <Button className="large-button" variant="text"  style={{ backgroundColor: 'white', border: 'none',color: "black" ,paddingRight:"30px",paddingLeft:"30px",fontSize:"30px"}}>Shop</Button>
        
       
        
        </div>
     
       

       
      
      
       
       
      
       
      </div>
       
       
      
    )
}

export default First;