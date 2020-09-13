import React from 'react'
import { Link } from 'react-router-dom';
import thankyou from '../images/thankyou.png';

export default function Thankyou() {
    return (
        <div className="center">
            <img src={thankyou} alt="thankyou" width="50%" height="50%" />
            <h1>Your order has been placed successfully</h1>
            <h3>Will be delivered within 2 - 5 business days</h3>
            <h4><Link to='/'> Shope more Products</Link></h4>
        </div>
    )
}
