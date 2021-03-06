import React from 'react'
import Button from 'react-bootstrap/Button'

class Intro extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick()
    {
        
        let form = document.querySelector('.just-form')
       
        
        form.parentElement.classList.remove('hide')
        form.classList.remove('hide')
    }
    render(){
        return (
            <div className="home-container">
                <h3 className="intro-header ">
                    Курсы японского и китайского языка в Астане
                </h3>
                <p className="intro-p">
                    Запишитесь на БЕСПЛАТНЫЙ пробный урок с носителем языка!
                </p>
                
                <Button onClick={this.handleClick} className="btn btn-lg btn-primary ">Записаться </Button>
                
            </div>
        );
    }
}
export default Intro