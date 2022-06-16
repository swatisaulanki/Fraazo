
import "./style.css"
import React from 'react'
import ImageSlider from "react-simple-image-slider";
import Data from "../Details/Data.json";
import Cart from "../Pages/Cart"
import Footer from "./Footer";
import Mobile from "./Mobile";
import Producto from "./Producto";
import Productsthi from "./Productsthi";
import Productstw from "./Productstw";
import Productsfr from "./Productsfr";
import Productsfi from "./Productsfi";
import Productv from "./produtv";
import { Link } from 'react-router-dom'



const images = [
  

    { url:"https://images.fraazo.com/fraazo-prod/web_ban/3763.png"},
    
    { url:"https://images.fraazo.com/fraazo-prod/web_ban/3765.png"
  },
    { url:"https://images.fraazo.com/fraazo-prod/web_ban/3766.png"
  },
    { url:"https://images.fraazo.com/fraazo-prod/web_ban/3767.png"
  },
    { url: "https://images.fraazo.com/fraazo-prod/web_ban/3768.png" },
    { url: "https://images.fraazo.com/fraazo-prod/web_ban/3770.png" },
    { url: "https://images.fraazo.com/fraazo-prod/web_ban/3671.png"},
];

const Homepage  = () => {
  console.log(Data)
  var arr = JSON.parse(localStorage.getItem("cartitms")) || []      
  const addcart=(item)=>{
    arr.push(item)
    localStorage.setItem("cartitms", JSON.stringify(arr))
    console.log(arr)
  }
  return (
  
<>
<Link to="/cart"></Link>

    
    <div className="swati">
         <ImageSlider
                width={"60%"}
                height={"50vh"}
                images={images}
                showBullets={true}
                showNavs={true}
                style={{ cursor: "pointer" , marginLeft:"14px" , marginTop:"20px"} }
                navSize={60}
                navMargin={20}
                marginLeft={"30px"}
                loop={true}
                autoPlay={true}
                autoPlayDelay={8.5}
                
                
                 
            />
            
    </div>
    <div className='pict'>
      <img src="https://fraazo.com/static/Web1-cafcda6bf22c11e6bbaed467d13a0eb7.png" /><br/>
      <img src="https://fraazo.com/static/Web2-9a152d86240414d76ce205c491e47c4e.png" /><br/>

      <img src="https://fraazo.com/static/Web3-9f5a46f22ff99bcfe079257218356413.png" />
    
      <div className="krush">
  <h3>BEST DEALS</h3>
 </div>
    </div>
 
    <div className="container">
    
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
<div className="fruitst">
<Link to="/cart">
  <img src="https://images.fraazo.com/fraazo-prod/web/298.png "/></Link>
  <img src="https://images.fraazo.com/fraazo-master/webban/Fruits.png"/>
  <img src="https://images.fraazo.com/fraazo-master/webban/Vegetables.png"/>
  <img src="https://images.fraazo.com/fraazo-prod/web/201.png"/>
  <img src="https://images.fraazo.com/fraazo-prod/web/199.png"/>

</div>
<Producto/>
<Productv/>
{/* <Productstw/> */}
<Productsthi/>
<Productsfr/>
<Productsfi/>
<Mobile/>
<Footer/>
    </>
  )
}

export default Homepage

