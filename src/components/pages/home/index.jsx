import './styles.css';
import {useContext, useEffect, useState} from 'react';
import  { CarCard } from "../../car-card"

export const HomePage = () => {

    const [carList, setCarList] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
          getCars();
        }, []
      );

    const getCars = async() => {
        try {
          const response = await fetch('https://firestore.googleapis.com/v1/projects/cars-fb6e1/databases/(default)/documents/cars/')
          const data = await response.json();
          console.log(data);
          const formattedData = data.documents.map((item) => {
            return item.fields
          });

          console.log(formattedData);

          setCarList(formattedData);

          setLoading(false);
        
        } catch(err) {
          console.log(err)
        }
      }

    return (
        <div className="home-page">
          <div className="car-container">
          { 
              carList.map((car) => (
                <CarCard key={car.id} id={car.id.stringValue} model={car.theModel.stringValue} make={car.Make.stringValue} year={car.Year.stringValue} front={car.Front.stringValue} colour={car.Colour.stringValue}></CarCard>
              )) 
            }
    
            {
              loading && <p>Loading Data...</p>
            }
    
          </div>
        </div>
      );
}