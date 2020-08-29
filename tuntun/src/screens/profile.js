import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Profile() {
    const userSignin = useSelector(state=>state.userSign);
    const { userInfo } = userSignin;
    return (
        <div>
            <h1>Welcome!{userInfo.name}</h1>
            {
                (userInfo.isAdmin)?<Link to="/productSave"><button  className="button primary" >Add new productSave</button></Link>:
                <h2>More Freatures comming soon!</h2>
            }
            
        </div>
    )
}
