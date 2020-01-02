
import React from 'react'
import axios from 'axios'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
class Tel extends React.Component{
    constructor(props){
        super(props)
        this.state={value: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(event.target.name.value);
        const name=event.target.name.value
        
        const tel=document.getElementById('phone-form-control').value
        console.log(tel);
        
        
        return axios.post('http://127.0.0.1:8000/tel/',{
            
            name: name,
            tel: tel
        
    })
        .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err)
    });
    }
    render(){
    return (
        <form onSubmit={this.handleSubmit} action="/action_page.php" id="formEnroll">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input name="name"  className="form-control" placeholder="Enter name" id="name" />
            </div>
            <div className="form-group">
            <PhoneInput
            type="tel"   
            name="tel"
            disableDropdown={true}
                 
            country='kz'
            onlyCountries={['kz']}
            value={this.state.value}
            onChange={value => this.setState({ value })}
/>
    </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
    }
}
export default Tel