import React, { use } from 'react';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const StudentsChart = ({promiseData}) => {
    const studentsData = use(promiseData)
    const studentsMarks = studentsData.data;
    console.log(studentsMarks);

    // data processing
    const marksChartData = studentsMarks.map(studentData=>{
        const student = {
            id: studentData.id,
            name:studentData.name,
            math:studentData.marks.math,
            english:studentData.marks.english,
            science:studentData.marks.science
            
        }
        const avg =( student.math +  student.english + student.science ) / 3;
        student.avg = avg;
        return student;
    })
    console.log(marksChartData);
    return (
        <div className='py-10'>
            <AreaChart width={500} height={300} data={marksChartData}>
            <XAxis dataKey='name'></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
            <Area dataKey={'math'} fill='green' stroke='blue' ></Area>
            <Area dataKey={'english'} fill='white' stroke='red' ></Area>
            </AreaChart>
        </div>
    );
};

export default StudentsChart;