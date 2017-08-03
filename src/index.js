import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyCj_QgiZWhHaU_WKRST2N7V1lQOSkZZ0l0';
// Create a new component. this component should produce some HTML
// Take this component's generated HTML and put it on the page (in the DOM)

const App = () => {
  return (
  <div>
    <SearchBar />
  </div>
  );
}
ReactDOM.render(<App />, document.querySelector('.container'));