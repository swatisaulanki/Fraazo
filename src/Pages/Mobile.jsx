import React from 'react'
import "./style.css"

const Mobile = () => {
  
  return (
    <div>
      <div className='mobiles'>
      
     <img src="https://fraazo.com/static/app-screen-95bf468762091341a8e4bb213eeda2f8.png"/>
 <div className='mob'>
    <h1>Download The App</h1>
    <h3>Enter your phone number to receive a text with a link to
    download the app</h3>
    {/* <div>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaiZx33fuPKNVXMtCdTdxh_P7Q-6yDdHUEhOm_tnI0vr1AW-kz6iH5BGPk6V5phWNw6yc&usqp=CAU'/>
            </div> */}
    <div className='form'>
    {/* <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" /> */}
     
    <div>
    <label htmlFor='text'></label><br></br>
    <input  className='swatra'   type="text" name='text' id="text" autoComplete='off' placeholder='enter mo number' /><br></br><br></br>
    </div>
    
    <button className='fbutton' type='submit'>submit</button>
    </div>
      </div>
      </div>
    </div>
  )
}

export default Mobile
