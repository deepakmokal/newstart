
import './App.css';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

import LoginComponent from './Component/auth/Login/LoginComponent';
import RegisterComponent from './Component/auth/Register/RegisterComponent';
function App() {
  return (
    <div className='App'>

      <Router>
        <Routes>
          <Route path="/" exact element={<LoginComponent />} />
          <Route path="/login"  element={<LoginComponent />} />
          <Route path="/register" element={<RegisterComponent />} />

        </Routes>
      </Router>
    </div>
  
  );
}

export default App;
