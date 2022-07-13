import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './Img/1.jpg'
import Image2 from './Img/2.jpg'
import Image3 from './Img/5.jpg'
import Image4 from './Img/8.jpg'
const SliderApp = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Juega y Diviertete</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Vive tu experiencia</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Sé el Mejor</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Sé el Mejor</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default SliderApp