import React, { useState } from 'react'
import "./style.css"


function Cart() {

    var swati = JSON.parse(localStorage.getItem("cartitms"))
    var [popitems,setPopitems] = useState(swati)

    console.log(popitems)

     const remove=(item)=>{
      console.log(item)

        localStorage.setItem("cartitms", JSON.stringify(popitems?.filter((x) => x.id !== item.id)))
        setPopitems(JSON.parse(localStorage.getItem("cartitms")))

    }
    
    
  return (
    <div className='cartsw'>
      
      <h1>cart</h1>
      <div className="ss">
      {swati.map(item => (
    <div className="card">
       
        <div className="card-image">
            <img  className="imgdata"src={item.imgURL} alt={item.name} />

        </div>
           <p>{item.title}</p>                            
        <div className="price">
        <h3>{item.sellingPrice}</h3>
        <h4>{item.mrp}</h4>                                            
        </div>  
        <a href="#" onClick={()=>remove(item)}>Remove</a>

      {/* <button onClick={()=>handledelte(id)}>Remove</button> */}
    </div>

    
))};
      </div>

</div>


  )
}

export default Cart
