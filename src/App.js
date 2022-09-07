import './App.css';
import { BrowserRouter } from "react-router-dom";
import Pages from './pages/Pages';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
