import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import RegisterFormPage from './pages/form'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register-form' element={<RegisterFormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
