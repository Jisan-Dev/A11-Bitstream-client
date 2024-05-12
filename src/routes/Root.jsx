import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Outlet, ScrollRestoration } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <ScrollRestoration />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
