import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  
  const increase = () => setCount(count + step);
  const decrease = () => setCount(count - step >= 0 ? count - step : 0);
  const reset = () => setCount(0);
  
  return (
    <div style={style.container}>
      <h1>Counter application</h1>
      <h2>Counter value: {count}</h2>
      <div>
        <label>Step value</label>
        <input 
          type='number' 
          value={step} onChange={(e) => setStep(Number(e.target.value))} style={style.input} />
      </div>
      {/*button */}
    <div>
      <button onClick={increase} style={style.button}>Increase</button>
      <button onClick={decrease} style={style.button}>Decrease</button>
      <button onClick={reset} Resetstyle={style.button}>Reset</button>
    </div>
    </div>
  );
};
const style = {
container:{
  textAlign:'center',
  fontFamily:'Arial,sans-serif',
  marginTop:'50px',
},
button:{
margin:'10px',
padding:'10px 20px',
fontSize:'16px',
cursor:'pointer',

},
resetButton:{
  margin:'10px',
  padding:'10px 20px',
  fontSize:'16px',
  cursor:'pointer',
  backgroundColor:'red',
  color:'white',
},
input:{
marginLeft:'10px',
padding:'5px',
fontSize:'16px',
},
};
export default App;
