import './styles.css';
import {Link} from 'react-router-dom';

export const CarCard = (props) => {

    const {id, year, make, model, engine, front, rear, bay, colour} = props;

    return (
        <Link to={`/car/${id}`}>
            <div className={`car-card ${colour}`}>
                <img className="car-thumbnail" src={front} alt={year + make + model + "photo"}/>

                <h2 className = "car-name"> {year + " " + make + " " + model} </h2>
            </div>
        </Link>
    )
}