
import React from 'react'
import axios from 'axios'

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
const FormEnroll = ()=> {
    function handleSubmit(event){
        event.preventDefault();
        console.log(event.target.name.value);
        const name=event.target.name.value
        const email=event.target.email.value
        const message=event.target.message.value
        console.log(email,name,message);
        
        return axios.post('http://127.0.0.1:8000/api/',{
            
            name: name,
            email: email,
            message: message
        
    })
        .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err)
    });
    }
    return (
        <form onSubmit={handleSubmit} action="/action_page.php" id="formEnroll">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input name="name"  className="form-control" placeholder="Enter name" id="name" />
            </div>
            <div className="form-group">
                <label htmlFor="pwd">email:</label>
                <input name="email" type="email" className="form-control" placeholder="Enter email" id="email" />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea name="message"  className=" form-control" placeholder="Enter message" id="message"  />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
}
export default FormEnroll