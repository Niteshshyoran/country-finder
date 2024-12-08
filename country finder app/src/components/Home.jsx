import React from "react";
import {useNavigate} from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();
    function handelClick(){
        navigate("/country")
    }
        return (
            <div className="header">
                <button onClick={handelClick}>
                    hello nitesh home page
                </button>
            </div>
        );
};

export default Home;