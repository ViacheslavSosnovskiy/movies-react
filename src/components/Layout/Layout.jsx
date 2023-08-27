import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {RotatingLines} from 'react-loader-spinner'
import { Main } from "./Layout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Layout = () => {
  return (
    <>
      <Header />
        <Main>
          <Suspense fallback={<RotatingLines strokeColor="white" />}>
            <Outlet />
          </Suspense>
        </Main>
      <Footer />
    </>
  );
};

export default Layout;
