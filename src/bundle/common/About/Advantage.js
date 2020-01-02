import React from 'react'
import origami from '../../.././assets/origami.svg'
import teacher from '../../.././assets/teacher.jpg'
import level from '../../.././assets/level.jpg'
import hands from '../../.././assets/hands.svg'
import thumb from '../../.././assets/thumb.svg'
import opm from '../../.././assets/opm.png'

class Advantage extends React.Component{
    render(){
        return (
            <div class="container">
            <form method="POST" action="send.php">
                <div><label>Your Name:</label></div>
                <div><input type="text" name="myName" className="form-control" /></div>
                <div><label>Your Email:</label></div>
                <div><input type="text" name="myEmail" className="form-control" /></div>
                
                <div><label>Message:</label></div>
                <div><textarea cols="40" rows="5" name="myMessage" className="form-control" placeholder="kotak" value="lolol"></textarea></div>
                <div className="float-right mt-2">
                    <input type="submit" value="Send" className="btn btn-primary" />
                </div>
            </form>
        </div>
            
        );
    }
}
export default  Advantage