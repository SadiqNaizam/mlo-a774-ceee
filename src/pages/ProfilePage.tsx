import React from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

// lucide-react Icons
import { User, MapPin, CreditCard, History, PlusCircle, Trash2 } from 'lucide-react';

// Placeholder data
const userProfile = {
  name: 'Alex Doe',
  email: 'alex.doe@example.com',
  phone: '123-456-7890',
};

const savedAddresses = [
  { id: 1, type: 'Home', address: '123 Main St, Anytown, USA 12345' },
  { id: 2, type: 'Work', address: '456 Business Ave, Workville, USA 67890' },
];

const paymentMethods = [
  { id: 1, type: 'Visa', last4: '4242', expiry: '12/26' },
  { id: 2, type: 'Mastercard', last4: '5555', expiry: '08/25' },
];

const orderHistory = [
    { id: 'FB98765', date: '2024-07-20', total: '$32.50', status: 'Delivered' as 'Delivered' | 'Processing' | 'Cancelled' },
    { id: 'FB87654', date: '2024-07-15', total: '$18.00', status: 'Delivered' as 'Delivered' | 'Processing' | 'Cancelled' },
    { id: 'FB76543', date: '2024-07-10', total: '$45.75', status: 'Cancelled' as 'Delivered' | 'Processing' | 'Cancelled' },
];

const ProfilePage = () => {
  console.log('ProfilePage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      <Header />
      <main className="flex-1 py-8 md:py-12">
        <div className="container max-w-4xl mx-auto px-4">
          <header className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Manage Your Account</h1>
            <p className="text-muted-foreground">Update your profile, manage settings, and view your order history.</p>
          </header>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="profile">
                <User className="mr-2 h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="addresses">
                <MapPin className="mr-2 h-4 w-4" />
                Addresses
              </TabsTrigger>
              <TabsTrigger value="payment">
                <CreditCard className="mr-2 h-4 w-4" />
                Payment
              </TabsTrigger>
              <TabsTrigger value="history">
                <History className="mr-2 h-4 w-4" />
                Order History
              </TabsTrigger>
            </TabsList>
            
            {/* Profile Information Tab */}
            <TabsContent value="profile" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your name, email, and phone number.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue={userProfile.name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" defaultValue={userProfile.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" defaultValue={userProfile.phone} />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Saved Addresses Tab */}
            <TabsContent value="addresses" className="mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Saved Addresses</CardTitle>
                    <CardDescription>Manage your delivery locations.</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Address
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {savedAddresses.map((item) => (
                    <div key={item.id} className="p-4 border rounded-lg flex items-center justify-between">
                      <div>
                        <p className="font-semibold">{item.type}</p>
                        <p className="text-sm text-muted-foreground">{item.address}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Payment Methods Tab */}
            <TabsContent value="payment" className="mt-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Payment Methods</CardTitle>
                        <CardDescription>Manage your saved cards.</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Add Card
                    </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                    {paymentMethods.map((item) => (
                        <div key={item.id} className="p-4 border rounded-lg flex items-center justify-between">
                            <div>
                                <p className="font-semibold">{item.type} ending in {item.last4}</p>
                                <p className="text-sm text-muted-foreground">Expires {item.expiry}</p>
                            </div>
                            <Button variant="ghost" size="icon">
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Order History Tab */}
            <TabsContent value="history" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>Review your past orders with FreshBites.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {orderHistory.map((order, index) => (
                        <React.Fragment key={order.id}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="font-semibold">Order #{order.id}</p>
                                    <p className="text-sm text-muted-foreground">{order.date}</p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold">{order.total}</p>
                                    <Badge variant={order.status === 'Delivered' ? 'default' : (order.status === 'Cancelled' ? 'destructive' : 'secondary')}>
                                        {order.status}
                                    </Badge>
                                </div>
                            </div>
                            {index < orderHistory.length - 1 && <Separator />}
                        </React.Fragment>
                    ))}
                </CardContent>
              </Card>
            </TabsContent>

          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;