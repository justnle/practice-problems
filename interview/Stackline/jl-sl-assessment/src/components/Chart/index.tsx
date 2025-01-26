import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { ProductData } from '@services/dataTypes';

type SalesLineChartProps = {
    data: ProductData['sales'];
};

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top' as const
        },
        title: {
            display: true,
            text: 'Monthly Retail Sales'
        }
    }
};

const SalesLineChart: React.FC<SalesLineChartProps> = ({ data }) => {
    const monthlySalesMap = data.reduce((acc, entry) => {
        const date = new Date(`${entry.weekEnding}T00:00:00Z`);

        const monthNames = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ];

        const monthYear = `${monthNames[date.getUTCMonth()]}`;

        acc[monthYear] = {
            retailSales: (acc[monthYear]?.retailSales || 0) + entry.retailSales,
            retailerMargin:
                (acc[monthYear]?.retailerMargin || 0) + entry.retailerMargin,
            wholesaleSales:
                (acc[monthYear]?.wholesaleSales || 0) + entry.wholesaleSales
        };

        return acc;
    }, {} as Record<string, { retailerMargin: number; retailSales: number; wholesaleSales: number }>);

    const sortedMonths = Object.keys(monthlySalesMap).sort((a, b) => {
        const dateA = new Date(a);
        const dateB = new Date(b);

        return dateA.getTime() - dateB.getTime();
    });

    const sortedRetailSales = sortedMonths.map(
        (month) => monthlySalesMap[month].retailSales
    );

    const sortedWholesaleSales = sortedMonths.map(
        (month) => monthlySalesMap[month].wholesaleSales
    );

    const salesChartData = {
        labels: sortedMonths,
        datasets: [
            {
                label: 'Retail Sales',
                data: sortedRetailSales,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.4
            },
            {
                label: 'Wholesale Sales',
                data: sortedWholesaleSales,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                tension: 0.4
            }
        ]
    };

    return (
        <div className="h-full w-full">
            <Line data={salesChartData} options={chartOptions} />
        </div>
    );
};

export default SalesLineChart;
