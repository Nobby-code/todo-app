import '../styles/register.css';
import { useState } from 'react'
import Axios from 'axios'

const Register = () => {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //registration
    const Registration = (e) => {
        e.preventDefault();
        Axios.post("https://localhost:500/register", {
            fullname: fullname,
            username: username,
            email: email,
            password: password
        })
        .then((response) => {
            console.log(response)
        });
    };

    return (
        <div className="login-page">
            <i className='italic'>Daily Manual</i>
            <div className='login-title'>Registration page</div>
            <section className='login-inputs'>
                <input 
                    type="text" 
                    name="fullname" 
                    placeholder="Fullname" 
                    className='username-input'
                    value={fullname}
                    onChange={(e) => {
                        setFullname(e.target.value);
                    }}
                    /> <br />
                <input type="text" 
                    name="username" 
                    placeholder="username" 
                    className='username-input'
                    value={username}
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                    /> <br />
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Email" 
                    className='username-input'
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    /> <br />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="password" 
                    className='pswd-input'
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    /> <br />
                <input type="button" name="button" value="Sign Up" className='login-button'
                    onClick={Register}
                />
            </section>
            <section>
                <p>Already has an account? Login</p>
            </section> 
        </div>
     );
}
 
export default Register;