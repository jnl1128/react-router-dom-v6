import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const onAboutClick = () => {
        // redirect를 하는 경우나
        // 접근 권한이 없는 페이지여서 처리를 해줘야 하거나
        navigate("/about");
    };
    return (
        <header>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <button onClick={onAboutClick}>About</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;
