import {Link} from "react-router-dom";
import './styles.css';

export const Header = () => {
    return (
        <nav className="header">
            <Link className="title-wrapper" to={`/`}>
                <div className="title">Jacob's Garage</div>
            </Link>
        </nav>
        
    );
}