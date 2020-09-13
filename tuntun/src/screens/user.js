import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function User() {
    const cart = useSelector(state => state.cart)
    return (
        <div>
            {(cart.length==0)?"Cart Empty":
                <div style={{color:"green",textAlign:"justify",margin:"10rem"}}>
                    <h2 style={{color:"blueviolet"}}>Your cart has below pending items!!! </h2>
                    <div>
                    {cart.cartItems.map((e)=>{
                        return(
                            <div className="item" key={e.id}>
                                    <img src={e.image} alt="product" style={{
                                        maxWidth: "10rem",
                                        maxHeight: "10rem"}} />
                                <div style={{padding: "5rem"}} >{e.name}</div>
                            </div>
                        )
                    })}</div>
                    <h2 className="right"><Link to="/cart" >checkout</Link></h2>
                </div>
            }
        </div>
    )
}
