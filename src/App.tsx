import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import { UncontrolledStep1 } from './patterns/uncontrolledPattern/pages/uncontrolled/step1'
import { UncontrolledStep2 } from './patterns/uncontrolledPattern/pages/uncontrolled/step2'
import { ControlledStep1 } from './patterns/controlledPattern/pages/controlled/step1'
import { ControlledStep2 } from './patterns/controlledPattern/pages/controlled/step2'
import { UncontrolledStep3 } from './patterns/uncontrolledPattern/pages/uncontrolled/step3'
import { UncontrolledStep4 } from './patterns/uncontrolledPattern/pages/uncontrolled/step4'

const Home = () => {
  return (
    <ul style={{ textAlign: 'left' }}>
      <h1>react-hook-form サンプル集</h1>
      <li><Link to={'/uncontrolled/step1'}>Uncontrolled Form Example</Link></li>
      <li><Link to={'/controlled/step1'}>Controlled Form Example</Link></li>
    </ul>
  )
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uncontrolled/step1" element={<UncontrolledStep1 />} />
        <Route path="/uncontrolled/step2" element={<UncontrolledStep2 />} />
        <Route path="/uncontrolled/step3" element={<UncontrolledStep3 />} />
        <Route path="/uncontrolled/step4" element={<UncontrolledStep4 />} />
        <Route path="/controlled/step1" element={<ControlledStep1 />} />
        <Route path="/controlled/step2" element={<ControlledStep2 />} />
      </Routes>
    </>
  )
}

export default App
