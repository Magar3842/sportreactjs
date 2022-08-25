import './App.css'
import ResponsiveAppBar from './components/NavBar/navbar';
import { useState } from 'react';
import Counter from './components/Contador/Contador';


function App(props) {

  const [value, Setvalue] = useState(0);

  function Incvalue() {
    return Setvalue(value + 1)
  }

  function Decvalue() {
    return Setvalue(value - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Counter value={value} Increment={Incvalue} Decrement={Decvalue} />
      </header>
    </div>
  );

}

export default App;

/* const App = () => {
  
  const [show, setShow] = useState(false)
  
  const handleShow = () => {
    setShow(!show)
  }

  return (

    <div>
      <Header/>
     

      <button className='btn btn-primary' onClick={handleShow} >Mostrar contador</button>

      {
        show ? <Contador/> : null
      }

      

    </div>
  );
}

export default App; */




