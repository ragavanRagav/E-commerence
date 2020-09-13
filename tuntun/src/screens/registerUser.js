import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import { Link } from 'react-router-dom';

export default function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [match, setMatch] = useState('')
    const userRegister = useSelector(state=>state.userRegister);
    const {loading,userInfo,error} = userRegister;
    const dispatch = useDispatch();
    useEffect(() => {
        if(userInfo){
            props.history.push("/signIn");
        }
        return () => {
        }
    },[userInfo]);
    const submitHandler =(e)=>{
        e.preventDefault();
        if(password !== repassword){
            setMatch(true);
        }
        else{
            dispatch(register(name,email,password));
        }
    }
    const imgUrl = "https://s3-ap-northeast-1.amazonaws.com/peatix-files/user/5562732/240administrator-male.png";
    return (
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <img src={imgUrl} alt="profile" />
                            <h2>Register</h2>
                        </li>
                        <li>
                            {loading && <div>Loading...</div>}
                            {error && <div>{error}</div>}
                        </li>
                        <li>
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" onChange={(e)=> setName(e.target.value)} required />
                        </li>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} required />
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)} required />
                        </li>
                        <li>
                            <label htmlFor="repassword">Re-type Password</label>
                            <input type="password" name="repassword" id="repassword" onChange={(e)=> {
                                setRepassword(e.target.value)
                                setMatch(false)}}
                            required />
                        </li>
                        {(match)?<span>Password missmatch</span>:""}
                        <li>
                            <button type="submit" className="button primary" >Register</button>
                        </li>
                        <li><label>Already have an account?</label>
                        <Link to="/signin"><button className="button secondary">Signin</button></Link>
                        </li>
                    </ul>
                </form>
            </div>
    )
}
