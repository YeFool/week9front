import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import Update from "./components/Update"
import Delete from "./components/Delete"
import {authCheck} from "./utils"
import {getCookie} from "./common"
import { useState, useEffect } from "react";

function App() {

  const [user, setUser] = useState()

  useEffect (() => {
    let cookie = getCookie("jwt_token")
    console.log(cookie)

    if (cookie !== false) {
      loginWithToken(cookie)
    }

  }, []) 

  const loginWithToken = async (cookie) => {
        let user = await authCheck(cookie)
        setUser(user)
  }

  return (
    <div>
    <div className="App">
      <Register />
    </div>
    <div>
    <Login newUser={setUser} />
    {
      user ? <h2>{user} has been logged in successfully</h2>
      :
      <h2>Please log in</h2>
    }
    </div>
    <div>
    <Update />
    </div>
    <div>
      <Delete />
    </div>
    </div>
  );
}

export default App;
