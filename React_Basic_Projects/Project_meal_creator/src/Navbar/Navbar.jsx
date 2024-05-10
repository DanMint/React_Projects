import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar() {

    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/selectfood">Select Food</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar