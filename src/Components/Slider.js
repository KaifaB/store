import React, { useEffect, useState } from "react";
import Cakes from "../img/example-cake.png"
import Cupcakes from "../img/example-cupcakes.jpg"
import Scones from "../img/example-scones.jpg"
import leftArrow from "../img/left-arrow.png"
import rightArrow from "../img/right-arrow.png"

function Slider() {
    let counter = 1;
    setInterval(() =>{
        let x = document.getElementById("slides")
    }, 4000)
    const [slide, setSlide] = useState(0);

    useEffect(() => { 
        console.log(slide)
    },[slide])
    const plusSlide = () => {
        if (slide == 2){
            setSlide(0)
        } else {
        setSlide(slide+1)
        }
    }

    const minusSlide = () => {
        if (slide == 0){
            setSlide(2)
        } else {
        setSlide(slide-1)
        }
    }

    const sliderStyle = {
        transform : "translateX(" + slide*-100 + "vw)"
    }
    return (
        <div className="slider" >
            <span className="prev-slide arrows" onClick={minusSlide}><img className="arrow" src={leftArrow} /></span>
            <div className="slides" id="slides" style={sliderStyle}>
                <div className="slide first">
                    <img src={Cakes} alt=""/>
                    <div className="slide-message">
                        <h1>Holiday Cakes</h1>
                        <p>Find a cake for every occasion!</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div className="slide second">
                    <img src={Cupcakes} alt="cupcake slide" />
                </div>
                <div className="slide third">
                    <img src={Scones} alt="scone slide" />
                </div>
            </div>
            <span className="next-slide arrows" onClick={plusSlide}><img className="arrow" src={rightArrow} /></span>
        </div>
    );
}

export default Slider;
