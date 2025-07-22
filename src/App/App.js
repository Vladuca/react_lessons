// import './App.css';
import Header from "../components/Header";
import TeachingSection from "../components/TeachingSection";
import DifferenceSection from "../components/DifferencesSection"




export default function App(){
    return(
        <div>
            <Header />
            <main>
                <TeachingSection />
               <DifferenceSection />   
            </main>
        </div>
    )
}

