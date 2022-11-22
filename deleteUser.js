


export default function deleteUser(userId){
  console.log(userId);
  fetch(`https://reqres.in/api/users/${userId}`, {
    method: 'DELETE',
  })
  .then(res => res.json())
  .then(console.log);
}