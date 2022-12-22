import '../styles/login.css'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
const Login = () => {


    // const [data, setData] = useState({
    //     name: "",
    //     password: ""
    // })

    // const handleChange=(e)=>{
    //     // e.preventDefault();
    //     setData({...data, [e.target.name]: e.target.value })
    //     console.log(data)

    // }

    // const submitForm=(e)=>{
    //     e.preventDefault()
    //     data = {
    //         username: data.username,
    //         password: data.password
    //     }
    // }
    return ( 
        <div className="login-page my-login">
            <i className='italic'>Daily Manual</i>
            <div className='login-title'>Login page</div>
            {/* <form onSubmit={submitForm} ></form> */}
            <section className='login-inputs'>
                <input type="text" name="username" placeholder="username" className='username-input' 
                // onChange={handleChange} value={data.username}
                /> <br />
                <input type="password" name="password" placeholder="password" className='pswd-input' 
                // onChange={handleChange} value={data.password}
                /> <br />
                <input type="button" name="button" value="Login" className='login-button'/>
            </section>
           
            <section>
                <p>Do not have an account? <a href='register.js'>Register</a></p>
                <p>Reset password</p>
            </section>
            {/* <Link to="/registration"> login </Link> */}
            <a href='register.js'>Login</a>
        </div>
     );
}
 
export default Login;
