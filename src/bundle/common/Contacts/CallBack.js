import React from 'react'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
class CallBack extends React.Component{
    constructor(props){
        super(props)
        this.state={value: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e){
        // const form = document.querySelector('form')
        // var arr = [...form.children]

        // console.log(form.children,arr);
        // console.log(arr.includes(e.target));
        // if(e.target!==form && !arr.includes(e.target)){
        //     if(!form.classList.contains('hide')){
        //         form.classList.add('hide')
        //     }
        //     e.target.classList.add('hide')
        // }
        var body = document.getElementById('contact-container');
        var form = document.querySelectorAll('.contact-form')
        let except;
        form.forEach(el=>{
            if(!el.classList.contains('hide')){
                except=el
            }
        })
        console.log(body,except);
        
   
        if(except){
            except.classList.add('hide')
        }
        if(body){
            body.classList.add('hide')
        }
        
        if(except){
        except.addEventListener("click", function (ev) {
           
            ev.stopPropagation(); //this is important! If removed, you'll get both alerts
        }, false);}
        
        
        
        
        
    }
    handleSubmit(e){
        // if(!e.target.myName.value || !e.target.myTel.value ){
        //     e.preventDefault()
            
        // }
        // else{

        // }
        
        const alert = document.querySelector('.form-success')
        alert.classList.add('form-show')
        
        
        this.timer = setTimeout(() => {
            alert.classList.remove('form-show')  }, 3000)
        
        
        
    }
    UNSAFE_componentDidMount(){
        clearTimeout(this.timer)
    }
    render(){
        return (

            <div onClick={this.handleClick} id="contact-container" class="contact-container hide">
             <form onSubmit={this.handleSubmit} id="contact-form" method="POST" action="send.php" className="contact-form jp-form hide">
                <h5 className="text-center p-3 mb-2 mt-2 w-75 ml-auto mr-auto">Оставьте заявку на пробный урок!</h5>
                <input type="text" name="myName" placeholder="Ваше имя..." className="form-control " required/>
                
                
                <PhoneInput
                inputProps={{
                    name: 'myTel'}
                    
                  }
                    type="tel"   
                    disableDropdown={true}
                    country='kz'
                    onlyCountries={['kz']}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
        />
                <input type="text" id="website" name="website"/>
                <input type="hidden" name="action" value="Japanese"/>
                <button type="submit" name="btn" value="Send" className="contact btn btn-primary m-4" >Оставить заявку </button>
            </form>
            <form onSubmit={this.handleSubmit} id="contact-form" method="POST" action="send.php" className="contact-form just-form hide">
                <h5 className="text-center p-3 mb-2 mt-2 w-75 ml-auto mr-auto">Оставьте заявку на пробный урок!</h5>
                <input type="text" name="myName" placeholder="Ваше имя..." className="form-control " required/>
                
                
                <PhoneInput
                inputProps={{
                    name: 'myTel'}
                    
                  }
                    type="tel"   
                    name="myTel"
                    disableDropdown={true}
                    country='kz'
                    onlyCountries={['kz']}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
        />
                <input type="text" id="website" name="website"/>
                <input type="hidden" name="action" value="unknown"/>
                <button type="submit" name="btn" value="Send" className="contact btn btn-primary m-4" >Оставить заявку </button>
            </form>
            
            <form onSubmit={this.handleSubmit} id="contact-form" method="POST" action="send.php" className="contact-form ch-form hide">
                <h5 className="text-center p-3 mb-2 mt-2 w-75 ml-auto mr-auto">Оставьте заявку на пробный урок!</h5>
                <input type="text" name="myName" placeholder="Ваше имя..." className="form-control " required/>
                
                
                <PhoneInput
                     inputProps={{
                        name: 'myTel'}
                        
                      }
                    type="tel"   
                    disableDropdown={true}
                    country='kz'
                    onlyCountries={['kz']}
                    value={this.state.value}
                    onChange={value => this.setState({ value })}
        />
                <input type="text" id="website" name="website"/>
                <input type="hidden" name="action" value="Chinese"/>
                <button type="submit" name="btn" value="Send" className="contact btn btn-primary m-4" >Оставить заявку </button>
            </form>
            
        <form onSubmit={this.handleSubmit} className="hide" method="POST" action="email.php">
            <div><label>Имя:</label></div>
            <div><input type="text" name="myName" className="form-control"  /></div>
            <div><label>Почта:</label></div>
            <div><input type="text" name="myEmail" className="form-control" placeholder="example@gmail.com" required/></div>
            <input type="text" id="website" name="website"/>
            <div><label>Вопрос:</label></div>
            <div><textarea cols="40" rows="5" name="myMessage" className="form-control" placeholder="Вопрос который вас интересует?" required></textarea></div>
            <div className="float-right mt-2">
                <input type="submit" value="Send" className="btn btn-primary" />
            </div>
        </form>
    
            
        </div>
        
            
        );
    }
}
export default  CallBack