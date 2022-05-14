import React, { useState } from 'react';
// Axios
import axios from 'axios';
// Css
import './App.css';
// Components
import Header from './components/header/Header';
import SearchForm from './components/searchForm/SearchForm';
import User from './components/user/User';
// API
const api = 'https://api.github.com/users/';
// Colors
const colors = [
  '#FFFFFF',
  '#CCCCCC',
  '#161631',
  '#2c2c4c'
]

const App = () => {
  const [user, setUser] = useState(null);
  const [light, setLight] = useState(false);

  const changeTheme = () => {
    setLight(!light);
  }

  const handleSearch = word => {
    axios.get(`${api}${word}`)
      .then(res => setUser(res.data))
      .catch(error => console.log(error.message))
  }

  return (
    <div 
      style={{ backgroundColor: light ? colors[0] : colors[2], color: light ? '#000' : '#fff' }}
      className='container'
    >
      <Header 
        theme={light} 
        changeTheme={changeTheme} 
      />

      <SearchForm 
        searchHandler={handleSearch} 
        theme={light}
        colors={colors}
      />

      {user && <User user={user} theme={light} colors={colors} />}
    </div>
  );
}

export default App;