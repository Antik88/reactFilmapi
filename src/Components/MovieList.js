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

    componentDidMount() {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTI5YjRjYjgzN2VmMzI3ZjM3ZDljODFhMWY1YmJmNSIsInN1YiI6IjY1MDE4NjZjNmEyMjI3MDExYTdiMzhmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zjw4IubMn1_IFnl4AsxZT0lPL87TpSp7f3jNv1m5FtA' 
            }
        };

        fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
            .then(response => response.json())
            .then(data => {
                this.setState({ results: data.results });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    render() {
        const { results } = this.state;

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