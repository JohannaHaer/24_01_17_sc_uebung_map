const CarItem = ({carMarke, carFarbe, carModell, carProduktionsjahr, carPS}) => {

    return ( 
        <>
            <h1>Das ist eine CarItem Component</h1>
            <div>
                <h2>Farbe: {carFarbe}</h2>
                <h2>Marke: {carMarke}</h2>
                <p>Modell: {carModell}</p>
                <p>Produktionsjahr: {carProduktionsjahr}</p>
                <p>PS: {carPS}</p>
            </div>
        </>
    );
}

export default CarItem;