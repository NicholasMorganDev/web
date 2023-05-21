import { Link } from "react-router-dom";

export default function Nav ({user, setUser}) {

  return (
    <nav>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li>
          {user ? (
            <li 
                className="log-out"
                onClick={() => {
                setUser(false);
                localStorage.setItem("token", "");
              }}>
              Log Out
            </li>
        ) : <li><Link to={"/login"}>Login</Link></li>}
        </li>
        
      </ul>
    </nav>
  )
}