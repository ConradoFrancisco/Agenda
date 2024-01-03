import './App.css'
import { Calendar } from './components/Calendar';
import '../public/fecha.css'
import 'react-responsive-modal/styles.css';
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
