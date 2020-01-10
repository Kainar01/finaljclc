import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
class AboutCard extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        const el= document.querySelector('.'+this.props.bg+'-section')
        el.scrollIntoView()
        
    }
    render(){
        return (
            
            <Card  text="white" className={"border-0 d-flex flex-column justify-content-center align-items-center text-center "+this.props.bg+'-bg'}>
                <Card.Title>
                    <h2>{this.props.language}</h2>
                </Card.Title>
                <p>
                    Курсы {' '} {this.props.learn} {' '}языка
                </p>
                <footer >
                <a>
                    <Button onClick={this.handleClick} className="btn-action">
                        Подробнее
                    </Button>
                    </a>
                </footer>
            </Card>
   
        );
    }
}
export default AboutCard