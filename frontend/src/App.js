import { Routes , Route} from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import React  from 'react';




function App() {
  return (
    
    <Routes >
      <Route path="/" Component={LoginPage}/>
      <Route path="/signup" Component={SignUpPage}/>
      
    </Routes>
  
  );
}

export default App;
