import cars from "./assets/data/cars"
import './App.css'
import CarList from './assets/components/carList/CarList'

function App() {

  console.log(cars);

  return (
    <>
      <CarList cars={cars}/>
    </>
  )
}

export default App
