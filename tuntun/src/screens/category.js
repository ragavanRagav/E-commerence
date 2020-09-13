import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function Category(props) {
    const cate = props.location.aboutProps.name;
    const productList = useSelector(state => state.productList);
    const { products, loading, error } = productList;
    return loading?<div className="load"><div className="loader"></div></div>:
            error?<div>{error}</div>:
            <ul  className="products">
                {
                products.map(product=>
                    (cate === product.category)?
                    <li key={product.id}>
                        <div className="product">
                            <Link to={"/products/"+product.id}>
                                <img src={product.image} alt="product" className="product-image" />
                            </Link>
                            <div className="product-name">
                                <Link to={"/products/"+product.id}>{product.name}</Link>
                            </div>
                            <div className="product-brand">{product.brand}</div>
                            <div className="product-price">&#8377;{product.price}</div>
                            <div className="product-rating">{product.rating} Stars({product.numreviews} reviews)</div>
                        </div>
                    </li>:'')
                }
            </ul>
}