// Style
import css from "./Statistics.module.css";
// Icons
import { BsArrowUpShort } from "react-icons/bs";
// Data
import { groupNumber } from "../../data/data";
import StatisticsChart from "../StatisticsChart/StatisticsChart";
// Components


const Statistics = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Aperçu des statistiques</span>

            <div className={`${css.cards} grey-container`}>
                <div>
                    <div className={css.arrowIcon}>
                        <BsArrowUpShort />
                    </div>
                    <div className={css.card}>
                        <span>Article du mois</span>
                        <span>Bureau</span>
                    </div>
                </div>
                <div className={css.card}>
                    <span>Articles</span>
                    <span>{groupNumber(560)}</span>
                </div>
                <div className={css.card}>
                    <span>Profits</span>
                    <span>{groupNumber(370000)}€</span>
                </div>
                <div className={css.card}>
                    <span>Moyenne</span>
                    <span>{groupNumber(20000)}€</span>
                </div>
            </div>

            <StatisticsChart />

        </div>
    );
};

export default Statistics;