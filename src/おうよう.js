import React from 'react';
import { BrowserRouter as ルーター, Routes, Route } from 'react-router-dom';
import いえ  from './pages/home/いえ.jsx';
// import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';

const routes = [
  { path: '/Home', element: <いえ /> },
  // { path: '/about', element: <About /> },
  // { path: '/contact', element: <Contact /> },
];

/**App*/
function おうよう() {
  return (
    <ルーター>
      <div className="おうよう">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </ルーター>
  );
}

export default おうよう;