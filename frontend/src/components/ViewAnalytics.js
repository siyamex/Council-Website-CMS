import React from 'react';
import { Line } from 'react-chartjs-2';

const ViewAnalytics = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Website Traffic',
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="view-analytics">
      <h2>Website Analytics</h2>
      <Line data={data} />
    </div>
  );
};

export default ViewAnalytics;