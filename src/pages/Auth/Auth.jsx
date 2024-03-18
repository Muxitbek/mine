import '../Auth/Auth.css';
import { Navigate, Outlet } from 'react-router-dom';

const Auth = () => {
    const state = JSON.parse(localStorage.getItem("state"));
    if (state?.email) {
        return <Outlet />
    }

    return <Navigate to={"/"} />


};

export default Auth;