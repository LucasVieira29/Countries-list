import axios from "axios";
import { useEffect, useState } from "react";
import './App.css'

function App() {
  const [contriesList, setCountriesList] = useState([]);

  useEffect(() => {  
    axios.get("https://restcountries.com/v3.1/all").then((res) => {
      setCountriesList(res.data);
    })
  },[]);
  
  return (
    <>
    {contriesList.map ((country) =>(
      <div key={country.name.common}>
        <h1>{country.name.common}</h1>
        <img src={country.flags.png}/>
      </div>
    ))}
      
    </>
  )
}

export default App
