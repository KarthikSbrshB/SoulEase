import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import './tracker.css';

const Tracker = () => {
  const [key, setKey] = useState(0); // Key to force remounting of the Line component

  const stressData = [65, 59, 80, 81, 56, 55, 40];
  const sleepData = [45, 67, 72, 68, 78, 80, 75];
  const activityData = [20, 30, 40, 35, 45, 50, 55];

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Stress Level',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: stressData
      },
      {
        label: 'Sleep Quality',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,99,132,0.4)',
        borderColor: 'rgba(255,99,132,1)',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255,99,132,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: sleepData
      },
      {
        label: 'Activity Level',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(255,206,86,0.4)',
        borderColor: 'rgba(255,206,86,1)',
        borderCapStyle: 'round',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(255,206,86,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(255,206,86,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: activityData
      }
    ]
  };

  const resetChart = () => {
    setKey(prevKey => prevKey + 1); // Increment key to force remounting
  };

  return (
    <div className="progress-container">
      <h1>Stress Assessment & Mood Exercise Suggestions</h1>
      <div className="chart-container" key={key}>
        <Line data={data} />
      </div>
      <button onClick={resetChart}>Reset Chart</button>
    </div>
  );
}

export default Tracker;