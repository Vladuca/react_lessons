// import './App.css';
import Header from "../components/Header";
import {ways} from './data';
import WayToTeach from "../components/WayToTeach";
import Button from "../components/Button/Button";
import { useState } from "react";




export default function App(){
    const stateArray = useState('Нажми на кнопку');
    

    let content = 'Нажми на кнопку';
    function handeClick(type){
        content = type;   
    }
    return(
        <div>
            <Header />
            <main>
                <section>
                    <h3>Наш подход к обучению</h3>
                    <ul>
                        <WayToTeach {...ways[1]}/>
                        <WayToTeach {...ways[1]}/>
                    </ul>
                </section>
                <Button onClick={()=>handeClick(ways[0].discription)}>Подход</Button>
                <Button onClick={()=>handeClick('easy')}>Доступность</Button>
                <Button onClick={()=>handeClick('program')}>Концентрация</Button>
                
            </main>
            <p>{content}</p>
        </div>
    )
}

