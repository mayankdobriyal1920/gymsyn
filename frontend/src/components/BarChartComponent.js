import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },
    responsive: true,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
        },
    },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export const data = {
    labels,
    datasets: [
        {
            data: labels.map(() => Math.floor(Math.random()*90) + 10),
            backgroundColor: '#4bc9ffcf',
            borderRadius:5,
        },
        {
            data: labels.map(() => Math.floor(Math.random()*90) + 10),
            backgroundColor: '#ffe500c7',
            borderRadius:5,
        },
        {
            data: labels.map(() => Math.floor(Math.random()*90) + 10),
            backgroundColor: '#6fec5bd1',
            borderRadius:5,
        },
        {
            data: labels.map(() => Math.floor(Math.random()*90) + 10),
            backgroundColor: '#ff3d00c2',
            borderRadius:5,
        },

    ],
};

export function BarChartComponent() {
    return <Bar options={options} data={data} />;
}
