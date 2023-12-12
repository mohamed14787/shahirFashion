import { Grid } from "@material-ui/core";
import "./App.css";
import { CiLocationOn } from "react-icons/ci";

import { FaLocationArrow } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdAssignmentInd } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";

function First() {
  return (
    <div className="page">
      <nav>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <CiLocationOn size={30} />
          <h4>Egypt</h4>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ textAlign: "center" }}>
            <img
              src={require("./whiteLogo.png")}
              style={{ width: "100%", height: "60px" }}
            ></img>
          </div>
          <div className="right-section">
            <IoSearch size={30} />
            <FaLocationArrow size={30} />
            <FaRegHeart size={30} />
            <MdAssignmentInd size={30} />
            <FaCartShopping size={30} />
          </div>
        </div>
      </nav>

      <div className="second">
        <Button
          variant="text"
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "white",
          }}
        >
          Home
        </Button>

        <Button
          variant="text"
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "white",
          }}
        >
          About
        </Button>

        <Button
          variant="text"
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "white",
          }}
        >
          Services
        </Button>
      </div>
      <div style={{ padding: "10%" }}>
        <div>
          <h2>READY-TO-WEAR </h2>
        </div>
        <div>
          <h1>FALL / WINTER 2023 </h1>
        </div>
        <Button
          className="large-button"
          variant="text"
          style={{
            backgroundColor: "white",
            border: "none",
            color: "black",
            paddingRight: "30px",
            paddingLeft: "30px",
            fontSize: "30px",
          }}
        >
          Shop
        </Button>
      </div>
    </div>
  );
}

export default First;
