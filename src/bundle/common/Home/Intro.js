import React from 'react'
import Button from 'react-bootstrap/Button'

class Intro extends React.Component{
 
   
    render(){
        return (
            <div className="home-container">
                <h3 className="intro-header">
                    Курсы японского и китайского языка
                </h3>
                <p className="intro-p">
                    Запишитесь на пробный урок с носителем языка БЕСПЛАТНО!
                </p>
                
                <a href={(window.innerHeight < 700 && window.innerWidth<500) ? 'https://wa.me/77773050791?text=Хочу%20записаться%20на%20пробный%20урок.':'/enroll'  }><Button  className="btn btn-lg btn-primary ">Записаться </Button></a>
                
            </div>
        );
    }
}
export default Intro