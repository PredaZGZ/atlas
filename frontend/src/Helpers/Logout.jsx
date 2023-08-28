import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLogout } from '../Slices/authReducer';

const Logout = () => {

    const dispatch = useDispatch();
    dispatch(setLogout());
    return <Navigate to="/login" />;

};

export default Logout;