import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Index from "./pages/Index"

function App() {

  return (
    <div className="flex-center flex-col">
      <Router>
        <Routes>
          <Route path="/" element={<Index/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
