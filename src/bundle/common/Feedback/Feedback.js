import React from 'react'
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
                        var value = response.data;
                        this.setState({feedback:value})
                        console.log(value);
                    })
                    .catch(error => {
                        console.log(error);
                    });
        
        
        
    }
   
    
    render(){
        
        
        
        return (
            
           
            <div className="card-deck" dangerouslySetInnerHTML={{__html: this.state.feedback}}>
                
            </div>
        
              
        );
    }
}