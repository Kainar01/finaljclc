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
   
    UNSAFE_componentDidMount(){
        window.removeEventListener('scroll')
    }
    render(){
        return (
            <Link activeClass="active"
                to="home"
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
    <button type="submit"  className={"upp btn btn-primary "+(this.state.hidden?'hide':'')}>
    <i className="fas fa-arrow-up"></i>
    </button>
</Link>
            
        );
    }
}
export default GoUp