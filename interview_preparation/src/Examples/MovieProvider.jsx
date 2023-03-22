import MovieContext from "./MovieContext";
import { useState } from "react";

const MovieProvider = (props) => {
    const [movie,setMovie] = useState([
        {name:'Your Name',rating:10},
        {name:'Demon Slayer',rating:10},
        {name:'Jujutsu Kaisen',rating:10}
    ]);

    return(
        <MovieContext.Provider value={{movie}}>
            {props.children}
        </MovieContext.Provider>
    );
}

export default MovieProvider;