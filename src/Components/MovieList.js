import React from 'react';
import MovieCard from './MovieCard';
import '../Styles/MovieList.css';
import NoResult from './NoResult';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        };
    }

    render() {
        const { results } = this.props;

        return (
            results && results.length !== 0 ?
                <div className="container">
                    {results.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
                :
                <NoResult />
        );
    }
}

export default MovieList;