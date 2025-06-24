import './index.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { RootLayout } from './Layout/RootLayout';
import { HomePage } from './Pages/HomePage';
import ErrorPage from './Components/Fixed/ErrorPage';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<ErrorPage />} />
      <Route element={<RootLayout />} >
        <Route path='/' element={<HomePage />} />
        {/* <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactMe />} /> */}
      </Route>

    </Routes>
  </BrowserRouter>
);