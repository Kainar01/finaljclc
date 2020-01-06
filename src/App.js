import React from 'react';
import './App.css';
import Nav from './bundle/common/Header/Navbar.js'
import Home from './bundle/common/Home/Home.js'
class App extends React.Component {
  constructor(props){
    super(props)
    this.state={code:[75, 65, 83, 72, 79, 75],try:[]}
    
  }
  UNSAFE_componentWillMount(){
    
    document.addEventListener('keydown',(e)=>{
      
      if(this.state.try.length<this.state.code.length){
        this.setState({try:[...this.state.try,e.which]})
        
      }
      else{
        this.setState({try:[...this.state.try.slice(1),e.which]})

        for(let i=0;i<this.state.try.length;i++){
          if(this.state.try[i]!==this.state.code[i]){
            break
          }
          else if(i===this.state.try.length-1){
            window.location.href= "https://jclc.kz/kashok.html"
          }
        }
      }
      
    })
  }
  UNSAFE_componentDidMount(){
    document.removeEventListener('keydown')
  }
  render(){
    return (
      <div className="App">
        <Nav/>
        <Home/>
      </div>
    );
  }
}

export default App;
