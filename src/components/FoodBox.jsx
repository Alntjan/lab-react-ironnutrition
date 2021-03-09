import React, { Component } from 'react';

export default class FoodBox extends Component {
  state = {
    quantity: 1,
  };

  handleChange = (e) => {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleAddFood = () => {
    const food = {
      name: this.props.name,
      image: this.props.image,
      quantity: this.state.quantity,
      calories: this.props.calories,
    };
    this.props.addTheFood(food);
  };

  render() {
    const { name, calories, image } = this.props;
    return (
      <div>
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{name}</strong> <br />
                  <small>{calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number"
                    min="1"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={() => this.handleAddFood()}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}
