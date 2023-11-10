import Navbar from "app/Components/Navbar/Navbar";
import React, { useState } from "react";
import c1 from "../../../media/c1.png";
import c2 from "../../../media/c2.png";
import CentralTable from "./Table/CentralTable";
import EsternTable from "./Table/EsternTable";
import GreaterAccraTable from "./Table/GreaterAccraTable";
import OtiTable from "./Table/OtiTable";
import VoltaTable from "./Table/VoltaTable";
import WesternNorthTable from "./Table/WesternNorthTable";

function TrainingSchedule() {

  const [flag,setFlag] = useState(0)
  return (
    <>
      {/* <Breadcrumb className="breadtable my-5 ">
      <Breadcrumb.Item onClick={()=> setFlag(0)} className={`h5 ${flag ===0&& "active"}`}>GREATER ACCRA</Breadcrumb.Item>
      <Breadcrumb.Item onClick={()=> setFlag(1)} className="h5">OTI</Breadcrumb.Item>
      <Breadcrumb.Item onClick={()=> setFlag(2)} className="h5">WESTERN NORTH</Breadcrumb.Item>
      <Breadcrumb.Item onClick={()=> setFlag(3)} className="h5">CENTRAL</Breadcrumb.Item>
      <Breadcrumb.Item onClick={()=> setFlag(4)} className="h5">ESTERN</Breadcrumb.Item>
      <Breadcrumb.Item onClick={()=> setFlag(5)} className="h5">VOLTA</Breadcrumb.Item>
    </Breadcrumb> */}
    <div className="breadtable mt-5 mb-4">
      <ol>
        <li className={`h5 ${flag ===0&& "active"} cursor-pointer`} onClick={()=> setFlag(0)}>GREATER ACCRA</li> <span className="h5 mx-3"></span>
        <li className={`h5 ${flag ===1&& "active"} cursor-pointer`} onClick={()=> setFlag(1)}>OTI</li> <span className="h5 mx-3"></span>
        <li className={`h5 ${flag ===2&& "active"} cursor-pointer`} onClick={()=> setFlag(2)}>WESTERN NORTH</li> <span className="h5 mx-3"></span>
        <li className={`h5 ${flag ===3&& "active"} cursor-pointer`} onClick={()=> setFlag(3)}>CENTRAL</li> <span className="h5 mx-3"></span>
        {/* <li className={`h5 ${flag ===4&& "active"} cursor-pointer`} onClick={()=> setFlag(4)}>ESTERN</li> <span className="h5 mx-3"></span> */}
        <li className={`h5 ${flag ===5&& "active"} cursor-pointer`} onClick={()=> setFlag(5)}>VOLTA</li>
      </ol>
    </div>
    <div className="text-center mb-3 text-danger">Note: Press Ctrl + F and type the keyword to search for school/ venue</div>
    {
      flag===0 && (<GreaterAccraTable/>)
    }
    {
      flag===1 && (<OtiTable/>)
    }
    {
      flag===2 && (<WesternNorthTable/>)
    }
    {
      flag===3 && (<CentralTable/>)
    }
    {
      flag===4 && (<EsternTable/>)
    }
    {
      flag===5 && (<VoltaTable/>)
    }
    
    </>
  );
}

export default TrainingSchedule;
