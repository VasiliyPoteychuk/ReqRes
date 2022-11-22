import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import back from './back.svg'



export default function UpdateUser(){
  const [first_name, setFirst_name] = useState('')
  const [email, setEmail] = useState('')
  let {id} = useParams()
  useEffect(()=>{
    (async () => {
      const responce = await fetch(`https://reqres.in/api/users/${id}`)
      const json = await responce.json()
      setFirst_name(json.data.first_name)
      setEmail(json.data.email)

    })()

  },[id])

  function editingUser(e){
    e.preventDefault()
    fetch(`https://reqres.in/api/users/${id}`, {
      method: 'PUT', /* or PATCH */
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
    <h2>Editing User: </h2>
      <form onSubmit={(e)=>editingUser(e)}>
        <label htmlFor="nameInput">Name: </label>
          <input type='text' id="nameInput" onChange={(e)=> setFirst_name(e.target.value)} value={first_name}/>
        <label htmlFor="emailInput">E-mail: </label>
          <input type='email' id='emailInput' onChange={(e)=> setEmail(e.target.value)} value={email}/>
          <input type="submit" value='add'/>
      </form>
      <Link to='/'><img src={back} alt='back'/></Link>
    </>
    
    
  )
}