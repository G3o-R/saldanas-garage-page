import '../styles/App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import TintsWrapsPage from './pages/TintsWrapsPage';
import { useContext } from 'react';
import { Context } from './Context/Context';
import LoadingPage from './LoadingPage';
import Navbar from './Navbar';

function App() {
  const {isLoading, pageComponents} = useContext(Context)

  if (isLoading){
    return (
        <LoadingPage />
    )
  }

  return (
    <div className="App" style={{paddingTop: "90px"}}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home pageComponents={pageComponents}/>} />
          <Route path="/tints-wraps" element={<TintsWrapsPage images_arr={pageComponents.images_arr}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
