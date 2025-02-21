import React from "react";
import Chefdata from "../Chef/Chefdata"; 
import './Chefes.css';


const Chef = ()=>{
    return(
        <>
            <div className="chef-card-container">
              {Chefdata.map((chef) => (
                <div key={chef.id} className="chef-card">
                  <img src={chef.image} alt={chef.name} className="chef-image" />
                  <div className="chef-info">
                    <h3>{chef.name}</h3>
                    <p>Age: {chef.age}</p>
                  </div>
                </div>
              ))}
            </div>
        </>
    )
}
export default Chef;