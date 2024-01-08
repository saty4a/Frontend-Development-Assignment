import axios from "axios";

export async function getImage(place){

    try {
        const response = await axios.get(`http://localhost:5000/get-images/${place}`).then((response) => {
            return response;
    })
    if (response) {
        return response
    }
    } catch (error) {
        console.log(error)
    }
}

export async function getText(place){
    try {
        const response = await axios.get(`http://localhost:5000/get-text/${place}`).then((response) => {
            return response;
    })
    if (response) {
        return response
    }
    } catch (error) {
        console.log(error)
    }
}