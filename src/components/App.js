import '../styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Context } from './Context/Context';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
