import React from "react";
import "./style.css"
import menu from "./components/menuApi "

const Resturant = () => {
  return (
  <>
    <div className="card-container">
        <div className="card">
            <div className="card-body">
                <span className="card-number card-circle subtle">1</span>
                <span className="card-author subtle"></span>
                <h2 className="card-title">Maggi </h2>
                <span className="card-description subtle">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Explicabo minus dignissimos  provident expedita maiores quisquam dolorum itaque distinctio
                , deleniti ea aspernatur labore alias suscipit culpa.
                </span>
                <div className="card-read">Read</div>
            </div>
            <img src={image} alt="images" className="card-media"/>
            <span className="card-tag subtle">Order Now</span>
        </div>
    </div> 
  </>
  );
  
};  

export default Resturant;