import React from 'react'

export default function Faq(){
    return (
        <div className="Faq">
        <div class="container">
                <br />
                <br />
                <br />
            
                
            
                <br />
            
                <div class="" id="accordion">
                    <div class="faqHeader">Часто задаваемые вопросы.</div>
                    <div class="card ">
                        <div class="card-header">
                            <h4 class="card-header">
                                <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Кто учитель по японскому?</a>
                            </h4>
                        </div>
                        <div id="collapseOne" class="panel-collapse collapse in">
                            <div class="card-block">
                                    У нас работает носитель языка по японскому языку Масуджима сэнсей. Он переехал в Казахстан в 2005 году, и с тех пор он работает преподавателем японского языка. 2019 году он сопровождал Димаша Кудайбергена на поездке в Японию и перевел 'Слова назидания' Абая Кунанбева на японский язык с коллегами. 
                            </div>
                        </div>
                    </div>
                    <div class="card ">
                        <div class="card-header">
                            <h4 class="card-header">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Кто учитель по китайскому?</a>
                            </h4>
                        </div>
                        <div id="collapseTwo" class="panel-collapse collapse">
                            <div class="card-block">
                                Нашего преподавателя по китайскому языку зовут Жанара. Она родилась в Китае и получила высшее образование там же. Переехала в Казахстан в 1997 году. Ее практически можно назвать носителем китайского языка так как она прожила там 25 лет и говорит свободно.
                            </div>
                        </div>
                    </div>
                    <div class="card ">
                        <div class="card-header">
                            <h4 class="card-header">
                                <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Цены в нашем центре?</a>
                            </h4>
                        </div>
                        <div id="collapseThree" class="panel-collapse collapse">
                            <div class="card-block">
                                    Цены в нашем центре за обучение очень минимальны. Групповые занятия - 20000тг в месяц. И к тому же вы можете получить 10% скидку на первый месяц обучения. А еще у нас имеются индивидуальные занятия которые стоют 3000тг в час с местным учителем и 5000тг в час с носителем языка. 
                            </div>
                        </div>
                    </div>
                    <div class="card ">
                            <div class="card-header">
                                <h4 class="card-header">
                                    <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">Обучение языка в Японии.</a>
                                </h4>
                            </div>
                            <div id="collapseFour" class="panel-collapse collapse">
                                <div class="card-block">
                                        С помощью нашего центра вы можете отправиться в Японию учиться. Наш центр работает с языковой школой в Эдогава. Об этой школе вы можете узнать на  <a href="https://www.edogawa-intl.com/">сайте.</a>
                                </div>
                            </div>
                        </div>
                        <div class="card ">
                                <div class="card-header">
                                    <h4 class="card-header">
                                        <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">Поездки в Японию.</a>
                                    </h4>
                                </div>
                                <div id="collapseFive" class="panel-collapse collapse">
                                    <div class="card-block">
                                            Мы организовываем поездки в Японию 1-2 раза в год. Если вы мечтаете поехать в Японию, мы сможем вам устроить это! Чтобы узнать подробнее звоните по номеру 87013050188 или напишите на почту jclc.ast@mail.ru
                                    </div>
                                </div>
                            </div>
                            
            
                    
            
                    
                    </div>
                </div>
                </div>
    )   
}