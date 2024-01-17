import CarItem from "../carItem/CarItem";
import {v4 as uuidv4} from "uuid"

const CarList = ({cars}) => {
    console.log(cars);
    return ( 
        <>
            <h1>Das ist eine CarList Component</h1>

            {cars.map((car) => {
                return (
                    <div key = {uuidv4()}>
                        <CarItem
                        carMarke = {car.marke}
                        carFarbe = {car.farbe}
                        carModell = {car.modell}
                        carProduktionsjahr = {car.produktionsjahr}
                        carPS = {car.ps}
                    />
                    </div>
                )
            })}
            
        </>
    );
}

export default CarList;