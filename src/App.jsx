import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import RegisterFormPage from './pages/form/formPage';
import List from './pages/list/list';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register-form' element={<RegisterFormPage />} />
          <Route path='/list' element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
