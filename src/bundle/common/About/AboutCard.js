import React from 'react'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import {Link as Scroll} from 'react-scroll'
class AboutCard extends React.Component{
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
                <Scroll activeClass="active"
                to={this.props.bg}
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                delay={200}
                isDynamic={true}
                onSetActive={this.handleSetActive}
                onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
            >
                    <Button className="btn-action">
                        Подробнее
                    </Button>
                    </Scroll>
                </footer>
            </Card>
   
        );
    }
}
export default AboutCard