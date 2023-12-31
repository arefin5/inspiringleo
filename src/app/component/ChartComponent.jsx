"use client"
import ChartTable from "./ChartTable"
import React, { useState, useEffect } from 'react';

const ChartComponent = () => {
    const [jsonData, setJsonData] = useState(null);
  
    useEffect(() => {
      fetch('../data.json')
        .then((response) => response.json())
        .then((data) => {
          setJsonData(data.data); // Assuming the data is an array inside the 'data' property
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);
    return (
      <div>
        <h1 className="text-center">Hiragana</h1>
        {jsonData ? (
          <ChartTable jsonData={jsonData} />
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  };
  
  export default ChartComponent;