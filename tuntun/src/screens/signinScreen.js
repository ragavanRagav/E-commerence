import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../actions/userActions';
import { Link } from 'react-router-dom';

export default function SignIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state=>state.userSign);
    const {loading,userInfo,error} = userSignin;
    const imgUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3g2SmTcyXdEjWWlon4ezIa6AI61gyg2mkWw&usqp=CAU';
    const dispatch = useDispatch();
    useEffect(() => {
        if(userInfo){
            props.history.push("/profile");
        }
        return () => {
        }
    },[userInfo]);
    const submitHandler =(e)=>{
        e.preventDefault();
        dispatch(signin(email,password));
    }
    return (
            <div className="form">
                <form onSubmit={submitHandler}>
                    <ul className="form-container">
                        <li>
                            <img src={imgUrl} alt="profile" />
                            <h2>Signin</h2>
                        </li>
                        <li>
                            {loading && <div>Loading...</div>}
                            {error && <div>Email or password is incorrect</div>}
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
                            <button type="submit" className="button primary" >Signin</button>
                        </li>
                        <li><label>Don't have an account?</label>
                        <Link to="register"><button className="button secondary">Create your free account</button></Link>
                        </li>
                    </ul>
                </form>
            </div>
    )
}
