import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OrderTracker, { OrderStatus } from '@/components/OrderTracker';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const orderStages: OrderStatus[] = ['confirmed', 'preparing', 'on-its-way', 'delivered'];

const OrderTrackingPage = () => {
  console.log('OrderTrackingPage loaded');

  const [status, setStatus] = useState<OrderStatus>('confirmed');

  useEffect(() => {
    // Simulate the order progressing through the stages
    const currentStageIndex = orderStages.indexOf(status);
    if (currentStageIndex < orderStages.length - 1) {
      const timer = setTimeout(() => {
        setStatus(orderStages[currentStageIndex + 1]);
      }, 4000); // Move to the next stage every 4 seconds

      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [status]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Order Tracker */}
          <div className="lg:col-span-2">
            <OrderTracker currentStatus={status} orderId="FRESH-8675309" />
          </div>

          {/* Live Map View */}
          <div className="lg:col-span-3">
            <Card className="shadow-md h-full">
              <CardHeader>
                <CardTitle>Live Rider Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Follow your rider in real-time as they make their way to you.
                </p>
                <div className="aspect-video bg-gray-200 rounded-md overflow-hidden">
                  <img 
                    src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/new-features-for-google-maps.max-1000x1000.png" 
                    alt="Live map view of a delivery route"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTrackingPage;