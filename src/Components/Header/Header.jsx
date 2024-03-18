import '../Header/Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className='conto'>
                <h1>Authentication Tutorial</h1>
                <menu>
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/log">Log In</NavLink>
                </menu>
            </div>
        </>
    )
};

export default Header;