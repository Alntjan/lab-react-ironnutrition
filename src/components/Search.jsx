import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <form>
        <input
          name="search"
          type="text"
          placeholder="Search for foods"
          onChange={this.props.searchFoods}
        />
      </form>
    );
  }
}
