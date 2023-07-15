import './App.css'
import { Route, Routes } from 'react-router-dom'
import { UncontrolledStep1 } from './patterns/uncontrolledPattern/pages/uncontrolled/step1'
import { UncontrolledStep2 } from './patterns/uncontrolledPattern/pages/uncontrolled/step2'
import { ControlledStep1 } from './patterns/controlledPattern/pages/controlled/step1'
import { ControlledStep2 } from './patterns/controlledPattern/pages/controlled/step2'

function App() {
  return (
    <Routes>
      <Route path="/uncontrolled/step1" element={<UncontrolledStep1 />} />
      <Route path="/uncontrolled/step2" element={<UncontrolledStep2 />} />
      <Route path="/controlled/step1" element={<ControlledStep1 />} />
      <Route path="/controlled/step2" element={<ControlledStep2 />} />
    </Routes>
  )
}

export default App
