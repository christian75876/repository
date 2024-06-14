import { UserForm } from "./components/Users/UserForm"
import { UsersList } from "./components/Users/UsersList"


export const App = ()=> {

  const initialUsers = [
    {
      id:1,
      username:'pepe',
      password:'12345',
      email:'pepe@example.com'
    },
  ];



  return (
    <div className="container my-4">
      <h2>Users App</h2>
      <div className="row">

      <div className="col">
        <UserForm/>
      </div>
      <div className="col">
        <UsersList users={ initialUsers }/>
      </div>
      </div>
    </div>
  )
}
