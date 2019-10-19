import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    onInputChange = (term) => {
        this.setState({
            term: term,
        });
        this.props.onSearchTermChange(term);
    }
    render() {
        return (
            <div className="col-md-12 search-bar">
                <input onChange={(event)=>this.onInputChange(event.target.value)} value={this.state.term} />
            </div>
        )
    } 
}
export default SearchBar;