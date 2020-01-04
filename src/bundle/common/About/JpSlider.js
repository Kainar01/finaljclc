import React from 'react'
import {useState} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img3 from '../../.././assets/tea.jpg'
import img2 from '../../.././assets/kanji1.jpg'
import img1 from '../../.././assets/jlpt.jpg'
function JpSlider() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    return (
      <Carousel className="carousel " activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <img 
            className="d-block w-100 h-50 jlpt"
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-black">Подготовка к JLPT</h3>
            <p>Мы поможем вам получить желаемый уровень по JLPT!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={img2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Общий японский</h3>
            <p>С нами вы можете быстро и эффективно научиться говорить на японском!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 h-50"
            src={img3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Разные мероприятия</h3>
            <p>
              Мы учим не только язык. Мы часто проводим разные мероприятия, где ученики могут узнать многое про традиции Японии.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default JpSlider