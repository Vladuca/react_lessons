function WayToTeach({title, discription, id}){
    return(
        <li>
            <p><strong>{title}</strong> {discription}, <h1>{id}</h1></p>
        </li>
    )
};

export default WayToTeach;