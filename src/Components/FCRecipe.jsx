import React from 'react'
import ArrRecipe from './ArrRecipe'

export default function FCRecipe(props) 
{

  

    // const btnPressed=()=>
    // {
    //     props.sendData(props.name)

    // }


    
  return (
      <div className='col-sm-4' style={{ imgwidth:'100%' }} >
      <img src={props.imgUrl} style={{width:300, height:250}} />
      <h1>{props.name}</h1>
      <p>{props.desc} </p>
      <button onClick={()=>{props.sentData(props.name, props.btnName)}}>{props.btnName}</button>
    </div>
  )
}
