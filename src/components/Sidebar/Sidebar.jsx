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
                <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
                    <MdSpaceDashboard size={30} />
                </NavLink>
                <NavLink to="calendrier" className={css.item} title={"Calendrier"}>
                    <AiFillCalendar size={30} />
                </NavLink>
                <NavLink to="tache" className={css.item} title={"Tâche"}>
                    <FaTasks size={30} />
                </NavLink>
                <NavLink to="utilisateur" className={css.item} title={"Utilisateurs"}>
                    <AiOutlineTable size={30} />
                </NavLink>
            </div>

        </div>
    );
};

export default Sidebar;