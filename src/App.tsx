import Schedule from './components/Schedule';
import Form from './components/Form';
import Header from './components/Header';
import { ScheduleProvider } from './hooks/useScheduleContext';


function App() {

  return (
    <div className="App">
        <div className='ellipse'></div>
        <div className='wave'></div>
        <ScheduleProvider>
            <div className="left">
                <Header/>
                <Form/>
            </div>
            <div className="right">
                <Schedule/>
            </div>
        </ScheduleProvider>
    </div>
  )
}

export default App
