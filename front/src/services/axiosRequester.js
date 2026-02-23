import axios from 'axios';


const BASE_URL = 'http://localhost:3000';

async function axiosRequester(url, method) {

    const axiosInstance = axios.create({baseURL: BASE_URL});


    try {
        const response = axiosInstance.request(url, {
            method
        }); 

        return (await response).data;
    } catch(err) {
        console.log('Error requesting api')
        throw err;
    }
    





}

export default axiosRequester;