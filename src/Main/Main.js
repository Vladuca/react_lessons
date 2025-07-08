
import './Main.css';
import artcicles from '../data/articles.json';
console.log(artcicles);


function Main(){
    return(
        <div className="Main">{
            artcicles.map(item=>
            <section> 
            <h2>{item.title}</h2>
            <div>{item.body}</div>
            </section>
           )
        }</div>
    )
}

export default Main;