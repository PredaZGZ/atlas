import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ValidateToken from './validateToken';
import { useDispatch } from 'react-redux';
import { setLogin } from '../Slices/authReducer';

const PrivateRoute = ({ children }) => {

    let token = useSelector((state) => state.auth.userToken);
    const user = useSelector((state) => state.auth).user.name;
    const dispatch = useDispatch();
    
    if (token === '' || token === null) {
        token = sessionStorage.getItem("token"); 
    }
    if (token === '' || token === null) {
        return <Navigate to="/login" />;
    }
    ValidateToken(token).then(data => {
        if (data === false) {
            sessionStorage.removeItem("token");
            return <Navigate to="/login" />;
        } else {
            if(user === null || user === '') {
                dispatch(setLogin(data));
            }
        }
    })
    return children

};

export default PrivateRoute;