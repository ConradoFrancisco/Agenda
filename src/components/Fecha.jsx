/* eslint-disable react/prop-types */
import { useState } from "react"
import {Modal} from 'react-responsive-modal'
import Button from "./statisComponents/Button";
import {FaRegCheckCircle,FaRegTrashAlt } from 'react-icons/fa'
function Todo({todo,state,calendar,handleCalendar,day,keys,month}){

  const handleChangeState = () =>{
    const newCalendar = [...calendar]
    newCalendar[month[0] - 1][keys - day]
    /* let newTodos = users.filter(item => item.id < 3); */
    handleCalendar(newCalendar)
    console.log(newCalendar)
  }

  let color;
  if(state === 'pending'){
    color = '#FAEF9D'
  }else{
    color ='#65B741'
  }

  return(
    <div style={{width:'100%', marginTop:'10px'}}>
      <div style={{display:'flex',justifyContent:'space-between'}}><strong style={{backgroundColor:color ,width:'50%',display:'flex',padding:'5px',borderRadius:'5px',alignItems: 'center'}}>{todo}</strong>
      <div style={{display:"flex",gap:'10px'}}>
        <Button onClick={handleChangeState} color={'#65B741'}><FaRegCheckCircle  size={20}/></Button>
        <Button color={'#F31559'}><FaRegTrashAlt   size={20}/></Button>
      </div>
      </div>
      
        
      
    </div>
  )
}

// eslint-disable-next-line react/prop-types
export function Fecha({keys,day,days,month,handleCalendar,calendar}){
    const [isOpen, setIsOpen] = useState(false)
    const tareas = calendar[month[0] - 1][keys - day];
    const handleModalOpen = () =>{
      if(children !== ''){
        setIsOpen(true)
      }
    }
    const handleModalClose = () =>{
      setIsOpen(false)
    }
    
    const handleSubmit = (e) =>{
      e.preventDefault();
      const todo = new FormData(e.target);
      const query = todo.get('todo')
      const newCalendar = [...calendar]   
      const objeto = {
        tarea: query,
        state: 'pending'
      }
      newCalendar[month[0] - 1][keys - day].unshift(objeto)
      handleCalendar(newCalendar)
      console.log(newCalendar[month[0] - 1][keys - day])
    }


    
    const children = keys + 1 > day && keys + 1 - day <= days ? keys + 1 - day : ''
    const className = children !== '' ? 'hovered' : 'not-hovered'
    return(
    <>
      <div className={className} onClick={handleModalOpen}>
        {children}
      </div>
      <Modal styles={{modal:{width:'500px'}}} open={isOpen} classNames={{overlay:'customOverlay'}} onClose={handleModalClose} >
        <div>
          <h2>{children} de {month[1][month[0]-1]}</h2>
          <form onSubmit={handleSubmit} >
              <input name="todo" type="text" style={{marginBottom:'1em', width:'100%',height:'25px'}} />
              <button>
                Agregar Tarea
              </button>
          </form>
          <div style={{display:'flex',flexDirection:'column',marginTop:'10px'}}>
          {tareas?.map((tarea,key)=>{
            return(
              <Todo day={day} keys={keys} month={month} calendar={calendar} handleCalendar={handleCalendar} state={tarea.state} todo={tarea.tarea} key={key}/>
            )
          })}
          </div>
          
        </div>

      </Modal>
    </>
    )
  }
  