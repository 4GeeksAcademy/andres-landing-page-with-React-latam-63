import React from "react";

let info = [
    { Name: 'Home' }, { Name: 'About' }, { Name: 'Services' }, { Name: 'Contact' },
]

const NavBarItems = () => {
    return (
        info.map((item) => {
            return (
                <li className="nav-item">
                    <a className="nav-link text-white" href="#">{item.Name}</a>
                </li>
            )
        })
    )
};
export default NavBarItems