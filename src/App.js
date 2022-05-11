import './App.css';
import Master from './components/Master';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './components/Auth/Auth';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/master' element={<Master />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
