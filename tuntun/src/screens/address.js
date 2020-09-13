import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Address(props) {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [mobile, setMobile] = useState('');
const [Address, setAddress] = useState('');
const [landmark, setLandmark] = useState('')
const userRegister = useSelector(state=>state.userRegister);
const {loading,userInfo,error} = userRegister;
// const dispatch = useDispatch();
useEffect(() => {
    return () => {
    }
},[userInfo]);
const submitHandler =(e)=>{
    e.preventDefault();
        // dispatch(register(name,email,password));
        props.history.push("/placed");
}
const imgUrl = "https://www.logolynx.com/images/logolynx/40/407e066b57be5376b15a7d795ff8c904.png";
return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <img src={imgUrl} alt="profile" />
                        <h2>Enter Address</h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={(e)=> setName(e.target.value)} required placeholder="Receiver's Name" />
                    </li>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={(e)=> setEmail(e.target.value)} required placeholder="Your E-mail" />
                    </li>
                    <li>
                        <label htmlFor="phno">Mobile Number</label>
                        <input type="tel" name="phno" id="phno" onChange={(e)=> setMobile(e.target.value)} required  placeholder="Receiver's Ph.no"  />
                    </li>
                    <li>
                        <label htmlFor="Address">Address</label>
                        <textarea onChange={(e)=> setAddress(e.target.value)} placeholder="Enter Address"></textarea>
                    </li>
                    <li>
                        <label htmlFor="land_mark">Land Mark</label>
                        <input type="text" name="land_mark" id="land_mark"  onChange={(e)=> setLandmark(e.target.value)} placeholder="Land mark(Optional)" />
                    </li>
                    <li>
                        <button type="submit" className="button primary" >Place Order</button>
                    </li>
                    <li>
                    <Link to="/"><button className="button secondary">Continue Shopping</button></Link>
                    </li>
                </ul>
            </form>
        </div>
)
}
