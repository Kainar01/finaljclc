import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
class Introduction extends React.Component{
    render(){
        return (
            <div className="jclc container text-center">
               <CardDeck>
               <Card  text="white" className="bg-dark text-center mr-3 ml-3 jp-bg">
                <blockquote className="d-flex flex-column justify-content-center align-items-center blockquote mb-0 card-body">
                <Card.Title>
                    <h2>Программы в Японии</h2>
                </Card.Title>
                <footer >
                
                </footer>
                </blockquote>
            </Card>
            <Card  text="white" className="bg-dark text-center mr-3 ml-3 jp-bg">
                <blockquote className="d-flex flex-column justify-content-center align-items-center blockquote mb-0 card-body">
                
                
                <h2 >Программы в Японии</h2>
                </blockquote>
            </Card>
                </CardDeck>

            </div>
        );
    }
}
export default Introduction