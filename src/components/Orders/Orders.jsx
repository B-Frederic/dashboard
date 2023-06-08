// Style
import css from "./Orders.module.css";
// Data
import { groupNumber, ordersData } from "../../data/data";
// Components
import OrdersPieChart from "../OrdersPieChart/OrdersPieChart";

const Orders = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src="./assets/img/logo.png" alt="logo" />
                <span>Ventes du jour</span>
            </div>
            <div className={`${css.stat} grey-container`}>
                <span>Montant</span>
                <span>{groupNumber(4560)} €</span>
            </div>
            <div className={css.orders}>
                {
                    ordersData.map((item, index) => (
                        <div className={css.order} key={index}>
                            <div>
                                <span>{item.name}</span>
                                <span>{item.change} €</span>
                            </div>
                            <div>
                                <span>{item.type}</span>
                                <span>Articles : {item.items}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={css.orderChart}>
                <span>Graphiques des ventes</span>
                <OrdersPieChart />
            </div>
        </div>
    );
};

export default Orders;