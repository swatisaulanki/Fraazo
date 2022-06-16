import React from 'react'
import Data from "../Details/Dattaa.json"
import Cart from './Cart'
import { Link } from 'react-router-dom'

const Productv = () => {


  console.log(Data)
  var arr = JSON.parse(localStorage.getItem("cartitms")) || []      
  const addcart=(item)=>{
    arr.push(item)
    localStorage.setItem("cartitms", JSON.stringify(arr))
    console.log(arr)
  }
  return (
<>

<div className='daatatwo'><h3>MANGO ALL</h3></div>
    
    <div className="contain3">
    
    {/* map through the data and display the cards */}
    {Data.map(item => (
        <div className="card" key={item.id}>
           
            <div className="card-image">
                <img  className="imgdata" src={item.imgURL} alt={item.name} />
            </div>
               <p>{item.title}</p>                            
            <div className="price">
            <h3>{item.sellingPrice}</h3>
            <h4>{item.mrp}</h4>                                            
            </div>  
    
            <div className="all-btn">
          
           <button onClick={()=>addcart(item)}>Add</button>                    
                            </div> 
                           
          
        </div>
            
        
    ))}; 
     </div>
     </>
  )
}

export default Productv
