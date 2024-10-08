import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.container}>
      <div className={css.headerWrap}>
        <Header />
      </div>
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
