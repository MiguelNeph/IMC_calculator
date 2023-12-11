import { useState } from 'react'
import Header from "./components/Header/index";
import IMCForm from "./components/Form/index";
import Message from "./components/Message/index";
import IMCTable from "./components/Table/index";



function App() {

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [showIMCResults, setShowIMCResults] = useState(false);

  const handleCalculateIMC = () =>{
    const imc = calculateIMC(height, weight);

    setShowIMCResults(true);
  }

  const calculateIMC = (height, weight) =>{
    const heightCM = height / 100;
    const imc = weight / (heightCM * heightCM);
    return imc.toFixed(2);
  }

  return (
    <>
      <Header />
      <IMCForm setHeight={setHeight} setWeight={setWeight}/>
      <button onClick={handleCalculateIMC} type="button">Calculate IMC</button>
      {showIMCResults &&(
        <>
        <Message />
        <IMCTable height={height} weight={weight} />
        </>
      )}
    </>
      
  )
}

export default App
