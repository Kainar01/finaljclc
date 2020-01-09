import React from 'react'


class NavBar extends React.Component  {
    constructor(props){
        super(props)
        this.state={offset:0,bool:false,linkVisible: false,interval:0}
        this.handleScroll = this.handleScroll.bind(this)
        this.handleBtn = this.handleBtn.bind(this)
        this.handleLink = this.handleLink.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    UNSAFE_componentWillMount() {
        window.addEventListener('scroll',this.handleScroll)
        
        
    }
    handleClick(){
        document.getElementById('home').scrollIntoView()
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
        if(e.target.classList.contains('job')){
                const form = document.querySelector('.job-form')
                form.parentElement.classList.remove('hide')
                form.classList.remove('hide')
            }
        else{
            let lin=''
            if(e.target.classList.contains('home-link')){
                lin='home'}
            else if(e.target.classList.contains('about-link')){
                lin = 'about'}
            else if(e.target.classList.contains('contact-link')){
                lin = 'contacts'}
            else if(e.target.classList.contains('feedback-link')){
                lin='feedbacks'}
            const el = document.getElementById(lin)
            el.scrollIntoView();
            
        }
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
                        <a onClick={this.handleClick} className="text-dark logo ml-2 ">
                            JCLC
                        </a>
                        
                        <button onClick={this.handleBtn} className="button">
                        <i className="fas fa-hamburger burger"></i>
                        <i className="las la-times cross hide"></i>
                        </button>
                        <ul className="nav-ul">
                        <a name="home"
                        >
                            <span onClick={this.handleLink} className="btn nav-link home-link"> Главная</span>
                    </a>
                    <a 
                        >
                            <span onClick={this.handleLink} className="btn nav-link about-link"> О Нас</span>
                    </a>
                    <a 
                        >
                            <span onClick={this.handleLink} className="btn nav-link contact-link"> Контакты</span>
                    </a>
                    <a  > 
                            <span onClick={this.handleLink} className="btn nav-link feedback-link"> Отзывы</span>
                    </a>
                    <a >
                            <span onClick={this.handleLink} className="btn nav-link job"> Вакансии</span>
                    </a>
                            
                        </ul>
                    
                    </nav>
                    
                    
                </div>
            
        );
    }
}
export default NavBar