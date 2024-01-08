import axios from "axios";

export async function sendEmail (email) {
    const body = {
        email: email
    }
    try {
        const response = await axios.post("http://localhost:5000/subscribe",body).then((res)=> {
            return res;
        })
        if (response) {
            return response
        }
    } catch (error) {
        console.log(error)
        return error.response;
    }
}