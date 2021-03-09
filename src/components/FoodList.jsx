import React, { Component } from 'react';

export default class FoodList extends Component {
  render() {
    return (
      <p>
        {this.props.name}
        {this.props.quantity} * {this.props.calories} ={' '}
        {this.props.calories * this.props.quantity}
      </p>
    );
  }
}
