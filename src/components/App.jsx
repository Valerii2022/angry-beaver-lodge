// import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home/HomePage';
import Layout from './Layout/Layout';
import Gallery from 'pages/Gallery/Gallery';
import Contact from 'pages/Contact/Contact';
import Order from 'pages/Order/Order';

// const Contact = lazy(() => import('../pages/Contact/Contact.js'));
// const Gallery = lazy(() => import('../pages/Gallery/Gallery.js'));
// const Order = lazy(() => import('../pages/Order/Order.js'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="order" element={<Order />} />
          <Route path="order:id" element={<Order />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
