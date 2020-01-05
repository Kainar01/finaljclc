import React,{useState,useEffect} from 'react'
import axios from 'axios'
import "react-multi-carousel/lib/styles.css";
const Feedback = () => {
    
    const [feedback,setFeed] = useState('')
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
        
       
        
    })
   
    return (
        
            <div className="card-deck" dangerouslySetInnerHTML={{__html: feedback}}></div>
         
    );
    
}
export default Feedback