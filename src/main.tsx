import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './pages/Home.tsx';
import SDLC from './pages/SDLC.tsx';
import CICD from './pages/CICD.tsx';
import TestDocs from './pages/TestDocs.tsx';
import TestTypes from './pages/TestTypes.tsx';
import TestTechniques from './pages/TestTechniques.tsx';
import DataTypes from './pages/DataTypes.tsx';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import './style/index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={<App />}
      // errorElement={<AccountsError />}
    >
      <Route path="/" element={<Home />} />
      <Route path="/sdlc" element={<SDLC />} />
      <Route path="/cicd" element={<CICD />} />
      <Route path="/test-docs" element={<TestDocs />} />
      <Route path="/test-types" element={<TestTypes />} />
      <Route path="/test-techniques" element={<TestTechniques />} />
      <Route path="/data-types" element={<DataTypes />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
