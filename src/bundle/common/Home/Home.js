import React from 'react'
import Intro from './Intro'
import About from '../About/About.js'
import GoUp from './GoUp.js'
import Contacts from '../Contacts/Contacts.js'
import FeedbackForm from '../Feedback/FeedbackForm'


const Home = ()=> {
    return (
        <div >
            <div className="position-fixed  mt-5 form-success alert alert-success">
  <strong>Заявка успешно оставлена!</strong> 
</div>
            <div id="home"  className="home d-flex  justify-content-center align-items-center" >
            <Intro/>
            </div>
            <div className="yellow-bg  justify-center ">
                <h6 className="m-auto">
                10% скидка на первый месяц обучение языка!
                </h6>
            </div>
            <div>
            <About/>
            </div>
            <GoUp/>
            <FeedbackForm />
            
            <Contacts/>
        </div>
    );
}
export default Home