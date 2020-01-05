import React from 'react'
import About from '../About/About.js'
import Home from '../Home/Home.js'
import Contacts from '../Contacts/Contacts.js'
import Feedback from '../Feedback/Feedback.js'
import {Link as Scroll} from 'react-scroll'
// import {Link as Scroll} from 'react-scroll'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// import Enroll from '../../../Enroll'
import Advantage from '../About/Advantage.js';
import Introduction from '../About/Introduction.js';

class NavBar extends React.Component  {
    constructor(props){
        super(props)
        this.state={offset:0,bool:false,linkVisible: false,interval:0}
        this.handleScroll = this.handleScroll.bind(this)
        this.handleBtn = this.handleBtn.bind(this)
        this.handleLink = this.handleLink.bind(this)
        
    }

    UNSAFE_componentWillMount() {
        window.addEventListener('scroll',this.handleScroll)
        
        
    }
    
    handleLink(e){
        const nav = document.querySelector('.nav-ul')
        const links = document.querySelectorAll('.nav-link')
        const burger = document.querySelector('.burger')
        const cross = document.querySelector('.cross')
        const time = new Date()
        if( time-this.state.interval>900){
            this.setState({interval: time})
        
        
        
        nav.classList.toggle('nav-translate')
        for(let i=0; i<5; i++){
            links[i].classList.toggle('opacity')
            links[i].classList.toggle('nav-translate')

            if(e.target.classList.contains('job')){
                const form = document.querySelector('.job-form')
                form.parentElement.classList.remove('hide')
                form.classList.remove('hide')
            }
        }
        this.setState({linkVisible: false})


                cross.style.transform = 'scale(0)'
                
            
                if(cross.classList.contains('showed')){
                    cross.classList.remove('showed')
                }
                if(burger.classList.contains('hide')){
                    burger.classList.remove('hide')
                }
                cross.classList.toggle('hide')
                burger.classList.toggle('showed')
                setTimeout(function() {
                    burger.style.transform = 'scale(1.5)'
                }, 20);
                setTimeout(function(){
                    burger.style.transform = 'scale(1)'
                },320)
                
                
            }
    }
    handleBtn(){

        const nav = document.querySelector('.nav-ul')
        const links = document.querySelectorAll('.nav-link')
        const burger = document.querySelector('.burger')
        const cross = document.querySelector('.cross')
        const time = new Date()
        
        if( time-this.state.interval>900){
            this.setState({interval: time})
        
        
        
        nav.classList.toggle('nav-translate')
        
        
        if( !this.state.linkVisible){
            setTimeout(function(){
            for (let i = 0; i < 5; i++) {
                (function (i) {
                    setTimeout(function () {
                        links[i].classList.toggle('opacity')
                        links[i].classList.toggle('nav-translate')
                    }, 300*i);
                })(i);
            }
        },400)
            this.setState({linkVisible: true})

            burger.style.transform = 'scale(1.5)'
            setTimeout(function () {
                burger.style.transform = 'scale(0)'
                
            }, 400);
            setTimeout(function () {
                if(burger.classList.contains('showed')){
                    burger.classList.remove('showed')
                }
                if(cross.classList.contains('hide')){
                    cross.classList.remove('hide')
                }
                burger.classList.toggle('hide')
                cross.classList.toggle('showed')
                
                setTimeout(function(){
                    cross.style.transform = 'scale(1)'
                },0)
                
                
            }, 900);
            


            
    }
    else{
        for(let i=0; i<5; i++){
            links[i].classList.toggle('opacity')
            links[i].classList.toggle('nav-translate')
        }
        this.setState({linkVisible: false})


                cross.style.transform = 'scale(0)'
                
            
                if(cross.classList.contains('showed')){
                    cross.classList.remove('showed')
                }
                if(burger.classList.contains('hide')){
                    burger.classList.remove('hide')
                }
                cross.classList.toggle('hide')
                burger.classList.toggle('showed')
                setTimeout(function() {
                    burger.style.transform = 'scale(1.5)'
                }, 20);
                setTimeout(function(){
                    burger.style.transform = 'scale(1)'
                },320)
                
                
           
    }
    
    
    
    
}


    }

    handleScroll(){
        let offsetLast=this.state.offset
        let offsetY=window.scrollY
        const nav=(document.querySelector('.nav'));
        this.setState({offset: offsetY,bool: offsetY-offsetLast>0 && offsetY>window.innerHeight-nav.offsetHeight})
        
        
        
    }
    UNSAFE_componentDidMount(){
        window.removeEventListener('scroll')

    }
    render(){
    
        
        
        return (
            
                <div>
                    <nav className={"fixed-top nav " +(this.state.bool?'hideNav bottom-shadow':'')+' '+(this.state.offset>0 ? 'nav-yellow bottom-shadow':'')} >
                        <a href="/home" className="text-dark logo ml-2 ">
                            JCLC
                        </a>
                        
                        <button onClick={this.handleBtn} className="button">
                        <i className="fas fa-hamburger burger"></i>
                        <i className="las la-times cross hide"></i>
                        </button>
                        <ul className="nav-ul">
                        <Scroll activeClass="active"
                            to='home'
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
                            <span onClick={this.handleLink} className="btn nav-link"> Главная</span>
                    </Scroll>
                    <Scroll activeClass="active"
                            to='about'
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
                            <span onClick={this.handleLink} className="btn nav-link"> О Нас</span>
                    </Scroll>
                    <Scroll activeClass="active"
                            to='contacts'
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
                            <span onClick={this.handleLink} className="btn nav-link"> Контакты</span>
                    </Scroll>
                    <Scroll activeClass="active"
                            to='feedbacks'
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
                            <span onClick={this.handleLink} className="btn nav-link"> Отзывы</span>
                    </Scroll>
                    <a>
                            <span onClick={this.handleLink} className="btn nav-link job"> Вакансии</span>
                    </a>
                            
                        </ul>
                    
                    </nav>
                    
                    
                </div>
            
        );
    }
}
export default NavBar