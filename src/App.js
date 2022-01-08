import react, {useState, useEffect} from 'react'
import './App.css';
import randomColor from 'randomcolor';

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")
  
  function handleIncrement(){
    setCount(prevCount => prevCount + 1)
  }

  useEffect(() => {
    setColor(randomColor())
  }, [count])
  
  return (
    <div className="App">
     <h1>rando color</h1>
     <h1 style={{color: color}}>{count}</h1>
     <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default App;
