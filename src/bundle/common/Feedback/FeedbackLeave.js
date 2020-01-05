import React from 'react'
export default class FeedbackLeave extends React.Component{
    render(){
        return(
            <div className="ml-auto mr-auto mt-4">
                
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6 pb-5">



                    <form action="mail.php" method="post">
                        <div className="card border-primary rounded-0">
                            <div className="card-header p-0">
                                <div className="bg-info text-white text-center py-2">
                                    <h3><i className="fa fa-envelope"></i> Оставьте отзывы</h3>
                                    <p className="m-0">Напишите о нашем центре если есть что сказать!</p>
                                </div>
                            </div>
                           
                            <div className="card-body p-3">

                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                                        </div>
                                        <input type="text" className="form-control"  name="name" placeholder="Ваше имя..." required />
                                    </div>
                                </div>
                                

                                <div className="form-group">
                                    <div className="input-group mb-2">
                                        <div className="input-group-prepend">
                                            <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                                        </div>
                                        <textarea className="form-control" placeholder="Ваш отзыв..." name="feedback" required></textarea>
                                    </div>
                                </div>
                                <input type="text" id="website" name="website"></input>
                                <div className="text-center">
                                    <button type="submit"  className="btn btn-info btn-block rounded-0 py-2">Подтвердить</button>
                                </div>
                            </div>

                        </div>
                    </form>


                </div>
            </div>
            </div>
        )
    }
}