import '../styles/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import TintsWrapsPage from './pages/TintsWrapsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tints-wraps" element={<TintsWrapsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
