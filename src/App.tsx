import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  Home,
  NotFound,
  Questions,
  QuestionView,
  TextEditor
} from './pages';
import './App.scss'
import { QuestionsContext } from './contexts/questions';
import { useCallback, useEffect, useState } from 'react';
import { IQuestionsArray, QuestionsRequest } from './providers/getQuestions';

function App() {
  const [questions, setQuestions] = useState<IQuestionsArray | null>(null);

  const getQuestionsCallback = useCallback(async () => {
    const getQuestions = await QuestionsRequest({ take: 15 });
    setQuestions(getQuestions);
  }, []);

  useEffect(() => {
    getQuestionsCallback();
  }, [])

  return (
    //@ts-ignore
    <QuestionsContext.Provider value={{ questions, setQuestions }}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/text-editor' element={<TextEditor />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/question-view/:questionId' element={<QuestionView />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </QuestionsContext.Provider>
  )
}

export default App
