import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { fakerDE as faker } from "@faker-js/faker";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export default function LineChart() {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
                position: "top" as const,
            },
            title: {
                display: false,
                text: "Chart.js Line Chart",
            },
        },
    };

    const labels = ["January", "February", "March", "April", "May", "June", "July"];

    const data = {
        labels,
        datasets: [
            {
                label: "Dataset 2",
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: "rgb(53, 162, 235)",
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };
    return <Line className="m-auto h-full w-full" options={options} data={data} />;
}
