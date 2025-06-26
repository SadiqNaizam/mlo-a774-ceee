import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PackageCheck, ChefHat, Bike, PartyPopper } from 'lucide-react';
import { cn } from "@/lib/utils";

// Define the possible statuses for type safety and component props
export type OrderStatus = 'confirmed' | 'preparing' | 'on-its-way' | 'delivered';

interface OrderTrackerProps {
  currentStatus: OrderStatus;
  orderId?: string;
}

// Define the steps and their associated data for easy mapping
const orderSteps = [
  { id: 'confirmed' as OrderStatus, label: 'Order Confirmed', icon: PackageCheck, description: 'Your order has been received.' },
  { id: 'preparing' as OrderStatus, label: 'Preparing Food', icon: ChefHat, description: 'The restaurant is preparing your meal.' },
  { id: 'on-its-way' as OrderStatus, label: 'On Its Way', icon: Bike, description: 'Your rider is on the way to you.' },
  { id: 'delivered' as OrderStatus, label: 'Delivered', icon: PartyPopper, description: 'Enjoy your meal!' },
];

const OrderTracker: React.FC<OrderTrackerProps> = ({ currentStatus, orderId = 'FRESH-123XYZ' }) => {
  console.log('OrderTracker loaded with status:', currentStatus);

  const currentStepIndex = orderSteps.findIndex(step => step.id === currentStatus);

  return (
    <Card className="w-full max-w-lg mx-auto shadow-md">
      <CardHeader>
        <CardTitle className="text-2xl">Tracking Your Order</CardTitle>
        {orderId && <CardDescription>Order #{orderId}</CardDescription>}
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col">
          {orderSteps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;
            const isLastStep = index === orderSteps.length - 1;

            return (
              <div key={step.id} className="flex">
                <div className="flex flex-col items-center mr-6">
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-300",
                      isCompleted ? "bg-green-600 border-green-600 text-white" : "",
                      isCurrent ? "bg-blue-600 border-blue-600 text-white animate-pulse" : "",
                      !isCompleted && !isCurrent ? "bg-gray-100 border-gray-300 text-gray-400" : ""
                    )}
                  >
                    <step.icon className="h-6 w-6" />
                  </div>
                  {!isLastStep && (
                    <div
                      className={cn(
                        "w-0.5 flex-1 mt-2",
                        isCompleted ? "bg-green-600" : "bg-gray-300"
                      )}
                    />
                  )}
                </div>
                <div className={cn("pt-2 pb-8", isLastStep ? "pb-2" : "")}>
                  <p className={cn(
                    "text-lg font-semibold",
                     isCompleted || isCurrent ? "text-gray-900" : "text-gray-500"
                  )}>
                    {step.label}
                  </p>
                  <p className="text-sm text-gray-500">
                    {isCurrent ? step.description : ''}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderTracker;