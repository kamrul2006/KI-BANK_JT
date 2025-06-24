import './index.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App';
import { RootLayout } from './Layout/RootLayout';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      {/* <Route path="*" element={<ErrorPage />} /> */}
      <Route element={<RootLayout />} >
        <Route path='/' element={<App />} />
        {/* <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactMe />} /> */}
      </Route>

    </Routes>
  </BrowserRouter>
);