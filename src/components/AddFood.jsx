import React, { Component } from 'react';

export default class addFood extends Component {
  state = {
    name: '',
    image: '',
    quantity: 0,
    calories: 0,
  };

  handleChange = (e) => {
    let { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault(e);
    this.props.addTheFood(this.state);
    this.setState({
      name: '',
      image: '',
      quantity: 0,
      calories: 0,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Calories:</label>
          <input
            name="calories"
            type="number"
            value={this.state.calories}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Image URL:</label>
          <input
            name="image"
            type="text"
            value={this.state.image}
            onChange={(e) => this.handleChange(e)}
          />
          <label>Quantity:</label>
          <input
            name="quantity"
            type="number"
            value={this.state.quantity}
            onChange={(e) => this.handleChange(e)}
          />
          <div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
