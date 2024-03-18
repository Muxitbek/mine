import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function App() {

  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: ""
  });

  console.log(state);

  const Input = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setState((prev) => {
      return { ...prev, [name]: value }
    })
  };

  const SubmitIt = () => {
    if (state.email && state.password) {
      localStorage.setItem("state", JSON.stringify(state));
      navigate("/home");
    }

  };

  return (
    <>
      <h1>Login Page</h1>
      <input onChange={Input} name='email' type="text" placeholder='email' />
      <input onChange={Input} name='password' type="text" placeholder='password' />
      <button onClick={SubmitIt}>Log in</button>

    </>
  )
}

export default App;
