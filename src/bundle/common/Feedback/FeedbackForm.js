import React from 'react'
import Feedback from './Feedback'
import FeedbackLeave from './FeedbackLeave';
import {useEffect,useState} from 'react'
export default function FeedbackForm(){
    
    const [count, setCount] = useState(0);
    const [left, setLeft] = useState(0);
    const [mount,setMount] = useState(false)
    useEffect(() => {
        console.log('hello')
        if(!mount){
        
        let fe=document.querySelectorAll('.card.mb-4')
        if(fe.length>0){
            setMount(true)
        }
        let counter=count
        console.log(fe)
        if(count < fe.length ){
            if(count+3 <= fe.length){
                counter+=3
            }
            else if(count+2 <= fe.length){
                counter+=2
            }
            else if(count+1 <= fe.length){
                counter+=1
            }
        }
        if(counter>3){
            document.querySelector('.btn-load-less').style.display="block"
        }
        else{
            document.querySelector('.btn-load-less').style.display="none"

        }
        if(counter===0 || counter+1>fe.length){
            document.querySelector('.btn-load-more').style.display="none"
        }
        
        for(let i=0;i<fe.length;i++){
            if(i>=counter && !fe[i].classList.contains('hide')){
            fe[i].classList.add('hide')}
            else if(i<counter && fe[i].classList.contains('hide')){
                fe[i].classList.remove('hide')
            }
        }
        
        
        setCount(counter)
        setLeft(fe.length-counter)
        }
    })
        
    const handleClick=(e)=>{
        let fe=document.querySelectorAll('.card.mb-4')
        let counter=count
        //if clicked load more
        if(e.target===document.querySelector('.btn-load-more')){
        if(count < fe.length ){
            if(count+3 <= fe.length){
                counter+=3
            }
            else if(count+2 <= fe.length){
                counter+=2
            }
            else if(count+1 <= fe.length){
                counter+=1
            }
        }
        
        }
        //if clicked load less
         if(e.target===document.querySelector('.btn-load-less')){
             
             
            counter=3
        }
        //hide needed elements
            for(let i=0;i<fe.length;i++){
                if(i>=counter && !fe[i].classList.contains('hide')){
                fe[i].classList.add('hide')}
                else if(i<counter && fe[i].classList.contains('hide')){
                    fe[i].classList.remove('hide')
                }
            }

            if(counter===fe.length){
                document.querySelector('.btn-load-more').style.display="none"
            }
            else{
                document.querySelector('.btn-load-more').style.display="block"
            }
            
            if(counter>3){
                document.querySelector('.btn-load-less').style.display="block"
            }
            else{
                document.querySelector('.btn-load-less').style.display="none"

            }
            
            setCount(counter)
            setLeft(fe.length-counter)
        }

    
        return(
            <div className="container-fluid">
            <FeedbackLeave/>
            
            <Feedback />
            <button onClick={handleClick} className="btn-load-less btn btn-primary m-3">Меньше... </button>
            <button onClick={handleClick} className="btn-load-more btn btn-primary m-3">Еще {left}...</button>
        </div>
        

        );
    
}