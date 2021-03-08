import React, {Component} from 'react';

class AddFood extends Component {

    state = {
        name: '',
        calories: 0,
        image: '',
        quantity: 0
    }

    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({
          [name]: value
        })
      }
    
    handleFormSubmit = (e) => {
        e.preventDefault()
        this.props.addTheFood(this.state)
        this.setState({
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        })
    
        this.props.toggleAddFood()
    }

    render() {
        return <form class='marginStandard' onSubmit={this.handleFormSubmit}>
          <label class='marginStandard' >Name:</label>
          <input class='marginStandard' type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
 
          <label class='marginStandard' >Calories:</label>
          <input class='marginStandard' type="text" name="calories" value={this.state.calories} onChange={this.handleChange} />
 
          <label class='marginStandard' >Image:</label>
          <input class='marginStandard' type="text" name="image" value={this.state.image} onChange={this.handleChange} />
          
          <button>Submit</button>
        </form>
    }
}

export default AddFood;
