import React from "react";
import { useState } from "react";
import {loginUser} from "../utils"

const Login = ({newUser}) => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const submitHandler = async (event) => {
        event.preventDefault();
        await loginUser(username, password, newUser)
    }

return (
    <div className="login">
        <h2>Please login below</h2>

        <form onSubmit={submitHandler}>
            <label>Username:
                <input
                onChange={(event) => setUsername(event.target.value)}></input>
            </label>
            <br></br>

            <label>Password:
            <input
                type="password" onChange={(event) => setPassword(event.target.value)}></input>
            </label>
            <br></br>
            <button type="submit">Login</button>
        </form>

    </div>
)



}

export default Login;