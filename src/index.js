import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyD0mGrlYlM3SXAO4V7yIcieo6FNeOUN9TA';

const App = () => {
    return (
        <React.Fragment>
            <SearchBar />
        </React.Fragment>
    )
}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)