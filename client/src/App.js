import './App.css';
import React, { useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([{}])

  useEffect(() => { 
    fetch('/test').then(
        res => res.json()
    ).then(
        data => {
          setData(data)
          console.log(data)
        }
      )
  }, [])
  return (
    <>
    
    </>
  );
}

export default App;