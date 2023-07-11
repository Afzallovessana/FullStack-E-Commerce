import { Routes , Route, BrowserRouter} from 'react-router-dom';
import LoginPages from './pages/LoginPages'
import SignUpPage from "./pages/SignUpPage";
import React  from 'react';
import Home from './pages/Home';
import PrivateRoute from './pages/auth/PrivateRoutes';
import AdminDashboards from './pages/AdminDashboards';
import { SnackbarProvider } from 'notistack';






function App() {
  return (
    <BrowserRouter>
    <SnackbarProvider>
        <Routes >

      <Route path="/" element={<LoginPages/>}/>
      <Route path="/signup" element={<SignUpPage/>}/>
      


      <Route path="/home" element={<PrivateRoute><Home/></PrivateRoute>}/>
      <Route path="/admin-dashboard" element={<PrivateRoute><AdminDashboards/></PrivateRoute>}/>
      
    </Routes>
    </SnackbarProvider>
    </BrowserRouter>

  );
}

export default App;
