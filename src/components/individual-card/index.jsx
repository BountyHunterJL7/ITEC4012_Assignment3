import './styles.css'

export const IndividualCarCard = (props) => {
   
    const {id, year, make, model, engine, front, rear, bay, colour} = props;

    return (
        <div className="car-page">
            <h1 className="car-text">Car: {year + " " + make + " " + model} </h1>
            <img className="info-pic" src={front} alt="front photo"/>
            <img className="info-pic" src={rear} alt="rear photo"/>
            <h1 className="car-text">Engine: {engine} </h1>
            <img className="info-pic" src={bay} alt="engine bay photo"/>
        </div>
    )

}