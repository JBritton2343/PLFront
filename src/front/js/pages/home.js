import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import casepic from "/workspace/PLFront/src/front/img/casepic.jpg";
import cpupic from "/workspace/PLFront/src/front/img/cpupic.jpg";
import keyboardpic from "/workspace/PLFront/src/front/img/keyboardpic.jpg";
import mbpic from "/workspace/PLFront/src/front/img/mbpic.jpg";
import micepic from "/workspace/PLFront/src/front/img/micejpg.jpg";
import powersupppic from "/workspace/PLFront/src/front/img/powersupppic.jpg";
import rampic from "/workspace/PLFront/src/front/img/rampic.jpg";
import ssdandhddpic from "/workspace/PLFront/src/front/img/ssdandhddpic.jpg";
import videocardpic from "/workspace/PLFront/src/front/img/videocardpic.jpg";
import casefanpic from "/workspace/PLFront/src/front/img/casefanpic.jpg";
import cpufanpic from "/workspace/PLFront/src/front/img/cpufanpic.jpeg";
import { Link } from "react-router-dom";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
    <div className="Container mt-3">
    <div className="row row-cols-4 text-light mx-5 my-1 m-auto justify-content-center">   
    <div className="col">
     <Link to={'/cases'}>      
     <div className="tile">        
     <img          src={casepic}        
       className="tileImg"        />        
       <div className="centered">Cases
       </div>      
       </div>   
        </Link>
        <Link to={'/casefans'}>      
     <div className="tile">        
     <img          src={casefanpic}        
       className="tileImg"        />        
       <div className="centered">Case Fans
       </div>      
       </div>   
        </Link>
        <Link to={'/cpufans'}>      
     <div className="tile">        
     <img          src={cpufanpic}        
       className="tileImg"        />        
       <div className="centered">CPU Fans
       </div>      
       </div>   
        </Link>
        <Link to={`/keyboards`}>      
     <div className="tile">        
     <img          src={keyboardpic}        
       className="tileImg"        />        
       <div className="centered">Keyboards
       </div>      
       </div>   
        </Link>
        <Link to={`/memory`}>      
     <div className="tile">        
     <img          src={rampic}        
       className="tileImg"        />        
       <div className="centered">Memory
       </div>      
       </div>     
       </Link>
       </div>
       <div className="col">
        <Link to={`/mice`}>      
     <div className="tile">        
     <img          src={micepic}        
       className="tileImg"        />        
       <div className="centered">Mouse
       </div>      
       </div>   
        </Link>
        <Link to={`/motherboards`}>      
     <div className="tile">        
     <img          src={mbpic}        
       className="tileImg"        />        
       <div className="centered">Motherboards
       </div>      
       </div>   
        </Link>
        <Link to={`/power`}>      
     <div className="tile">        
     <img          src={powersupppic}        
       className="tileImg"        />        
       <div className="centered">Power Supplies
       </div>      
       </div>   
        </Link>
        </div>
        <div className="col">
        <Link to={`/processors`}>      
     <div className="tile">        
     <img          src={cpupic}        
       className="tileImg"        />        
       <div className="centered">CPUs
       </div>      
       </div>   
        </Link>
        <Link to={`/storage`}>      
     <div className="tile">        
     <img          src={ssdandhddpic}        
       className="tileImg"        />        
       <div className="centered">SSDs and HDDs
       </div>      
       </div>   
        </Link>
        <Link to={`/videocards`}>      
     <div className="tile">        
     <img          src={videocardpic}        
       className="tileImg"        />        
       <div className="centered">Graphics Cards
       </div>      
       </div>   
        </Link>
        </div>
        </div>
    </div>
    </>
  );
};
