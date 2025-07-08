import Header from'../Header/Header';
import Foother from'../Foother/Foother';
import './App.css';
import Main from '../Main/Main';
import Sidebar from '..Sidebar/Sidebar';



function App(){
    return(
        <div className='container'><Header/>
        <Main/>
        <Sidebar/>
        <Foother/>
        </div>
        
        
    )
}

export default App;