import Button from "./Button/Button"
import { useState } from "react";
import { difference } from '../App/data';

export default function DifferenceSection(){
    const [contentType, setContentType] = useState(null);

    function handeClick(type){
            setContentType(type); 
        }
    return(
        <section>
            <Button isActive={contentType ==='way'} onClick={()=>handeClick('way')}>Подход</Button>
            <Button isActive={contentType ==='easy'} onClick={()=>handeClick('easy')}>Доступность</Button>
            <Button isActive={contentType ==='program'} onClick={()=>handeClick('program')}>Концентрация</Button>
            {!contentType && <p>Нажми на кнопку</p>}
            {contentType && <p>{difference[contentType]}</p>}
        </section>
    )
}