import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
    
    function showNav() {
        if (Auth.loggedIn()) {
            return (
                <div>
                    <li>
                        <Link to='/Jobs'>
                            Jobs
                        </Link>
                    </li>
                    <li>
                        <a href='/' onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </div>
            )
        } else {
            return (
                <div>
                    <li>
                        <Link to="/signup">
                            Signup
                        </Link>
                    </li>
                    <li>
                        <Link to="/login">
                            Login
                        </Link>
                    </li>
                </div>
            )
        }
    }

    return (
        <header>
            <h1>
                <Link to='/'>
                    <p>myJober</p>
                </Link>
            </h1>

            <nav>
                <ul>
                    <li>
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <a href="#faq">
                            FAQ
                        </a>
                    </li>
                    {showNav()}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;