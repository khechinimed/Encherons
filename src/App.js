import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import { Route, Routes} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ForgetPassword from './components/ForgetPassword';
import Account from './components/Account';
import Contact from './components/Contact';
import Setting from './components/Setting';


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
            <Route path='/contact' element={<Contact />} />
            <Route path='/setting' element={<Setting />} />
          </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;