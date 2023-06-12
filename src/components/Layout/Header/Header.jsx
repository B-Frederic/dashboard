// React
import { Outlet } from "react-router-dom";
// Style
import css from "./Header.module.css";
// Moment
import moment from "moment/moment";
import "moment/locale/fr";
// Components
import Sidebar from "../../Sidebar/Sidebar";


const Header = () => {

  function charFirst(a) {
    return (a + "").charAt(0).toUpperCase() + a.substr(1);
  }

  return (
    <div className={css.container}>
      <div>
        <Sidebar />
      </div>
      <div className={css.dashboard}>
        <div className={css.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={css.header}>
          <span>{charFirst(moment().format("dddd Do MMM YYYY"))}</span>
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

export default Header;
