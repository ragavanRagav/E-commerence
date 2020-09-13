import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listProduct, removeProduct } from '../actions/productActions';

export default function Admin() {
    const productList = useSelector(state => state.productList);
    const proref = useRef([])
    const {products,loading,error} = productList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProduct());
        return () => {
        }
    }, [])
    const removeHandler = (productId)=>{
        dispatch(removeProduct(productId));
    }
    return loading?<div className="load"><div className="loader"></div></div>:
            error?<div>{error}</div>:
            <div>
                <table className="productTable">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Remove</th>
                    </tr>
                    {
                        products.map(product =>{
                            return(
                                <tr ref={(el)=> proref.current[product.id] = el}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>
                                        <button onClick={()=>{proref.current[product.id].style.display="none"
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            )}
                        )
                    }
                </table>
                <Link to="/productSave"><button  className="button primary" >Add new productSave</button></Link>
            </div>
}
