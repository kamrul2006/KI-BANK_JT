import './index.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { RootLayout } from './Layout/RootLayout';
import { HomePage } from './Pages/HomePage';
import ErrorPage from './Components/Fixed/ErrorPage';
import { AboutPage } from './Pages/AboutPage';
import { ContactPage } from './Pages/ContactPage';
import { BlogPage } from './Pages/BlogPage';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route element={<RootLayout />} >
        <Route path='/' element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>

    </Routes>
  </BrowserRouter>
);