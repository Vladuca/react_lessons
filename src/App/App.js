// import './App.css';
import Header from "../components/Header";
import { ways, difference } from './data';
import WayToTeach from "../components/WayToTeach";
import Button from "../components/Button/Button";
import { useState } from "react";




export default function App(){
    const [contentType, setContentType] = useState(null);
   
    function handeClick(type){
        setContentType(type); 
    }

    return(
        <div>
            <Header />
            <main>
                <section>
                    <h3>Наш подход к обучению</h3>
                    <ul>
                        {ways.map((way)=><WayToTeach key ={way.title} {...way}/>)}
                    </ul>
                
                <Button isActive={contentType === 'way'} onClick={()=>handeClick('way')}>Подход</Button>
                <Button isActive={contentType === 'easy'} onClick={()=>handeClick('easy')}>Доступность</Button>
                <Button isActive={contentType === 'program'} onClick={()=>handeClick('program')}>Концентрация</Button>
                {!contentType && <p>Нажми на кнопку</p>}
                {contentType && <p>{difference[contentType]}</p>}
                </section>
                <Button onClick={()=>handeClick('ways')}>Подход</Button>
                <Button onClick={()=>handeClick('easy')}>Доступность</Button>
                <Button onClick={()=>handeClick('program')}>Концентрация</Button>
                
            </main>
            <p>{content}</p>
        </div>
    )
}

