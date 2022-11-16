import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import About from './components/About';
import { Route, Routes} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ForgetPassword from './components/ForgetPassword';
import Account from './components/Account';

function App() {
  return (
    <div>
      <AuthContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/forgetpassword' element={<ForgetPassword />} />
            <Route path='/account' element={<Account />} />
            <Route path='/a-propos' element={<About />} />
          </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;