"use client";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface TimelineItem {
  label: string;
  completed: boolean;
}

interface Order {
  id: string;
  status: string;
  price: number;
  productImage: string;
  productName: string;
  timeline: TimelineItem[];
}

// Données fictives de commandes
const mockOrders: Order[] = [
  {
    id: "1",
    status: "Processing",
    price: 100,
    productImage: "https://placehold.co/600x400",
    productName: "Product Name 1",
    timeline: [
      { label: "Order Placed", completed: true },
      { label: "Order Confirmed", completed: true },
      { label: "Order Shipped", completed: false },
      { label: "Order Delivered", completed: false },
    ],
  },
  {
    id: "2",
    status: "Shipped",
    price: 200,
    productImage: "https://placehold.co/600x400",
    productName: "Product Name 2",
    timeline: [
      { label: "Order Placed", completed: true },
      { label: "Order Confirmed", completed: true },
      { label: "Order Shipped", completed: true },
      { label: "Order Delivered", completed: false },
    ],
  },
  // Ajoutez d'autres commandes fictives ici
];

function OrderTrackingDashboard() {


  return (
    <div className="container mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Order Tracking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold">Order ID: {mockOrders[0].id}</h2>
              <Badge>{mockOrders[0].status}</Badge>
            </div>
            <div>
              <h2 className="text-xl font-bold">Price: ${mockOrders[0].price}</h2>
            </div>
          </div>
          <div className="flex justify-center items-center mb-4">
            <Image
              src="https://placehold.co/600x400"
              alt="Product"
              width={600}
              height={400}
              className="w-32 h-32 object-cover"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold">{mockOrders[0].productName}</h3>
            </div>
          </div>
          <div className="relative pl-8 bg-red-500 items-center w-full flex flex-col">
            {mockOrders[0].timeline.map((item, index) => (
              <div key={index} className="mb-8 flex items-center">
                <div
                  className={`absolute left-0 h-4 w-4 rounded-full ${
                    item.completed ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
                <div className="ml-8">
                  <p
                    className={`text-sm ${
                      item.completed ? "text-green-500" : "text-gray-500"
                    }`}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            ))}
            <div className="absolute left-1 top-0 h-full w-0.5 bg-gray-300"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderTrackingDashboard;
