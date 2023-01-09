import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Posts } from './pages/posts';
import { PostDetails } from './pages/postDetails';
import { NoPageFound } from './pages/fallbackPage';

const AppRoutes: FC = () => {
  return (
    <Routes>
      {['/', 'posts'].map((path, index) => (
        <Route key={index} path={path} element={<Posts />} />
      ))}
      <Route path="/post/:id" element={<PostDetails />} />
      <Route path="/*" element={<NoPageFound />} />
    </Routes>
  );
};

export default AppRoutes;
