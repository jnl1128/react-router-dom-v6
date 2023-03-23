import { Link, Outlet, useParams } from "react-router-dom";
import { users } from "../../db";

function User() {
    const { userId } = useParams();
    return (
        <div>
            <h1>
                User with {userId} is named: {users[Number(userId) - 1].name}
            </h1>
            <hr />
            <Link to="followers">see followers</Link>
            {/* User 컴포넌트의 자식 컴포넌트가 있다면 outlet에 그 자식이 render됨 */}
            <Outlet />
        </div>
    );
}
export default User;
