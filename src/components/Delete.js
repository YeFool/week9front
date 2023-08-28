import React from "react";
import { useState } from "react";
import { deleteUser } from "../utils";

const Delete = () => {
    const [username, setUsername] = useState("");
    

    const submitHandler = async (event) => {
        event.preventDefault();
        await deleteUser(username);
    };

    return (
        <div className="delete">
            <h2>Delete a user</h2>

            <form onSubmit={submitHandler}>
                <label>Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Delete</button>
            </form>
        </div>
    );
};

export default Delete;
