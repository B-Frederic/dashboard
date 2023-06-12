// Style
import css from "./Dashboard.module.css";
// Data
import { cardsData, groupNumber } from "../../data/data";
// Components
import Statistics from "../../components/Statistics/Statistics";
import Orders from "../../components/Orders/Orders";


const Dashboard = () => {
    return (
        <div className={css.container}>
            <div className={css.dashboard}>
                <div className={`${css.dashboardHead} theme-container`}>
                    <div className={css.head}>
                        <span>Dashboard</span>
                        <div className={css.durationButton}>
                            <select>
                                <option value="">1 semaine</option>
                                <option value="">1 mois</option>
                                <option value="">1 an</option>
                            </select>
                        </div>
                    </div>
                    <div className={css.cards}>
                        {
                            cardsData.map((item, index) => (
                                <div className={css.card} key={index}>
                                    <div className={css.cardHead}>
                                        <span>{item.title}</span>
                                        <span>+{item.change}</span>
                                    </div>
                                    <div className={css.cardAmount}>
                                        <span>{groupNumber(item.amount)}</span>
                                        <span>€</span>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
               <Statistics /> 
            </div>
            <Orders />        
        </div>
    );
};

export default Dashboard;