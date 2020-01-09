import React from 'react'
import {Link} from 'react-scroll'
class GoUp extends React.Component{
    constructor(props){
        super(props)
        this.state={hidden:true}
    }
    UNSAFE_componentWillMount(){
       
        
        window.addEventListener('scroll',(e)=>{
            
            if(window.scrollY>window.innerHeight && this.state.hidden){
                
            this.setState({hidden: false})
        }
        else if(window.scrollY<window.innerHeight){
            this.setState({hidden:true})
        }
        })
        
    }
    handleClick(){
        const home = document.getElementById('home')
        home.scrollIntoView()
    }
    UNSAFE_componentDidMount(){
        window.removeEventListener('scroll')
    }
    render(){
        return (
            <a onClick={this.handleClick}
            >
    <button type="submit"  className={"upp btn btn-primary "+(this.state.hidden?'hide':'')}>
    <i className="fas fa-arrow-up"></i>
    </button>
</a>
            
        );
    }
}
export default GoUp