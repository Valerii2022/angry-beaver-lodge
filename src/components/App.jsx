import { Routes, Route, Navigate } from 'react-router-dom';
import Home from 'pages/Home/HomePage';
import Layout from './Layout/Layout';
import Gallery from 'pages/Gallery/Gallery';
import Contact from 'pages/Contact/Contact';
import Order from 'pages/Order/Order';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="order" element={<Order />} />
          <Route path="order/:id" element={<Order />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
