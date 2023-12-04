import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [un, setUn] = useState('');
    const [pwd, setPwd] = useState('');
    const [error, setError] = useState(false);
    
    const navigate=useNavigate();

    const Readusername = (event) => {
        event.preventDefault();
        setUn(event.target.value);
        console.log(event.target.value);
    }
    const Readpassword = (event) => {
        event.preventDefault();
        setPwd(event.target.value);
        console.log(event.target.value);
    }
    const Savedata = (event) => {
        event.preventDefault();
        if (un.trim() === '' || un.trim() === '') {
            setError(true);
            return;
        }
        else {
            setError(false);
            navigate('')
        }
    }

    return (
        <div className='c'>

            <form>

                <h1> Sign In </h1>

                Username: <input type="text" onChange={Readusername} name="usr" id="u1" />
                <br />
                Password: <input type="password" onChange={Readpassword} name="pass" id="p1" />
                <br />
                <input type="button" onClick={Savedata} value="sign In" />
              

            </form>
            {error && <h3>All fields must be entered</h3>}


        </div>
    )
}

export default Login
