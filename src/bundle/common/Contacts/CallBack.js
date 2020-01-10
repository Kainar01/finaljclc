import React from 'react'
import ReactFlagsSelect from 'react-flags-select';
 
import 'react-flags-select/css/react-flags-select.css';
 

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
class CallBack extends React.Component{
    constructor(props){
        super(props)
        this.state={value: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.handleChild = this.handleChild.bind(this)
        this.onSelectFlag = this.onSelectFlag.bind(this)
    }
    onSelectFlag(e){
        
        const input = document.getElementById('country')
        
        
        input.value= e
        
        document.querySelector('.selected--flag--option').click()
        
    }
    handleClick(e){
        
        var body = document.getElementById('contact-container');
        var form = document.querySelectorAll('.contact-form')
        let except;
        form.forEach(el=>{
            if(!el.classList.contains('hide')){
                except=el
            }
        })

        
   
       
        except.classList.add('hide')
        body.classList.add('hide')
        
        
        
        
        
        
    }
    handleChild(e){
        e.stopPropagation()
        
        
    }
    handleSubmit(e){
        
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

            <div onClick={this.handleClick} id="contact-container" className="contact-container hide">
             <form onClick={this.handleChild} onSubmit={this.handleSubmit}  method="POST" action="php/send.php" className="contact-form jp-form hide">
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
            <form onClick={this.handleChild} onSubmit={this.handleSubmit}  method="POST" action="php/send.php" className="contact-form just-form hide">
                <h5 className="text-center p-3 mb-2 mt-2 w-75 ml-auto mr-auto">Оставьте заявку на пробный урок!</h5>
                <ReactFlagsSelect
    countries={["JP","CN"]}
    customLabels={{"JP": "Японский","CN": "Китайский"}} 
    onSelect={this.onSelectFlag}
    defaultCountry="JP"/>
               
                <input type="text"  name="myName" placeholder="Ваше имя..." className="form-control " required/>
                
                
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
                <input type="hidden" id="country" name="action" value="JP"/>
                <button type="submit" name="btn" value="Send" className="contact btn btn-primary m-4" >Оставить заявку </button>
            </form>
            
            <form onClick={this.handleChild} onSubmit={this.handleSubmit}  method="POST" action="php/send.php" className="contact-form ch-form hide">
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
            
        <form onClick={this.handleChild} onSubmit={this.handleSubmit} className="job-form contact-form hide" method="POST" action="php/email.php">
            
        <h5 className="text-center text-center p-3 mb-2 mt-2 w-75 ml-auto mr-auto ">Оставьте заявку если хотите работать в нашем центре!</h5>
            <input type="text" name="myName" placeholder="Ваше имя..." className="form-control"  />
            
            <input type="text" name="myEmail" className="form-control" placeholder="Ваша почта..." required/>
            <input type="text" id="website" name="website"/>
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
            <textarea cols="40" rows="5" name="myMessage" className="form-control" placeholder="Вопрос который вас интересует?" required></textarea>
            
                <button type="submit"  className="contact btn btn-primary mb-4" > Отправить</button>
            
        </form>
    
            
        </div>
        
            
        );
    }
}
export default  CallBack