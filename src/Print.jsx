import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Print() {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/prt_test.htm', {
          params: {
            content: "Welcome to use the impact and thermal printer manufactured by professional POS receipt printer company!",
            Send: "Print Test"
          }
        });
        setResponseData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Printer Test Response:</h1>
      {responseData && (
        <pre>{JSON.stringify(responseData, null, 2)}</pre>
      )}
    </div>
  );
}

export default Print;
