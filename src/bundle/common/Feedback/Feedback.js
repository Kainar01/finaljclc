import React from 'react'
import Carousel from "react-multi-carousel";
import axios from 'axios'
import "react-multi-carousel/lib/styles.css";
export default class Feedback extends React.Component{
    constructor(props){
        super(props)
        this.state={feedback:''}
        this.createFullPostMarkup = this.createFullPostMarkup.bind(this)
    }
    UNSAFE_componentWillMount(){
        axios.get('https://kashok.kz/mysql.php')
                    .then(response => {
                        var value = response.data;
                        this.setState({feedback:value})
                        console.log(value);
                    })
                    .catch(error => {
                        console.log(error);
                    });
    }
    createFullPostMarkup() {
        return { __html:  `${this.state.feedback}`  }
    }
    render(){
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 6,
                slidesToSlide: 3, // optional, default to 1.
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 4,
                slidesToSlide: 2, // optional, default to 1.
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1, // optional, default to 1.
            },
            };
        
        return (
            
           
            <div class="card-deck" dangerouslySetInnerHTML={{__html: this.state.feedback}}>
                
            </div>
        
              
        );
    }
}