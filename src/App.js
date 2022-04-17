import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Services from './Pages/Services/Services';
import SignIn from './Pages/LoginPage/SignIn/SignIn';
import SignUp from './Pages/LoginPage/SignUp/SignUp';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/LoginPage/RequireAuth/RequireAuth';


function App() {
  return (
    <>
    <Header></Header>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/checkout' element={
      <RequireAuth>
        <Checkout/>
      </RequireAuth>
    }></Route>
    <Route path='/sign-in' element={<SignIn/>}></Route>
    <Route path='/sign-up' element={<SignUp/>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
