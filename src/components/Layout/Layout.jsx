import css from './Layout.module.css';
import { Suspense } from 'react';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className={css.container}>
      <Header />
      <main className={css.content}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
