import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../actions/productActions';

export default function Product(props) {
    const [qty,setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    const {product,loading,error} = productDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
        }
    },[]);

    const handleAddToCart =()=>{
        props.history.push("/cart/"+props.match.params.id+"?qty="+qty);
    }
    return (
        <div>
            <div style={{padding:"2rem",fontWeight:"bolder",fontSize:"2rem"}}>
                <Link to="/" >&lt;-Back to result</Link>
            </div>
        {loading?<div className="load"><div className="loader"></div></div>:
        error?<div>{error}</div>:
            <div className="details">
                <div className="details-image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h3>{product.name}</h3>
                        </li>
                        <li>
                            <h4>{product.rating} Stars ({product.numreviews}) Reviews</h4>
                        </li>
                        <li>
                            <b>Price: &#8377;{product.price}</b>
                        </li>
                        <li>
                            Description:
                            <div>
                                {product.description}
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="details-action">
                    <ul>
                        <li>
                            Price: <b>Rs.{product.price}</b>
                        </li>
                        <li>
    {product.countInStock >0?"Status: Instock":<p className="outStock">Status: Not avaliable</p>}
                        </li>
                        <li>
                            Qty:<select value={qty} onChange={(e)=> {
                                setQty(e.target.value)
                            }}>
                            {[...Array(product.countInStock).keys()].map(x=>
                                <option key={x+1} value={x + 1}>{x + 1}</option>
                                )}
                            </select>
                        </li>
                        <li>
                            {product.countInStock>0&&<button className="button primary" onClick={handleAddToCart}>Add to cart</button>}
                        </li>
                    </ul>
                </div>
            </div>
            }
        </div>
    )
}