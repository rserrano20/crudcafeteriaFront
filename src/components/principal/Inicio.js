import React from "react";
import Carousel from 'react-bootstrap/Carousel';


const Inicio = () => {
  return (
    <div >
      <Carousel>
        <Carousel.Item> 
          <img
            className="d-block w-100"
            src="cccc.jpg"
            alt="First slide" 
          />
          <Carousel.Caption> 
            <h1 >Cappuccino</h1>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="masas1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 className="text-light">Sweet</h1>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="nicocafe.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h1 >Coffe</h1>
            <p>   
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Inicio;
