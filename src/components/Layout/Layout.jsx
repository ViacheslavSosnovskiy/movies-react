import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Main } from "./Layout.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Spinner from "../Spinner/Spinner";


const Layout = () => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <Header />
        <Main>
          <Suspense fallback={<Spinner isLoading={isLoading}/>}>
            <Outlet />
          </Suspense>
        </Main>
      <Footer />
    </>
  );
};

export default Layout;
