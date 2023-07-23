import axios from "axios"
import { isExpired } from "react-jwt";

const ValidateToken = async (token) => {

    const url = import.meta.env.VITE_REACT_APP_API_URL;

    const config = {
        headers: {
            "auth-token": token
        }
    }    
    if(token === '' || token === null || token === undefined){
        sessionStorage.clear();
        return false;
    } else if(isExpired(token)) {
        sessionStorage.clear();
        return false;
    } else {
        return axios.post(url + '/auth/validate', {}, config).then(res => {
            if (res.status === 200) { 
                return res.data;
            } else {
                sessionStorage.clear();
                return false;
            }
        })
    }
    
}


export default ValidateToken;