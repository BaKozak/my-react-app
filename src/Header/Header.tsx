import { Link } from "react-router-dom";
import stylesHeader from './Header.module.css'

function Header() {

    return (
        <header className={stylesHeader["header"]}>
            <h1>My first react website</h1>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/profile"}>Profile</Link></li>
                    <li><Link to={"/clock"}>Digital Clock</Link></li>
                    <li><Link to={"/counter"}>Counter</Link></li>
                    <li><Link to={"/stop-watch"}>Stop Watch</Link></li>
                    <li><Link to={"/todo-list"}>Todo List</Link></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );
}

export default Header