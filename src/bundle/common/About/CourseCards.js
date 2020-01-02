import React from 'react'
import Card from 'react-bootstrap/Card'

export default class CourseCards extends React.Component{
    render(){
        return (
            <Card className={this.props.lang+"-course m-4"} bg="primary">
                <Card.Title>
                    {this.props.title}
                </Card.Title>
            </Card>
        );
    }
}