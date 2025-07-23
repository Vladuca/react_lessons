// import './App.css';
import Header from "../components/Header";
import TeachingSection from "../components/TeachingSection";
import DifferenceSection from "../components/DifferencesSection";
import TabsSection from "../components/TabsSection";
import { useState } from "react";
import FeedbackSection from "../components/FeedbackSection";




export default function App(){
    const [tab, setTab ] = useState('main');
    return(
        <div>
            <Header />
            <main>
                <TabsSection active={tab} onChange={(current)=>setTab(current)} />

                {tab === 'main' && (
                    <>
                    <TeachingSection />
                    <DifferenceSection /> 
                    </> 
                )}
                {tab==='feedback' && <FeedbackSection/>}
                  
            </main>
        </div>
    )
}

