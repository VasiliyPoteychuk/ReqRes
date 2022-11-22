import { useState } from "react";
import { Link } from "react-router-dom";
import back from './back.svg'

export default function AddUserForm(){
  const [first_name, setFirst_name] = useState('')
  const [email, setEmail] = useState('')

  function createUser(e) {
    e.preventDefault()
    fetch(`https://reqres.in/api/users/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name,
        email,
      })
    })
    .then(res => res.json())
    .then(console.log)
    .then(window.location.assign('/'))
  }

  return(
    <>
    <h2>Create new user: </h2>
      <form onSubmit={(e)=>createUser(e)}>
        <label htmlFor="nameInput">Name: </label>
          <input type='text' id="nameInput" onChange={(e)=> setFirst_name(e.target.value)}/>
        <label htmlFor="emailInput">E-mail: </label>
          <input type='email' id='emailInput' onChange={(e)=> setEmail(e.target.value)}/>
          <input type="submit" value='add'/>
      </form>
      <Link to='/'><img src={back} alt='back'/></Link>
    </>
  )
}