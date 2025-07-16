// import './App.css';
import Header from "../components/Header";
import {ways} from './data';
import WayToTeach from "../components/WayToTeach";




export default function App(){
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
            </main>

        </div>
    )
}

