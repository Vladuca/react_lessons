import { useState } from 'react';
import logo from './logo192.png';


export default function Header(){
    const [now, setNow] = useState(new Date());
    
    setInterval(()=>setNow(new Date()), 1000);

    return(
        <Header>
        <img src={logo} />
            <h3>Result univercity</h3>
            <span>Время сейчас: {now.toLocaleTimeString()}</span>

        </Header>
    )
}