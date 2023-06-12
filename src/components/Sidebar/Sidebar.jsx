// Style
import css from "./Sidebar.module.css";
// Icons
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={css.container}>
            <img src="./assets/img/logo.png" alt="logo" className={css.logo} />

            <div className={css.menu}>
                <NavLink to="/" className={css.item}>
                    <MdSpaceDashboard size={30} />
                </NavLink>
                <NavLink to="/calendrier" className={css.item}>
                    <AiFillCalendar size={30} />
                </NavLink>
                <NavLink to="/taches" className={css.item}>
                    <FaTasks size={30} />
                </NavLink>
                <NavLink to="/utilisateurs" className={css.item}>
                    <AiOutlineTable size={30} />
                </NavLink>
            </div>

        </div>
    );
};

export default Sidebar;