import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
    }
    onInputChange = (event) => {
        this.setState({
            term: event.target.value,
        });
    }
    render() {
        return (
            <React.Fragment>
                <input onChange={(event)=>this.onInputChange(event)} value={this.state.term} />
                <span>Value of input: {this.state.term}</span>
            </React.Fragment>
        )
    } 
}
export default SearchBar;