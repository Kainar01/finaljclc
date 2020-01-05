import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "react-multi-carousel/lib/styles.css";
const Feedback = (props) => {
    
    const [feedback,setFeed] = useState('<div class="card mb-4">                        <div class="card-body">                <h5 class="card-title">Токтарова Гаухар</h5>                                <p class="card-text">Замечательный центр! Замечательные преподаватели!Я обучаюсь в этом центре3,5 года и приобрела новые навыки, которые смогу использовать в ближайшейпоездке за границу. Большое спасибо! Желаю успехов и развития!</p>            </div>        </div><div class="card mb-4">                        <div class="card-body">                <h5 class="card-title">Сания Баженеева</h5>                                <p class="card-text">В Центре больше всего меня вдохновляет дружеская и теплая атмосфера.Благодаря сей обстановке обучение проходит эффективно и интересно.Благодарю, сэнсэи!</p>            </div>        </div><div class="card mb-4">                        <div class="card-body">                <h5 class="card-title">Тасмагамбетова Жанна</h5>                                <p class="card-text">Очень давно хотела начать учить японский язык, но все никак не решалась.Наткнулась на рекламу  Китайско-Японского центра и записалась на пробныйурок, он мне очень понравился. Материал подаётся интересно и доступно.Тогда я и решила, что буду ходить именно в этот центр, для изученияяпонского языка. Спасибо большое Жанар сенсей и Масуджима сенсей, за вашулюбовь и преданность делу!</p>            </div>        </div><div class="card mb-4">                        <div class="card-body">                <h5 class="card-title">Омаров Тимур Русланович</h5>                                <p class="card-text">Я в восторге от курсов японского языка , мне очень понравилосьпреподнесение материала, получил огромный багаж знаний. Надеюсь в ближайшембудущем применить его на практике</p>            </div>        </div>')
    useEffect(()=>{
        
        axios.get('https://kashok.kz/mysql.php')
                    .then(response => {
                        var value = response.data;
                        setFeed(value)
                        console.log(value);
                    })
                    .catch(error => {
                        console.log(error);
                    });
        
        props.change()
        
    },[])
   
    return (
        
            <div className="card-deck" dangerouslySetInnerHTML={{__html: feedback}}></div>
         
    );
    
}
export default Feedback