import './App.css';
import LandingPage from './Components/LandingPage';
import { BrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';
import QuizOne from './Components/QuizOne';
import QuizTwo from './Components/QuizTwo';
import QuizThree from './Components/QuizThree';
import QuizFour from './Components/QuizFour';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<LandingPage />}/>
            <Route path='/GeographyQuiz' element={<QuizOne />}/>
            <Route path='/HistoryQuiz' element={<QuizTwo />}/>
            <Route path='/SportsQuiz' element={<QuizThree />}/>
            <Route path='/MovieQuiz' element={<QuizFour />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
