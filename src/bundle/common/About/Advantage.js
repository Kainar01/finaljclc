import React from 'react'


class Advantage extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state={submittable:false}
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
            <div class="container">
            <form onSubmit={this.handleSubmit} method="POST" action="send.php" className="contact-form">
                <div><label>Имя:</label>
                <input type="text" name="myName" className="form-control" required/>
                </div>
                <div className="pt-2"><label>Телефон:</label>
                <input type="number" name="myTel" className="form-control" required/>
                </div>
                <input type="text" id="website" name="website"/>
                <input type="hidden" name="action" value="Japanese"/>
                <button type="submit" name="btn" value="Send" className="contact btn btn-primary m-2" >Оставить заявку </button>
            </form>
            <form onSubmit={this.handleSubmit} method="POST" action="send.php" className="contact-form">
                <div><label>Имя:</label>
                <input type="text" name="myName" className="form-control" required/>
                </div>
                <div className="pt-2"><label>Телефон:</label>
                <input type="number" name="myTel" className="form-control" required/>
                </div>
                <input type="text" id="website" name="website"/>
                <input type="hidden" name="action" value="Chinese"/>
                <button type="submit" name="btn" value="Send" className="contact btn btn-primary m-2" >Оставить заявку </button>
            </form>
        <form onSubmit={this.handleSubmit} method="POST" action="email.php">
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
export default  Advantage