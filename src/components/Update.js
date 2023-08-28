import React from "react";
import { useState } from "react";
import { updateUser } from "../utils";

const Update = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const submitHandler = async (event) => {
        event.preventDefault();
        await updateUser(username, password, email);
    };

    return (
        <div className="update">
            <h2>Update</h2>

            <form onSubmit={submitHandler}>
                <label>Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <br />

                <label>New Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </label>
                <br />
                
                <label>New Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </label>
                <br />
                
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Update;
