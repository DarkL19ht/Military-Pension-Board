import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ["5% Failed", "15% Pending", "85% Completed"],
    datasets: [
        {
            label: "# of Pensioners",
            data: [10, 20, 70],
            backgroundColor: [
                "rgba(233, 0, 0, 0.2)",

                "rgba(233, 252, 86, 0.2)",
                "rgba(0, 115, 0, 0.2)",
            ],
            borderColor: [
                "rgba(233, 0, 0, 1)",

                "rgba(233, 252, 86, 1)",
                "rgba(0, 115, 0, 1)",
            ],
            borderWidth: 1,
        },
    ],
};

export function PieChart() {
    return <Pie className="mx-auto md:mx-1" data={data} />;
}
