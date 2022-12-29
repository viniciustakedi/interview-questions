import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, NotFound, QuestionView, TextEditor } from './pages';
import './App.scss'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/text-editor' element={<TextEditor />} />
          <Route path='/question-view/:questionId' element={<QuestionView />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
