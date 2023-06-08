// React
import { Navigate, Outlet, useLocation } from "react-router-dom";
// Style
import css from "./Layout.module.css";
// Moment
import moment from "moment/moment";
import 'moment/locale/fr';
// Icon
import { BiSearch } from "react-icons/bi";
// Components
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {

    const {pathname} = useLocation();

    return (
        <div className={css.container}>
            <div>
                <Sidebar />

                {/* Default route */}
                {pathname === "/" && <Navigate to="/dashboard" />}
            </div>
            <div className={css.dashboard}>
                <div className={css.topBaseGradients}>
                    <div className="gradient-red"></div>
                    <div className="gradient-orange"></div>
                    <div className="gradient-blue"></div>
                </div>

                <div className={css.header}>
                    <span>{moment().format("dddd, Do MMM YYYY")}</span>
                    <div className={css.searchBar}>
                        <BiSearch size={20} />
                        <input type="text" placeholder="Recherche" />
                    </div>
                    <div className={css.profile}>
                        <img src="./assets/img/moi.png" alt="image utilisateur" />
                        <div className={css.info}>
                            <span>Frédéric B.</span>
                        </div>
                    </div>
                </div>
                <div className={css.content}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;