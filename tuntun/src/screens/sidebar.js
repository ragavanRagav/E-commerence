import React from 'react'

export default function Sidebar() {
    const closemenu=()=>{
        document.querySelector(".sidebar").classList.remove("open");
    }
    return (
        <div>
            <aside className="sidebar">
                <h3>Categories</h3>
                <button onClick={closemenu} >&#9938;123</button>
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
