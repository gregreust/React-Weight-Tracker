import React, { useState, useEffect } from 'react';
import {Chart} from 'react-google-charts';

const EntriesChartTracker  = (props) => {

    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        //using map to turn each entry into a mini array to put into chart data
        let tempChartData = props.parentEntries.map(entry =>{
            return [entry.date, entry.weight];
        });          
        setChartData(tempChartData);
    }, [props.parentEntries])    //tells use effect to run again if more entries 

    return (  
        <Chart chartType="LineChart"
        data={[["Date", "Weight"], ...chartData]}
        width="100%"
        height="400px"
        />
    );
}
 
export default EntriesChartTracker;