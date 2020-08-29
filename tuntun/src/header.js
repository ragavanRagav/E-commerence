import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
    const openmenu=()=>{
        document.querySelector(".sidebar").classList.add("open");
    }
    const closemenu=()=>{
        document.querySelector(".sidebar").classList.remove("open");
    }
    return (
        <div>
            <header className="header">
                <div className="brand">
                    <button onClick={openmenu}>&#9776;</button>
                    <Link to="/">TunTun</Link>
                </div>
                <div className="header-links">
                    <a href="#">cart </a>
                    <a href="#">signin</a>
                </div>
            </header>
            <aside className="sidebar">
                <h3>Categories</h3>
                <button onClick={closemenu} className="sidebar-close-button">❌</button>
                <ul>
                    <li>
                        <a href="#">Laptops</a>
                    </li>
                    <li>
                        <a href="#">Mobiles</a>
                    </li>
                </ul>
            </aside>
        </div>
    )
}
