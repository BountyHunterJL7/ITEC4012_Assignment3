import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import './styles.css';
import { IndividualCarCard } from '../../individual-card';


export const IndividualCar = (props) => {

    const {id} = useParams();

    const [car, setCar] = useState([]);

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

          setCar(formattedData);
        
        } catch(err) {
          console.log(err)
        }
      }

        return (
            <div className="individual-wrapper">
                {
                    car.map((carSelected) => {
                        if (carSelected.id.stringValue === id){
                            return (<IndividualCarCard key={id} 
                                id={carSelected.id.stringValue} 
                                model={carSelected.theModel.stringValue} 
                                make={carSelected.Make.stringValue} 
                                year={carSelected.Year.stringValue} 
                                front={carSelected.Front.stringValue} 
                                rear={carSelected.Rear.stringValue} 
                                bay={carSelected.Bay.stringValue} 
                                engine={carSelected.Engine.stringValue}></IndividualCarCard>)
                    }}
                        
                    )
                }
            </div>
            
        );

}
