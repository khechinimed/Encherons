import React from 'react';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/signin' element={<Signin />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
