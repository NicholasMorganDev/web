import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm.jsx";

export default function Login ({user, setUser}) {
  return (
    <>
      <LoginForm user={user} setUser={setUser}/>
      <h2 className="signup-button">If You Don't Already Have an Account then <Link to={"/signup"}>Sign Up!</Link></h2>
     
    </>
  )
}