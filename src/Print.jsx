import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Print() {
  const [orderCreated, setOrderCreated] = useState(false);
  const [printResponse, setPrintResponse] = useState(null);
  const [orderData, setOrderData] = useState(null);

  // Define sample order data
  const sampleOrderData = {
    orderId: 12345,
    customerName: 'John Doe',
    items: [
      { id: 1, name: 'Item 1', quantity: 2, price: 10 },
      { id: 2, name: 'Item 2', quantity: 1, price: 20 },
      { id: 3, name: 'Item 2', quantity: 1, price: 20 },
      { id: 4, name: 'Item 2', quantity: 1, price: 20 },
      { id: 5, name: 'Item 2', quantity: 1, price: 20 },
      { id: 6, name: 'Item 2', quantity: 1, price: 20 },
      { id: 7, name: 'Item 2', quantity: 1, price: 20 },
      { id: 8, name: 'Item 2', quantity: 1, price: 20 },
      { id: 9, name: 'Item 2', quantity: 1, price: 20 },
      { id: 10, name: 'Item 2', quantity: 1, price: 20 },
      { id: 11, name: 'Item 2', quantity: 1, price: 20 },
      { id: 12, name: 'Item 2', quantity: 1, price: 20 },
      { id: 13, name: 'Item 2', quantity: 1, price: 20 },
      { id: 14, name: 'Item 2', quantity: 1, price: 20 },
      { id: 15, name: 'Item 2', quantity: 1, price: 20 },
      { id: 16, name: 'Item 2', quantity: 1, price: 20 },
      { id: 17, name: 'Item 2', quantity: 1, price: 20 },
      { id: 18, name: 'Item 2', quantity: 1, price: 20 },
      { id: 19, name: 'Item 2', quantity: 1, price: 20 },
      { id: 20, name: 'Item 2', quantity: 1, price: 20 },
      { id: 21, name: 'Item 2', quantity: 1, price: 20 },
      { id: 22, name: 'Item 2', quantity: 1, price: 20 },
      { id: 23, name: 'Item 2', quantity: 1, price: 20 },
      { id: 24, name: 'Item 2', quantity: 1, price: 20 },
    ],
    total: 40,
  };

  const createOrder = async () => {
    try {
      // Simulate order creation (you can replace this with actual order creation logic)
      // For demonstration purposes, we're just setting orderCreated to true and storing sample order data
      setOrderCreated(true);
      setOrderData(sampleOrderData);
    } catch (error) {
      console.error('Error creating order:', error);
    }
  };

  const handlePrint = async () => {
    try {
      // If order is not created, return
      if (!orderCreated) {
        console.error('Order not created yet');
        return;
      }

      const response = await axios.get('http://192.168.0.101/prt_test.htm', {
        params: {
          content: generatePrintContent(orderData),
          Send: "Print Test"
        }
      });
      setPrintResponse(response.data);
    } catch (error) {
      console.error('Error printing:', error);
    }
  };

  // Function to generate content for printing
  const generatePrintContent = (orderData) => {
    if (!orderData) return '';

    let content = `Order ID: ${orderData.orderId}\n`;
    content += `Customer Name: ${orderData.customerName}\n\n`;
    content += 'Items:\n';
    orderData.items.forEach(item => {
      content += `${item.name} x ${item.quantity} - $${item.price}\n`;
    });
    content += `\nTotal: $${orderData.total}`;

    return content;
  };

  return (
    <div>
      <h1>Printer Test</h1>
      <button onClick={createOrder}>Create Order</button>
      <button onClick={handlePrint} disabled={!orderCreated}>Print</button>
      {printResponse && (
        <div>
          <h2>Printing Response:</h2>
          <pre>{JSON.stringify(printResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Print;
