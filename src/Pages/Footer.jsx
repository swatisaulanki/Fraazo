import React from 'react'
import styled from "styled-components";
import "./style.css"
import { Link } from 'react-router-dom'


const FooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  margin-top:0px;
  background-color:#165241;  
  color:white;
  height:500px;
`;

const FooterPara = styled.p`
  font-size: 20px;
  line-height: 9px;


`;

const SocialImg = styled.img`
  height: 30px;
  width: 30px;
`;

const Footer = () => {
  return (
    <div>
      <div className='footers'>
        <img src='https://fraazo.com/static/footerDesign-26fcca451f726500fd06e7fc02d09cb4.svg'/>
      
         <div>
            <FooterStyle>
        <div className='foot'>
        <img src="http://localhost:3000/static/media/fraz-swati.b70a67f4e825e3d388ac4466952c20a8.svg"/>

<div className='para'>
  <p>Order online vegetables & fruits
directly from the farm. Fraazo is
online platform that allows customer
to get farm fresh produce directly
from farmers.</p>
</div>
        
        </div>
       
        <div>
          <div className='supp'>Useful Links</div><br></br>
          <div className='swat'>
          <Link to="/faqpage">
           <FooterPara>Privacy Policy</FooterPara> <br></br></Link>  
          <FooterPara>FAQ</FooterPara><br></br>
            <FooterPara>Terms & Conditions</FooterPara><br></br>



          </div>
        </div>
        <div>
          <div className='ffoot'>Cities We Serve</div><br></br>
          <div className='ff'>
     <FooterPara>Mumbai</FooterPara><br></br>
            <FooterPara>Hyderabas</FooterPara><br></br>
            <FooterPara>Bangalore</FooterPara><br></br>
            <FooterPara>Delhi</FooterPara><br></br>
            <FooterPara>Noida</FooterPara><br></br>
            <FooterPara>Gurugram</FooterPara><br></br>
            <FooterPara>Pune</FooterPara>
          </div>
        </div>
        <div>
          <div className='ffoots'>Connect With Us</div><br></br>
         
          <div className='fff'>
            
          <Link to="/cart">
         <FooterPara>support@fraazo.com</FooterPara><br></br></Link>
            <FooterPara>+915263489632</FooterPara><br></br>
            <FooterPara>102, We Work Vijay Diamond, <br></br><br></br>
                  {/* Cross Road B, MIDC, Andheri (East),<br></br> */}
                  </FooterPara><br></br>
            
          </div>
            <div>
              <SocialImg src="/assets/pinterest.png" alt="youtubeImg" />
            </div>

          
          </div>
      
      </FooterStyle>
  </div>
  <div className='paras'>
              <h1>Fresh Fruits & Vegetables Grocery Shopping Online</h1>
<p>The quality of fruits & vegetables is synonymous with its freshness, while getting fresh fruits and vegetables 
is a tedious task at times but with Fraazo you can get it delivered at your doorstep. Fraazo brings a wide range of farm fresh fruits, 
vegetables and dairy products to you, all in just a click. We currently serve about more than 3lacs+ happy customers in Mumbai, Navi Mumbai, Thane, Kalyan-Dombivli and Virar. 
Fraazo has made online shopping of fresh produce much easier with its hassle-free home delivery options. You can choose the delivery slot as per your choice and schedule your order accordingly. 
Or you can simply opt for the option of 90 mins Express Delivery and get your order delivered in not more than 90 mins. The farm fresh fruits and vegetables on Fraazo are available at best prices compared to other vendors & supermarkets. 
Plus with so many exciting offers, one can save up to 20% on their Monthly grocery budgets. No need to wait in long queues in crowded supermarkets or local mandis for getting the best prices on veggies. Kick the stress out & just Fraazo your dose of freshness with savings at the comfort of your home. 
Fraazo directly sources fresh fruits and veggies from an extensive network of farmers across Maharashtra, hence bringing you fresh produce straight from farm to table in less than 12 hours. With our Safe & Hygienic packaging and minimal multiple handling, we ensure you get the best quality fresh produce.<br></br><br></br>

The fruits and vegetables are 100% hand-picked fresh from farm, while some products are hydroponically-grown. 
The wide range of fruits and veggies on Fraazo include more than 100+ farm fresh vegetables and fruits, starting from regular veggies like dudhi, cauliflower, beetroot, cabbage, etc.
 to exotic veggies like broccoli, lettuce etc. We also provide the essential vegetable combos like Onion, Potato, Tomato Combo, Salad Combo, Fresh Cut-Veg Combos or Fruit Combos like Banana, Apple Combo, & more. There are a lot of exciting deals on vegetables & fruits, every day of the week, the major highlights being Monday Mandi, Veggie Wednesday, Freelivery Thursday & Fruit Friday.
 For payments, you can choose from the multiple payment options as Fraazo accepts Debit card, Credit card, UPI options like iMobile, Google Pay, 8+ e-Wallet options like Phonepe, JioPay, MobiKwik, Sodexo, NetBanking and Cash on Delivery (COD). 
 If you ever have an issue with missing items or any quality issue, you can raise your concern with us in 48 hrs & we shall refund/ replace your product with “no-questions-asked-policy”. 
 You can simply connect with our Customer Support team via Chat Support or Call on 9152291522.</p><br></br><br></br>
        <h3>© Copyrights 2021 - 2022. Fraazo. All Rights Reserved.</h3>   
           
            </div>
    </div>
    </div>
  )
}

export default Footer
