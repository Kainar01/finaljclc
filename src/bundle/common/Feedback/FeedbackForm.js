import React from 'react'
import Feedback from './Feedback'
export default class FeedbackForm extends React.Component{
    render(){
        return(
            <div class="container">
            <h2 class="text-center">Contact Form</h2>
            <div class="row justify-content-center">
                <div class="col-12 col-md-8 col-lg-6 pb-5">



                            <form action="mail.php" method="post">
                                <div class="card border-primary rounded-0">
                                    <div class="card-header p-0">
                                        <div class="bg-info text-white text-center py-2">
                                            <h3><i class="fa fa-envelope"></i> Отзыв</h3>
                                            <p class="m-0">Оставьте отзывы</p>
                                        </div>
                                    </div>
                                    <div class="card-body p-3">

                                        <div class="form-group">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                                </div>
                                                <input type="text" class="form-control" id="nombre" name="name" placeholder="Ваше имя..." required />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                                </div>
                                                <input type="email" class="form-control" id="nombre" name="email" placeholder="Ваша почта..." required />
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="input-group mb-2">
                                                <div class="input-group-prepend">
                                                    <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                                </div>
                                                <textarea class="form-control" placeholder="Ваш отзыв..." name="feedback" required></textarea>
                                            </div>
                                        </div>

                                        <div class="text-center">
                                            <input type="submit" value="Подтвердить" class="btn btn-info btn-block rounded-0 py-2"/>
                                        </div>
                                    </div>

                                </div>
                            </form>


                        </div>
            </div>
            <Feedback/>
        </div>
        );
    }
}