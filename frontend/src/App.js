import './App.css';
import Input from './components/Input';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Input />}/>
      </Routes>
    </div>
  );
}

export default App;
