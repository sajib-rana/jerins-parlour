import { Outlet, useLocation } from "react-router-dom";
import Header from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";


const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login');
    return (
        <div>
            {noHeaderFooter || <Header></Header>}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;