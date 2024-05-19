import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BlogProvider } from './contexts/BlogContext.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Template } from './pages/_template.jsx'
import { HomePage } from './pages/HomePage.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogProvider>
      <BrowserRouter>
        <Routes>
          {/*  Tamplate shows navbar and footer */}
          <Route path='/' element={ <Template />}>
            {/* Shows All posts as read-only */}
            <Route index element={<HomePage />} />
            {/* Show individual post with edit toggle */}
            <Route path='/view/:id' element={<EntryViewPage/>} />
            {/* Show a form to make a new post */}
            <Route path='/create' element={<NewEntryPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </BlogProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
