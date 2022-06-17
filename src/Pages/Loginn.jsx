import React, {useState} from 'react'
import "./style.css"
import { Link } from 'react-router-dom'

const Loginn = () => {
    const[email, setEmail]= useState("");
    const[password, setPassword]= useState("");
    const [allEntry, setallEntry]= useState([]);
    const submitForm=(e)=>{
        e.preventDefault();
      const newEntry={email:email, password:password} ;
      setallEntry([...allEntry, newEntry])
      console.log(allEntry)
    }
  return (
    <>
    
      <form className='lform' action="" onSubmit={submitForm}>
      <div>
    <label className='flable' htmlFor='email'>Email</label><br></br>
    <input className='finput'  type="text" name='email' id="email" autoComplete='off' 
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
    /><br></br>
               
</div>
    <div>
    <label  className='flable' htmlFor='password'>Password</label><br></br>
    <input className='finput' type="password" name='password' id="password" autoComplete='off' 
    value={password}
    onChange={(e)=>setPassword(e.target.value)}

    /><br></br><br></br>
    </div>
    <Link to="/">
    <button className='fbutton' type='submit'>Login</button></Link>
      </form>
    </>
  )
}

export default Loginn
