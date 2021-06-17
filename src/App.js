import { data } from 'browserslist';
import { useState,useEffect } from 'react';
import'bootstrap/dist/css/bootstrap.min.css'
import './App.css';




function App() {
  const [result,setResult]=useState([])

  useEffect(()=>{
    fetch('https://api.covid19india.org/data.json')
    .then(response=>{ return  response.json()})
    .then(data=>{
      setResult(data.statewise)
    })
    .catch(err=>console.log(err))
  },[])


  return (
    <div className="App">
      <center>
        <h1 >INDIA COVID-19 DASHBOARD</h1>
        <table className='table'>
          <thead>
          <tr>
            <th>State</th> <th>Confirmed</th><th>Recovered</th><th>Deaths</th><th>Active</th><th>LastUpdated </th>
          </tr>
          </thead>
          {
          result.map((details,index)=>{
            return (
              <tr key={index}>
          <td>{details.state}</td> <td>{details.confirmed}</td><td>{details.recovered}</td><td>{details.deaths}</td><td>{details.active}</td><td>{details.lastupdatedtime}</td>
          </tr>
            )
          })
          
}
        </table>
      </center>

    </div>
  );
}

export default App;
