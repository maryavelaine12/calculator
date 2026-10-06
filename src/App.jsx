import { useState } from 'react'
import './App.css'


function CalcDisplay({ dispValue }) {
  return (
    <div className='CalcDisplay'>
      <div className='main-value'>{dispValue}</div>
    </div>
  )
}


function CalcButton({ label, buttonClassName = "CalcButton", onClick }) {
  return (
    <button className={buttonClassName} onClick={() => onClick(label)}>
      {label}
    </button>
  )
}


function App() {
  const [disp, setDisp] = useState('0');


  const handleButtonClick = (label) => {
    setDisp(label); 
  }


  return (
    <div className='App'>
      {/* Requirement 1: Header */}
      <div className='Header'>
        Calculator of Mary Avelaine Buenaventura - IT3A
      </div>


      <div className='Calculator'>
        <CalcDisplay dispValue={disp} />
        
        <div className='CalcButtons'>
          <CalcButton label={'7'} onClick={handleButtonClick} />
          <CalcButton label={'8'} onClick={handleButtonClick} />
          <CalcButton label={'9'} onClick={handleButtonClick} />
          <CalcButton label={'÷'} buttonClassName="CalcButton OperatorButton" onClick={handleButtonClick} />


          <CalcButton label={'4'} onClick={handleButtonClick} />
          <CalcButton label={'5'} onClick={handleButtonClick} />
          <CalcButton label={'6'} onClick={handleButtonClick} />
          <CalcButton label={'*'} buttonClassName="CalcButton OperatorButton" onClick={handleButtonClick} />


          <CalcButton label={'1'} onClick={handleButtonClick} />
          <CalcButton label={'2'} onClick={handleButtonClick} />
          <CalcButton label={'3'} onClick={handleButtonClick} />
          <CalcButton label={'-'} buttonClassName="CalcButton OperatorButton" onClick={handleButtonClick} />


          <CalcButton label={'C'} buttonClassName="CalcButton ClearButton" onClick={handleButtonClick} />
          <CalcButton label={'0'} onClick={handleButtonClick} />
          <CalcButton label={'='} buttonClassName="CalcButton EqualsButton" onClick={handleButtonClick} />
          <CalcButton label={'+'} buttonClassName="CalcButton OperatorButton" onClick={handleButtonClick} />
        </div>
      </div>
    </div>
  )
}


export default App