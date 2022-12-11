import React, { Component } from 'react'
import FCRecipes from './FCRecipes'
import FCRecipe from './FCRecipe'
import ArrRecipe from './ArrRecipe'

export default class CCMyKItchen extends Component {

    constructor(props) {
        super(props)
        this.state = {

            foodToEat:ArrRecipe,
            foodEaten:[],
            counter:0

        };
    }

    RecieveData = (name,btnName) => 
    {

      if(btnName=="Prepare Dish")
      {
        let found = this.state.foodToEat.filter(dish => name!=dish.name)
        let Nofound1 = this.state.foodToEat.filter(dish => name==dish.name)
        let Nofound=[...this.state.foodEaten,Nofound1[0]]

        this.setState(
          {
              foodToEat:found,
              foodEaten:Nofound,
              counter:Nofound.length
          }
        )

      }

      else if(btnName=="Eat me!")
      {
        let Nofound=this.state.foodEaten.filter(dish=>name!=dish.name)
        let found1 = this.state.foodEaten.filter(dish => name==dish.name)
        let found=[...this.state.foodToEat,found1[0]]

        this.setState(
          {
              foodToEat:found,
              foodEaten:Nofound,
              counter:Nofound.length
          }
       )

      }
        
    }

    render() {
        return (
          <div style={{textAlign:'center'}}>
            <h1>Recipes</h1>
            <FCRecipes counter={this.state.counter} fooddone={this.state.foodEaten} food={this.state.foodToEat} 
            sendData={this.RecieveData} styleCss={this.state.counter>0?'block':'none'} />
          </div>
        )
      }
}
