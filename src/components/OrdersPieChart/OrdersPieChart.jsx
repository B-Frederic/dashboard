// Chart
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts";

const OrdersPieChart = () => {

    const option = {
        color: [
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: "#1158E2"
                },
                {
                    offset: 1,
                    color: "#42B5F2"
                }
            ]),
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: "#BC1FD7"
                },
                {
                    offset: 1,
                    color: "#7F1DD1"
                }
            ]),
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: "#E8A618"
                },
                {
                    offset: 1,
                    color: "#EB6B36"
                }
            ]),
            new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                    offset: 0,
                    color: "#D131BE"
                },
                {
                    offset: 1,
                    color: "#BF1575"
                }
            ])
        ],
        series: [
            {
                name: "Article",
                type: "pie", 
                radius: ["60%", "80%"],
                avoidLabelOverlap: false,
                itemStyle: {
                    borderRadius: 50,
                    boderColor: "black",
                    borderWidth: 5,
                },
                label: {
                    show: false,
                    position: "center",
                },
                emphasis: {
                    label: {
                        show: true,
                        fonSize: 20,
                        fontWeight: "bold"
                    }
                },
                data: [
                    {value: 2190, name: "Vente en ligne"},
                    {value: 735, name: "Vente en magasin"},
                    {value: 580, name: "Vente cadeau offert"},
                    {value: 484, name: "Vente carte cadeau"},
                ]
            }
        ]
    }

    return (
        <ReactECharts style={{height: 140, marginTop: "1rem"}} option={option} />
    );
};

export default OrdersPieChart;