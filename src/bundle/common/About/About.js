import React from 'react'
import AboutCard from './AboutCard'
import Slider from './ChSlider'
import CardDeck from 'react-bootstrap/CardDeck'
import JpSlider from './JpSlider'
class About extends React.Component  {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(e){
        let formName=''
        if(e.target.classList.contains('jp-btn')){
            formName='jp-form'
            
        }
        else if(e.target.classList.contains('ch-btn')){
            formName='ch-form'
        }
        
        
       
        let form = document.querySelector(`.${formName}`)
       
        
        form.parentElement.classList.remove('hide')
        form.classList.remove('hide')

        
    }
    render(){
    return (
        <div className="about" id="about">
            <div className="d-flex  flex-column justify-content-center align-items-center cards">
            <div className="card-container d-flex  flex-column text-center">
            <h2 className='mt-4  text-center about-intro'> У нас вы можете выучить Японский и Китайский язык!</h2>
            <CardDeck>
                <AboutCard learn ='японского' language="Japanese" bg='jp'/>
                <AboutCard learn = 'китайского' language="Chinese" bg='ch'/>
            </CardDeck>
            </div>
            </div>
            <div className='jp jp-section' id="jp">
                <div className="jp-container">
                    <h4 className="mb-4 mt-4">
                        Зачем учить японский?
                    </h4>
                    <p className="mb-4 mt-4 ">
                        Изучив японский вы можете жить,работать и учиться в Японии. 
                        Японские университеты – одни из лучших в мире, сразу пять из них вошло в Топ-100 вузов мира.
                        А барьером для наших поехать туда является язык. И наш центр поможет вам сломать этот барьер!
                    </p>
            
                </div>
                <div className="enroll-lang">
                {/* <h5 className="w-75 m-auto">Запишитесь на бесплатный пробный урок чтобы узнать подойдет ли вам наш центр!</h5> */}
                <button onClick={this.handleClick} className="jp-btn btn btn-primary m-3">Записаться на японский</button></div>
            <JpSlider />
            </div>
            <div className='jp ch-section' id = "ch">
                <div className="jp-container">
                    <h4 className="mb-4 mt-4">
                        Китайский нужно знать!
                    </h4>
                    <p className="mb-4 mt-4 ">
                        В наши дни знание китайского языка откроает вам много возможностей, такие как обучение в Китае и бизнес с Китаем. И у нас вы можете получить достойное обучение китайского языка!
                    </p>
            
                </div>
                <div className="enroll-lang">
                {/* <h5 className="w-75 m-auto">Запишитесь на бесплатный пробный урок чтобы узнать подойдет ли вам наш центр!</h5> */}
                <button onClick={this.handleClick} className="ch-btn btn btn-primary m-3">Записаться на китайский</button></div>
            <Slider />
            </div>
        </div>
    );
    }
}
export default About