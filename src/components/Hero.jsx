
import { useNavigate } from "react-router-dom";
import '../styles/hero.css';

export default function Hero() {

    const navigate = useNavigate();

    const navigateToUserList = () => {
        navigate('/allusers');
    }

    return (
        <div className="root">
            <h1 className="heading">Welcome to Hero Page</h1>
            <button onClick={()=> navigateToUserList()} className="button">Click to UserList</button>
        </div>
    )
}
