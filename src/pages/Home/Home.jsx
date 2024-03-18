import { useEffect, useState } from 'react';
import axios from "axios";
import '../Home/Home.css';
import { NavLink } from 'react-router-dom';


const Home = () => {

    const logout = () => {
        localStorage.removeItem("state");
        window.location.reload();
    };

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const [data, status] = await axios.get("http://localhost:3000/users");
        if (status === 200) {
            setUsers(data)
        }
    }

    return (
        <>
        <NavLink></NavLink>
            <button>Log out</button>
            <div className="LogBox">
                <h3>id</h3>
                <h3>First Name</h3>
                <h3>Last Name</h3>
                <h3>email</h3>
                <h3>salary</h3>
                <h3>gender</h3>
            </div>

            {users.map((user) => (
                <div className="infos" key={user.id}>
                    <h3>{user.id}</h3>
                    <h3>{user.firstName}</h3>
                    <h3>{user.lastName}</h3>
                    <h3>{user.email}</h3>
                    <h3>{user.salary}</h3>
                    <h3>{user.gender}</h3>
                    <NavLink to={`/home/user/${user.id}`}>show</NavLink>
                    <NavLink to={`/home/edit/${user.id}`}>edit</NavLink>
                    <button>delete</button>
                </div>
            ))}


        </>
    )
};

export default Home;