interface OrderProps {
    orderId: string;
    orderDate: string;
    orderAmount: number;
    transactionFees: number;
  }
export const allOrders:OrderProps[] = [
    {
      orderId: "123",
      orderDate: "2023-04-10",
      orderAmount: 150.99,
      transactionFees: 2.5,
    },
    {
      orderId: "124",
      orderDate: "2023-04-11",
      orderAmount: 199.5,
      transactionFees: 175,
    },
    {
      orderId: "127",
      orderDate: "2023-04-11",
      orderAmount: 995,
      transactionFees: 275,
    },
    {
      orderId: "128",
      orderDate: "2023-05-13",
      orderAmount: 375,
      transactionFees: 480,
    },
    {
      orderId: "129",
      orderDate: "2023-04-21",
      orderAmount: 99.5,
      transactionFees: 895,
    },
    {
      orderId: "329",
      orderDate: "2023-04-21",
      orderAmount: 200,
      transactionFees: 5,
    },
  
   
  ];