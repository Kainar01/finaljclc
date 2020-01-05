import React from 'react'
import Button from 'react-bootstrap/Button'

class Intro extends React.Component{
 
   
    render(){
        return (
            <div className="home-container">
                <h3 className="intro-header ">
                    Курсы японского и китайского языка в Астане
                </h3>
                <p className="intro-p">
                    Запишитесь на БЕСПЛАТНЫЙ пробный урок с носителем языка!
                </p>
                
                <a href={(window.innerHeight < 700 && window.innerWidth<500) ? 'https://wa.me/77773050791?text=Хочу%20записаться%20на%20пробный%20урок.':'#home'  }><Button   className="btn btn-lg btn-primary ">Записаться </Button></a>
                
            </div>
        );
    }
}
export default Intro