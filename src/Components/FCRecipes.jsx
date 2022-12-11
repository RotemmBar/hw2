import React from 'react'
import FCRecipe from './FCRecipe'
import ArrRecipe from './ArrRecipe'


export default function FCRecipes(props) 
{


    const getData=(name,btnName)=>
    {
      {props.sendData(name,btnName)}
    }

  
    return (
    <div className='row' style={{textAlign:'center'}}>

    <div className='row'>
      <h1>Recipes Made</h1>
       {props.food.map((dish)=>
       
       <FCRecipe btnName="Prepare Dish" sentData={getData} name={dish.name} imgUrl={dish.imgUrl} desc={dish.desc}/>
       )}
       </div>

       <div className='row'>
        <h1 style={{display:props.styleCss}}>Ready to Eat!</h1>
        <p style={{display:props.styleCss}}>Recipes made: {props.counter}</p>
       {props.fooddone.map((dish)=>
       <FCRecipe btnName="Eat me!" sentData={getData} name={dish.name} imgUrl={dish.imgUrl} desc={dish.desc} />
       )}
       </div>
       </div>


  )
}
