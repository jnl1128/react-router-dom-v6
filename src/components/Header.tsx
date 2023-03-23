import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <ul>
                <li>
                    {/* Link를 사용하려면 Link를 Router 안에 넣어야 한다.*/}
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={"/about"}>About</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
