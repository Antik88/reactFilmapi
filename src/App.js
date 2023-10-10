import './App.css';
import React from 'react';
import MovieList from './Components/MovieList';
import Footer from './Components/Footer';
import Header from './Components/Header';


class App extends React.Component {
  handleSearch = async (searchQuery) => {
    try {
      const apiKey = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTI5YjRjYjgzN2VmMzI3ZjM3ZDljODFhMWY1YmJmNSIsInN1YiI6IjY1MDE4NjZjNmEyMjI3MDExYTdiMzhmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zjw4IubMn1_IFnl4AsxZT0lPL87TpSp7f3jNv1m5FtA' 
      const url = `https://api.themoviedb.org/3/search/movie?language=en-US&page=1&query=${encodeURIComponent(searchQuery)}&api_key=${apiKey}`;

      const response = await fetch(url);
      const data = await response.json();

      this.setState({ searchResults: data.results });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  render() {
    return (
      <div className="App">
        <Header onSearch={this.handleSearch} />
        <MovieList />
        <Footer />
      </div>
    );
  }
}

export default App;