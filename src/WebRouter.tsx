import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Okleika from './components/Okleika';

function WebRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/okleika' element={<Okleika/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default WebRouter;
