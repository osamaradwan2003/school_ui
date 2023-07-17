import axios from "axios";


export async function login(username: string, password: string){

    return await axios.post("users/login",{
        username,
        password,
    },
    {
        headers: {

        }
    })
}