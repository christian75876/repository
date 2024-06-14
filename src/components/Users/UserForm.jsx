import { useState } from "react";

const initialUserForm = {
    username: "",
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
}
export const UserForm = () => {

    const [userForm, setUserForm] = useState(initialUserForm);
    const { username, password,  email, name, password_confirmation } = userForm;

    const onInputChange = ({target}) => {
        const {name, email} = target;
        setUserForm({
            ...userForm,
            [name] : value
        })
    };

    return(
        <form>
            <input value={username} onChange={onInputChange} className="form-control my-3 w75" type="text" placeholder="Username" name="username"  />
            <input value={name} onChange={onInputChange} className="form-control my-3 w75" type="text" placeholder="Name" name="name" />
            <input value={email} onChange={onInputChange} className="form-control my-3 w75" type="text" placeholder="Email" name="email" />
            <input value={password} onChange={onInputChange} className="form-control my-3 w75" type="password" placeholder="Password" name="password"/>
            <input value={password_confirmation} onChange={onInputChange} className="form-control my-3 w75" type="password" placeholder="Password" />
            <input className="btn btn-primary" type="submit" value="Registrarse" />
        </form>
    )
}