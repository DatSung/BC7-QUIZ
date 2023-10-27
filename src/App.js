import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import HomePage from './layout/HomePage/HomePage';
import QuizPage from './layout/QuizPage/QuizPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        

        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/quiz" element={<QuizPage></QuizPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
