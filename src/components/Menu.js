import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Menu() {
    
    const userName = useContext(AuthContext);
    return (
        <>
        <h2>Menu</h2>
        <nav>
            {/* The public API for rendering a history-aware <a> */}
            <Link to={'/'}>Home</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/privacy'}>Privacy</Link>
            <Link to={'/counter'}>Counter</Link>
        </nav>
        <div>{userName}</div>
        </>
    );
}