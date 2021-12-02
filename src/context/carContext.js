import React, {useState} from 'react';

const CarContext = React.createContext({
    cars: [],
    initializeCars: () => {},
});

export const CarContextProvider = (props) => {
    const [cars, setCars] = useState([]);

    const initializeCars = (carsFromApi) => {
        setCars(carsFromApi);
    }
    
    return (<CarContext.Provider
     value={{cars: cars, initializeCars:initializeCars }}
    >
        {props.children}
    </CarContext.Provider>)

} 

export default CarContext;