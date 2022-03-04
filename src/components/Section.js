import React from 'react'
import "./section.css";
import Bottle from "../images/bottle.png";
import Cap from "../images/cap.png"
import Right from "../images/Right.png"
const Section = () => {
    return (
        <div className='section'>
            <div className='left'>
                <h2>All-new Filtered Tech.</h2>
                <p>A revolutionary portable water filtration system combining high-performance Nano Zero filter with a seamless, low-pressure drinking experience. Take hydration into your own hands.</p>
                <button>BUY NOW</button>
                <img className='cap' src = {Cap} alt="" />
                <img className = "bottle" src={Bottle} alt="" />
            </div>
            <div className='right'>
                <img src={Right} alt="" />
            </div>
        </div>
    )
}

export default Section