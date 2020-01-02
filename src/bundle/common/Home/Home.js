import React from 'react'
import Intro from './Intro'
import About from '../About/About.js'
import GoUp from './GoUp.js'
import Contacts from '../Contacts/Contacts.js'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
//   } from "react-router-dom";
const Home = ()=> {
    return (
        <div >
            <div class="position-fixed  mt-5 form-success alert alert-success">
  <strong>Заявка успешно оставлена!</strong> 
</div>
            <div className="home d-flex  justify-content-center align-items-center" id="home">
            <Intro/>
            </div>
            <div className="yellow-bg  justify-center ">
                <h6 className="m-auto">
                20% скидка на первый месяц обучение языка!
                </h6>
            </div>
            <div>
            <About/>
            </div>
            <GoUp/>
            <Contacts/>
        </div>
    );
}
export default Home