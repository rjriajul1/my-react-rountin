import React from 'react';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
const students = [
    { id: 1, name: "Alice", math: 85, english: 78, science: 92, total: 255, average: 85 },
    { id: 2, name: "Bob", math: 74, english: 81, science: 88, total: 243, average: 81 },
    { id: 3, name: "Charlie", math: 90, english: 85, science: 91, total: 266, average: 88.67 },
    { id: 4, name: "David", math: 67, english: 72, science: 70, total: 209, average: 69.67 },
    { id: 5, name: "Eva", math: 95, english: 89, science: 94, total: 278, average: 92.67 },
    { id: 6, name: "Frank", math: 56, english: 65, science: 60, total: 181, average: 60.33 },
    { id: 7, name: "Grace", math: 82, english: 77, science: 85, total: 244, average: 81.33 },
    { id: 8, name: "Hannah", math: 88, english: 90, science: 87, total: 265, average: 88.33 },
    { id: 9, name: "Ian", math: 70, english: 73, science: 75, total: 218, average: 72.67 },
    { id: 10, name: "Jane", math: 91, english: 88, science: 93, total: 272, average: 90.67 },
  ];
  
  
  

const ResultChart = () => {
    return (
        <div className='md:flex flex-wrap justify-center '>

            <BarChart width={500} height={500} data={students}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey={'math'}  barSize={40} fill='blue'></Bar>
                <Bar dataKey={'english'} barSize={40} fill='red'></Bar>
                <Bar dataKey={'science'} barSize={40} fill='green'></Bar>
            </BarChart>
            <LineChart width={500} height={500} data={students}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Line dataKey={"math"} stroke='red'></Line>
                <Line dataKey={"english"} ></Line>
                <Line dataKey={"science"} stroke='blue' ></Line>
            </LineChart>

     
          <PieChart width={700} height={300}>
                <Tooltip></Tooltip>
                <Pie data={students}  dataKey={'math'} outerRadius={60} cy="50%" cx="50%" fill='red'></Pie>
                <Pie data={students} dataKey="math" cx="50%" cy="50%" innerRadius={70} fill="#82ca9d" label />


            </PieChart>
          
        </div>
    );
};

export default ResultChart;