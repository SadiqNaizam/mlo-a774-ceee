import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Apple, Palmtree, Pizza } from 'lucide-react';

const orderItems = [
  { id: 1, name: 'Pepperoni Pizza', quantity: 1, price: 14.99 },
  { id: 2, name: 'Garlic Bread', quantity: 2, price: 4.50 },
  { id: 3, name: 'Soda Can', quantity: 2, price: 1.50 },
];

const CheckoutPage = () => {
  console.log('CheckoutPage loaded');
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // In a real app, this would trigger payment processing and order creation.
    // On success, we navigate to the tracking page.
    console.log('Placing order...');
    navigate('/order-tracking'); // Route from App.tsx
  };
  
  const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 5.00;
  const total = subtotal + deliveryFee;

  return (
    <div className="flex flex-col min-h-screen bg-muted/20">
      <Header />
      <main className="flex-1 py-8">
        <div className="container">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Checkout</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left side: Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Delivery Address Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Delivery Address</CardTitle>
                  <CardDescription>Enter the address where you'd like your order delivered.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Jane Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="(123) 456-7890" />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" placeholder="123 Main St" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="Anytown" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zip">Postal Code</Label>
                    <Input id="zip" placeholder="12345" />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Select a payment option.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup defaultValue="credit-card" className="space-y-4">
                    <Label htmlFor="credit-card" className="flex items-center gap-4 p-4 border rounded-md cursor-pointer hover:bg-muted/50 has-[input:checked]:border-primary">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <CreditCard className="h-6 w-6" />
                      <span>Credit or Debit Card</span>
                    </Label>
                    <Label htmlFor="paypal" className="flex items-center gap-4 p-4 border rounded-md cursor-pointer hover:bg-muted/50 has-[input:checked]:border-primary">
                      <RadioGroupItem value="paypal" id="paypal" />
                      <Palmtree className="h-6 w-6" /> {/* Placeholder for PayPal icon */}
                      <span>PayPal</span>
                    </Label>
                    <Label htmlFor="apple-pay" className="flex items-center gap-4 p-4 border rounded-md cursor-pointer hover:bg-muted/50 has-[input:checked]:border-primary">
                      <RadioGroupItem value="apple-pay" id="apple-pay" />
                      <Apple className="h-6 w-6" />
                      <span>Apple Pay</span>
                    </Label>
                  </RadioGroup>
                </CardContent>
              </Card>
            </div>

            {/* Right side: Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {orderItems.map((item) => (
                      <li key={item.id} className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2">
                          <Pizza className="h-4 w-4 text-muted-foreground" />
                          <span>{item.name} x {item.quantity}</span>
                        </div>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Delivery Fee</span>
                      <span>${deliveryFee.toFixed(2)}</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="lg" className="w-full" onClick={handlePlaceOrder}>
                    Place Order
                  </Button>
                </CardFooter>
              </Card>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;