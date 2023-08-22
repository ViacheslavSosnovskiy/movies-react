import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import {RotatingLines} from 'react-loader-spinner'

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<RotatingLines strokeColor="white" />}>
          <Outlet />
        </Suspense>
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
