import logo from './logo192.png'

export default function Header(){
    const now = new Date();
    const name = 'Result';

    return(
        <header>
        <img src={logo} alt={name} />
            <h3>Result univercity</h3>
            {/* <span>Время сейчас: {now.toLocaleTimeString()}</span> */}

        </header>
    )
}