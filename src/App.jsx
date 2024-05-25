import './App.css'
import { Route, BrowserRouter as Router, Routes, useLocation} from 'react-router-dom'
import AnimatedRoutes from './components/animatedroutes'


function App() {
  return (
    <>
      <Router>
        <AnimatedRoutes></AnimatedRoutes>
      </Router>
    </>
  )
}

export default App
