import moment from 'moment'
import { useState } from 'react';
import { Fecha } from './Fecha';
import Button from './statisComponents/Button';
export function Calendar(){
    const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const [month,setMonth] = useState(1);
    const date = moment(`2024-0${month}-01`);
    const bothMonths = [month,MONTHS]
    const days = date.daysInMonth();
    const day = date.day()
    const initCalendar = () => {
      const year = [];
      for (let month = 0; month < 12; month++) {
        const monthArray = [];
        for (let day = 0; day < 35; day++) {
          monthArray.push(new Array());
        }
        year.push(monthArray);
      }
      return year;
    };
    
    const [calendar, setCalendar] = useState(initCalendar());
   
  
    return(
    <>
    <h2>{MONTHS[month-1]}</h2>
    
      <div className='calendar'>
      <div className='dia'>
        <h3>Domingo</h3>
      </div>
        <div className='dia'>
          <h3>Lunes</h3>
        </div>
        <div className='dia'>
          <h3>Martes</h3>
        </div>
        <div className='dia'>
          <h3>Miercoles</h3>
        </div>
        <div className='dia'>
          <h3>Jueves</h3>
        </div>
        <div className='dia'>
          <h3>Viernes</h3>
        </div>
        <div className='dia'>
          <h3>Sabado</h3>
        </div>
        {calendar[0].map((_,key)=>{
          return(
            <Fecha handleCalendar={setCalendar} calendar={calendar} keys={key} month={bothMonths} key={key} days={days} day={day}/>
          )
        })}
      </div>
      <div style={{display:'flex'}}>
        <Button 
          color={'#b9baba'} 
          onClick={() => setMonth(prevState => prevState-1)}>
          -
        </Button>
        
        <Button 
          color={'#b9baba'}
          onClick={() => setMonth(prevState => prevState+1)}>
          +
        </Button>
      </div>
    </>
    )
  }