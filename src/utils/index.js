import { writeCookie } from "../common";


export const registerUser = async (username, email, password) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}users/registerUser`, {
            method: "POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
        });
        const data = await response.json()
        console.log("data:", data);
    } catch (error) {
        console.log(error)
    }
}

export const loginUser = async (username, password, newUser) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}users/userLogin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: "username",
                password: "password"
            }),
        });
        const data = await response.json();

        console.log("data:", data);
        newUser(data.user.username)
        writeCookie("jwt_token", data.user.token, 7)
    } catch (error) {
        console.log(error);
    }
};

export const updateUser = async (username, password, email) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}users/updateUser`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                email: email
            }),
        });
        const data = await response.json();

        console.log("data:", data);
        
    } catch (error) {
        console.log(error);
    }
};

export const deleteUser = async (username, token) => {
    try {
        
        const response = await fetch(`${process.env.REACT_APP_API_URL}users/deleteUser`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify({
                username: username
            }),
        });
        const data = await response.json();

        console.log("data:", data);
        
    } catch (error) {
        console.log(error);
    }
};

export const authCheck = async (token) => {
    try{
        const response = await fetch(`${process.env.REACT_APP_API_URL}users/authCheck`, {
        method: "GET",
        headers:{"Content-Type" : "application/json",
                 "Authorization": token
    },

        })
        const data = await response.json()
        return data.user.username
    } catch (error) {

    }
}