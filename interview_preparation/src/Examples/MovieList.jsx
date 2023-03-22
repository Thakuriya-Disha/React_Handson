import {useContext} from 'react';
import MovieContext from './MovieContext';

const MovieList = () => {
    const {movie} = useContext(MovieContext);

    return(
        <>
        <h2>LIST OF ANIMES TO WATCH</h2>
        {movie.map(data => (
            <div key={data.name}>
                <p>Movie Title: <strong>{data.name}</strong></p> 
                <p>Rating: <strong>{data.rating}</strong></p>
                <hr/>
            </div>
        ))}
        </>
    );
}

export default MovieList;