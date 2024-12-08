import React from "react";
import { NavLink, Route } from 'react-router-dom'
import Home from "./Home";
import Country from "./Dynamic country route";
function Navbar(){
    const listofroutes =[
        { to:"/",
            textDisplay:"Home",
        },
        {
            to:"/country name",
            textDisplay:"Country"
        }
    ]
    return(
        <div>
            {
                listofroutes.map(item =>{
                    
                })
            }
        </div>
    )
}
export default Navbar;