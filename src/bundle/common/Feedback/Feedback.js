import React from 'react'
import Carousel from "react-multi-carousel";
import axios from 'axios'
import "react-multi-carousel/lib/styles.css";
export default class Feedback extends React.Component{
    constructor(props){
        super(props)
        this.state={feedback:''}
    }
    UNSAFE_componentWillMount(){
        axios.get('https://kashok.kz/mysql.php')
                    .then(response => {
                        var value = response;
                        this.setState({feedback:value})
                        console.log(value);
                    })
                    .catch(error => {
                        console.log(error);
                    });
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
            
            
                
 
                
                <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                >
                
                <div style={{ height: 200, width: 20+'vw', background: 'black',margin: 2.5+'vw',color:'white'}} ><h5>timur</h5><p> asdflasdflasjdflkaj sdfjalksd fjsdklf sdjf lsdfjlks </p> </div>
                <div style={{ height: 200, width: 20+'vw', background: 'gray',margin: 2.5+'vw'}} >Item 2</div>
                <div style={{ height: 200, width: 20+'vw', background: 'black',margin: 2.5+'vw'}} >Item 1</div>
                <div style={{ height: 200, width: 20+'vw', background: 'gray',margin: 2.5+'vw'}} >Item 2</div>
                <div style={{ height: 200, width: 20+'vw', background: 'black',margin: 2.5+'vw'}} >Item 1</div>
                <div style={{ height: 200, width: 20+'vw', background: 'gray',margin: 2.5+'vw'}} >Item 2</div>
                <div style={{ height: 200, width: 20+'vw', background: 'black',margin: 2.5+'vw'}} >Item 1</div>
                <div style={{ height: 200, width: 20+'vw', background: 'gray',margin: 2.5+'vw'}} >Item 2</div>
                {this.state.feedback}
                </Carousel>
            
        );
    }
}