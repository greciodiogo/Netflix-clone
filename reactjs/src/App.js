import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import *as ROUTES from './constants/routes'
import { Browse, Home, Signin, Signup } from './pages';

export default function App () {  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTES.HOME} element={<Home/>}/>
        <Route exact path={ROUTES.BROWSE} element={<Browse/>}/>
        <Route exact path={ROUTES.SIGN_IN} element={<Signin/>}/>
        <Route exact path={ROUTES.SIGN_UP} element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}
