
import { useState } from 'react';
import './App.css'
import moment from 'moment'

function Calendar(){
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const [month,setMonth] = useState(2);
  const date = moment(`2024-0${month}-01`);
  
  const days = date.daysInMonth();
  const day = date.day()
  const dates = Array(35).fill(null)

console.log(date);
  return(
  <>
  <h2>{MONTHS[month-1]}</h2>
    <div className='calendar'>
      {dates.map((_,key)=>{
        return(<div key={key}>{key + 1 > day && key + 1 - day <= days ? key + 1 - day : ''}</div>)
      })}
    </div>
    <div style={{display:'flex'}}>
      <button onClick={() => setMonth(prevState => prevState-1)} > - </button>
      <button onClick={() => setMonth(prevState => prevState+1)}> + </button>
    </div>
  </>
  )
}

function App() {
 

  return (
    <>
      <main>
        <header>
          <h1>Agenda 2024</h1>
        </header>
        <Calendar/>

      </main>
    </>
  )
}

export default App
