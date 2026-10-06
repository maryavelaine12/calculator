import { useState } from 'react'
import './App.css'




function CalcDisplay({dispValue}) {
  return (
    <div className='CalcDisplay'>
      {dispValue}
    </div>
  )
}


function CalcButtons({label, buttonClassName="CalcButton", onClick}) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  )
}


function App() {


  const [dispValue, setDispValue] = useState('0')




  const onClickHandler = (e) => {
    e.preventDefault()
    const value = e.target.innerHTML;


    if (value === 'CLR') {
      setDispValue('0')
    }
    else if (value === '=') {
      alert(dispValue)
    }
    else {
      if (dispValue === '0') {
        setDispValue(value)
      }
      else {
        setDispValue(dispValue + value)
      }
    }
  }


  return (
    <div className='App'>
      <div className='Header'>
        Calculator of Mary Avelaine Buenaventura - DA3A
      </div>
      <div className='Calculator'>
        <CalcDisplay dispValue= {dispValue} />  
        <div className='CalcButtons'>
          <CalcButtons label={'7'} onClick= {onClickHandler} />
          <CalcButtons label={'8'} onClick= {onClickHandler} />
          <CalcButtons label={'9'} onClick= {onClickHandler} />
          <CalcButtons label={'÷'} onClick= {onClickHandler} />
          <CalcButtons label={'4'} onClick= {onClickHandler} />
          <CalcButtons label={'5'} onClick= {onClickHandler} />
          <CalcButtons label={'6'} onClick= {onClickHandler} />
          <CalcButtons label={'x'} onClick= {onClickHandler} />
          <CalcButtons label={'1'} onClick= {onClickHandler} />
          <CalcButtons label={'2'} onClick= {onClickHandler} />
          <CalcButtons label={'3'} onClick= {onClickHandler} />
          <CalcButtons label={'-'} onClick= {onClickHandler} />
          <CalcButtons label={'CLR'} buttonClassName = "ClearButton" onClick = {onClickHandler} />
          <CalcButtons label={'0'} onClick= {onClickHandler} />
          <CalcButtons label={'='} onClick= {onClickHandler} />
          <CalcButtons label={'+'} onClick= {onClickHandler} />
        </div>
      </div>
    </div>
  )
}


export default App