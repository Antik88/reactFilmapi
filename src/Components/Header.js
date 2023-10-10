import React from 'react';
import "../Styles/Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '' // Добавляем состояние для хранения значения поискового запроса
    };
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.onSearch(this.state.searchQuery); // Вызываем функцию onSearch и передаем поисковый запрос
    }
  };

  handleInputChange = (event) => {
    this.setState({ searchQuery: event.target.value }); // Обновляем состояние поискового запроса при изменении поля ввода
  };

  render() {
    return (
      <header className='header'>
        <h5 className='header__Logo'>FilmFearcher</h5>
        <input
          className='header__input'
          type="text"
          placeholder="Search..."
          value={this.state.searchQuery}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
        />
      </header>
    );
  }
}

export default Header;