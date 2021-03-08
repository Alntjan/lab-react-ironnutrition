import React, {Component} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import SearchFood from './components/SearchFood'

class App extends Component {

  state = {
    foods: foods,
    showAddFood: false,
    filterFoods: foods,
    todaysFoods: []
  }

  toggleAddFood = () => {
    this.setState({showAddFood: !this.state.showAddFood})
    console.log(this.state.showAddFood)
  }

  addFoodHandler = (theFood) => {
    const foodsCopy = [theFood, ...this.state.foods]
    this.setState({foods: foodsCopy})
  }

  searchFoods = (searchString) => {
    const pattern = new RegExp(searchString, 'i');
    const filterFoods = this.state.foods.filter(food => pattern.test(food.name) );
    console.log(filterFoods)
    if(searchString === '') {
      this.setState({filterFoods: [...this.state.foods]})
    } else {
      this.setState({filterFoods: filterFoods})
    }
    }
  
  addTheTodayFood = (food) => {
    this.setState({todaysFood: this.state.todaysFoods.push(food)})
  }

  groupBy = (todaysFoods, property) => {
      return todaysFoods.reduce((acc, obj) => {
        let key = obj[property]
        if (!acc[key]) {
          acc[key] = []
        }
        acc[key].push(obj)
        return acc
      }, {})
    }

  render() {
    return <div className = 'flexColumn'>

      <div className='flexColumn'>
      <h1>IronNutrition</h1>
      <button class='marginStandard' onClick={() => this.toggleAddFood()}> Add new food</button> 
      {this.state.showAddFood && <AddFood addTheFood={this.addFoodHandler} toggleAddFood={this.toggleAddFood}/>}
      </div>

      <SearchFood searchQuery={this.searchFoods}/>
      
      <div className='flexRow'>

        <div className='flexColumn flexItem'>
        <ul>
        {this.state.filterFoods.map(food => {
        return <li key={food.name}>
          <FoodBox food={food} addTheTodayFood={this.addTheTodayFood} />
        </li>
        })}
        </ul>
        {this.state.filterFoods.length === 0 && <div>Não há nada nesta pesquisa.</div>}
        </div>

        <div className='flexColumn flexItem marginStandard'>
        <h1>Today's Food</h1>
        <ul>
        {Object.entries(this.groupBy(this.state.todaysFoods, 'name')).map(foodGroup => {
        return <li key={foodGroup[0]}>
          <p>{foodGroup[1].reduce((acc, curr) => acc + parseInt(curr.quantity), 0)} {foodGroup[0]} 
          = {foodGroup[1].reduce((acc, curr) => acc + curr.calories, 0)} cal</p>
          </li>
          })}
        </ul>
        <p><b>Total: {this.state.todaysFoods.length !==0 ? this.state.todaysFoods.reduce((acc, value) => {
          return acc + value.calories
          }, 0) : 0} cal</b></p>
        {console.log(this.groupBy(this.state.todaysFoods, 'name'), Object.entries(this.groupBy(this.state.todaysFoods, 'name')))}
        </div>

    </div>
    </div>
  }
}

export default App;
