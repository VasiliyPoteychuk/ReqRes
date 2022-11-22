import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import cross  from './cross.svg';
import deleteUser from './deleteUser';
import reduct from './reduct.svg'
import back from './back.svg'

export default function User(){

  const [user, setUser] = useState([])
  const {id} = useParams()

  useEffect(()=>{
    (async () => {
      const responce = await fetch(`https://reqres.in/api/users/${id}`)
      const json = await responce.json()
      setUser(json.data)

    })()

  },[id])

  return(
    <div className="userData">
      <h2>{user.first_name}</h2>
      <p>{user.email}</p>
      <img className="bidUserIcon" src={user.avatar} alt='user avatar'/>
      <div className='reductData'>
        <img src={cross} className='icon' onClick={()=>deleteUser(user.id)} alt='delete'/> 
        <Link to={`/updateUser/${user.id}`}><img src={reduct} className='icon' alt='update'/></Link>
      </div>
      <Link to='/'><img src={back} alt='back'/></Link>
    </div>
  )
}