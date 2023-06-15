import './Chart.css';
import { ChartBar } from './ChartBar';

export const Chart = ({dataPoints}) => {

    const valueArray = dataPoints.map((dataPoint) => dataPoint.value)
    const maxValue = Math.max(...valueArray);

    console.log(dataPoints)

    return <div className='chart'>
        {dataPoints.map((dataPoint) => (
            <ChartBar 
                key={dataPoint.label} 
                value={dataPoint.value} 
                maxValue={maxValue} 
                label={dataPoint.label}
            />
        ))}
    </div>
}