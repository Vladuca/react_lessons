import './App.css';

function App(){
    let a = 4;
    const b = [5,6,7];
    const c = {'background': 'orangered'};
    const d = 'yellow';
    const  f = {
        'one': 100,
        'two': 200
    }
    const fd = Object.keys(f);
    console.log(fd);

    return(
        <div className='container'>
            <h1>ItGid.info</h1>
            <h2>Основные конструкции JSX</h2>
            <p>Вывод переменной</p>
             <div>{'{}'}</div>
             <p>Вывод массива</p>
             <div>{b.join(' ')}</div>
             <p>Методы массивов</p>
             <div>{b.map(item=>item + 'h')}</div>
            <p>Методы массивов - создание элементов</p>
            <div>{b.map((item)=><strong>{item + ' '}</strong>)}</div>
            <p style={c}>Inline styles</p>
            <p style={{color:d, background: 'blue'}}>Inline styles2</p>
            <div>{Object.keys(f).map(item=>item + ' ' + f[item])}</div>
            <ul>
                {fd.map(item=><li>{item + ' ' + f[item]}</li>)}
            </ul>
            <p>Создание элемента из массива</p>
            <p>{b.map(item=><span key={item} data-id="22">{item}</span>)}</p>
        </div>
    )
}

export default App;