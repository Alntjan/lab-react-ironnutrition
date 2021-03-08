import React, {Component} from 'react';

class SearchFood extends Component {

    handleChange = (e) => {
        const {value} = e.target
        this.props.searchQuery(value)
      }
    
    render() {
        return <input id='searchInput' type="text" name="search" onChange={this.handleChange}/>
    }
}

export default SearchFood;
