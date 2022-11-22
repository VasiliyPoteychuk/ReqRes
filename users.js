import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import cross  from './cross.svg';
import deleteUser from './deleteUser';
import reduct from './reduct.svg'

export default function Users() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState(1)

  useEffect(()=>{
    (async () => {
      const responce = await fetch(`https://reqres.in/api/users?page=${page}&per_page=4`)
      const json = await responce.json()
      setUsers(json.data)

    })()

  },[ page])

  return (
    <div className='body'>
      <h1>Hello ReqRes users!</h1>
      <Link to='/addUser' >Add New User</Link>
      <div className="users">
        {users.map(user => 
          <div className='usersData' key={user.id}>
            <h5>{user.first_name}</h5>
            <Link to={`/${user.id}`}>{user.email}</Link>  
            <Link to={`/${user.id}`}><img src={user.avatar} alt='avatar'/></Link>
            <div className='reductData'>
              <img src={cross} className='icon' onClick={()=>deleteUser(user.id)} alt='delete icon'/> 
              <Link to={`/updateUser/${user.id}`}><img src={reduct} className='icon' alt='update icon'/></Link>
            </div>
          </div>
        )}
      </div>
      <div className='userspagination'>
        <button onClick={()=> setPage(page-1)}>-</button>
        <span>page: {page}</span>
        <button onClick={()=> setPage(page+1)}>+</button>
      </div>
    </div>
    
  );
}


