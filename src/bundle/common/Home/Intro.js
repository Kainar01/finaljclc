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
                
                <a href={(window.innerHeight < 900 && window.innerWidth<500) ? 'https://wa.me/77013050188?text=Хочу%20записаться%20на%20пробный%20урок.':'/form.html'  }><Button  className="btn btn-lg btn-primary ">Записаться </Button></a>
                
            </div>
        );
    }
}
export default Intro