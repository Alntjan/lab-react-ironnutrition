import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import Search from './components/Search.jsx';
import AddFood from './components/AddFood';
import FoodList from './components/FoodList';

class App extends Component {
  state = {
    foods: foods,
    isFormDisplayed: false,
    filtered: foods,
    todaysFoods: [],
  };

  searchFoods = (e) => {
    const pattern = new RegExp(e.target.value, 'i');
    const filterFoods = this.state.foods.filter((food) =>
      pattern.test(food.name)
    );
    if (e.target.value.length === 0) {
      this.setState({ filtered: this.state.foods });
    } else {
      this.setState({ filtered: filterFoods });
    }
  };

  addTheFood = (food) => {
    this.setState({ foods: [food, ...this.state.foods] });
    this.toggleForm();
  };
  toggleForm = () => {
    const isFormDisplayed = !this.state.isFormDisplayed;
    this.setState({ isFormDisplayed });
  };
  addTodayFood = (food) => {
    this.setState({ todaysFoods: [food, ...this.state.todaysFoods] });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.toggleForm}>Add Food</button>

          {this.state.todaysFoods.length && (
            <div>
              Today´s foods:{' '}
              {this.state.todaysFoods.map((food) => {
                return <FoodList {...food} key={food.name} />;
              })}
              <p>
                Total:{' '}
                {this.state.todaysFoods.reduce((total, food) => {
                  return total + food.calories * food.quantity;
                }, 0)}
              </p>
            </div>
          )}
          {!this.state.todaysFoods.length && (
            <div>ainda n comeste nada seu article</div>
          )}

          <Search searchFoods={this.searchFoods} />

          {this.state.isFormDisplayed && (
            <AddFood addTheFood={this.addTheFood} />
          )}
          {this.state.filtered.map((food) => {
            return (
              <FoodBox
                {...food}
                key={food.name}
                addTheFood={this.addTodayFood}
              />
            );
          })}
        </header>
      </div>
    );
  }
}

export default App;
