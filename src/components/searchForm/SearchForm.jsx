import { useState } from 'react';
// Css
import './search-form.css';

const SearchForm = ({ searchHandler, theme, colors }) => {
  const [word, setWord] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    if(word){
      searchHandler(word);
      setWord('');
    }
  }

  return (
    <form 
      style={{ backgroundColor: theme ? colors[1] : colors[3] }}
      onSubmit={handleSearch} 
      className='search-form'
    >
      <i className="fa-solid fa-magnifying-glass"></i>
      <input 
        type='text' 
        placeholder='Search user...'
        value={word} 
        onChange={({ target }) => setWord(target.value)}
      />
      <button type='submit'>
        Search
      </button>
    </form>
  );
}

export default SearchForm;