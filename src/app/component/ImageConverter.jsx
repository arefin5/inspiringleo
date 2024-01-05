"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageConverter = ({ id, onBase64Data }) => {
  const [base64Data, setBase64Data] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await axios.get(`/images/${id}`);
          // console.log('GET request response:', response.data);

          setBase64Data(response.data.url);
          onBase64Data(response.data.url); // Pass the base64Data to the parent component
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, onBase64Data]);

  // This component doesn't render anything directly
  return null;
};

export default ImageConverter;
