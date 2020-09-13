import React from 'react'
import Cookie from 'js-cookie';
import { useSelector } from 'react-redux';
import Admin from './admin';
import User from './user';

export default function Profile(props) {
    const userSignin = useSelector(state=>state.userSign);
    const { userInfo } = userSignin;
    return (
        <div className="center">
            <h1>Welcome!{userInfo.name} <button className="btn right" onClick={()=>{
                Cookie.remove('userInfo')
                Cookie.remove('cartItems')
                props.history.push("/")
                window.location.reload()
            }}>
                Logout
            </button></h1>
            {(userInfo.isAdmin)?<Admin />:<User />}
        </div>
    )
}
