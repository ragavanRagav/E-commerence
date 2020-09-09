import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import Product from './screens/Product';
import Cart from './screens/cart';
import Register from './screens/registerUser';
import SignIn from './screens/signinScreen';
import Profile from './screens/profile';
import {BrowserRouter, Route,Link} from 'react-router-dom';
import Footer from './footer';
import { useSelector } from 'react-redux';
import addProduct from './screens/addProduct';

function App() {
    const userSignin = useSelector(state=>state.userSign);
    const {userInfo} = userSignin;
    const openmenu=()=>{
        document.querySelector(".sidebar").classList.add("open");
    }
    const closemenu=()=>{
        document.querySelector(".sidebar").classList.remove("open");
    }
  return (
    <BrowserRouter>
        <div className="grid-container"  onMouseUp={closemenu} >
            <header className="header">
                <div className="brand">
                    <button onClick={openmenu}>&#9778; </button>
                    <Link to="/">E-SHOPE</Link>
                </div>
                <div className="header-links">
                    <Link to="/cart">cart </Link>
                    {
                        (userInfo)?<Link to="/profile">{userInfo.name}</Link>:
                        <Link to="/signIn"> signin </Link>
                    }
                </div>
            </header>
            <aside className="sidebar">
                <Link to="/"><h2>E-SHOPE</h2></Link>
                <h3>Categories</h3>
                <p onClick={closemenu} className="sidebar-close-button">&#9938;</p>
                <ul>
                    <li><Link to="category/laptop">Laptops </Link></li>
                    <li><Link to="category/mobile">Mobiles </Link></li>
                </ul>
            </aside>
            <main className="main">
                <div className="content">
                    <Route path="/signIn" component={SignIn} />
                    <Route path="/register" component={Register} />
                    <Route path="/products/:id" component={Product} />
                    <Route path="/productSave" component={addProduct} />
                    <Route path="/cart/:id?" component={Cart} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/" exact={true} component={HomeScreen} />
                </div>
            </main>
            <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;