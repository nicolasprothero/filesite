import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Download from '../pages/Download';
import NotFound from '../pages/NotFound';

const AppRouter: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  );
};

export default AppRouter;