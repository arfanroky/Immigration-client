import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home/Home';
import Services from './Pages/Services/Services';
import SignIn from './Pages/LoginPage/SignIn/SignIn';
import SignUp from './Pages/LoginPage/SignUp/SignUp';
import RequireAuth from './Pages/LoginPage/RequireAuth/RequireAuth';
import NotFound from './Shared/NotFound/NotFound';
import Footer from './Shared/Footer/Footer';
import Checkout from './Pages/Checkout/Checkout';


function App() {
  return (
    <>
    <Header></Header>
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/services' element={<Services/>}></Route>
    <Route path='/sign-in' element={<SignIn/>}></Route>
    <Route path='/sign-up' element={<SignUp/>}></Route>
    <Route path='/checkout' element={
      <RequireAuth>
        <Checkout></Checkout>
      </RequireAuth>
    }></Route>
    <Route path='*' element={<NotFound/>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
