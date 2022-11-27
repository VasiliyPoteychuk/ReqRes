import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
import back from './back.svg'

export default function UpdatedForm(){
  const [first_name, setFirst_name] = useState('');
  const [email, setEmail] = useState('');
 
  
  let {id} = useParams();
 

  useEffect(()=>{
    (async () => {
      const responce = await fetch(`https://reqres.in/api/users/${id}`)
      const json = await responce.json()
      setFirst_name(json.data.first_name)
      setEmail(json.data.email)
      
    })()

  },[id]);

  function updateUser(e) {
    e.preventDefault()
    if(id) {
      editingUser(e);
    } else {
      createUser(e);
    }
  }

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
    .then(alert('User change!'))
    //.then(window.location.assign('/'))
  }

  function createUser(e) {
    e.preventDefault()
    fetch('https://reqres.in/api/users/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        first_name,
        email,
      })
    })
    .then(res => res.json())
    .then(console.log)
    //.then(window.location.assign('/'))
  };

  return(
    <>
        <form onSubmit={(e)=>updateUser(e)}>
          <label htmlFor="nameInput">Name: </label>
            <input type='text' id="nameInput" value={first_name} onChange={(e)=> setFirst_name(e.target.value)}/>
          <label htmlFor="emailInput">E-mail: </label>
            <input type='email' id='emailInput' value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <input type="submit" value='add'/>
        </form>
        <Link to='/'><img src={back} alt='back'/></Link>           
    </>
    
  )
}