import React from 'react';

// Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MenuItem from '@/components/MenuItem';

// shadcn/ui Components
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Icons
import { Star, MapPin } from 'lucide-react';

// Placeholder Data
const restaurantData = {
  name: "The Gourmet Kitchen",
  address: "123 Culinary Lane, Foodie Town",
  rating: 4.5,
  reviewCount: 250,
  bannerUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
  avatarUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
};

const menuItems = [
  { id: 1, name: "Classic Cheeseburger", description: "Juicy beef patty with melted cheddar, lettuce, tomato, and our special sauce.", price: 12.99 },
  { id: 2, name: "Margherita Pizza", description: "Fresh mozzarella, San Marzano tomatoes, and basil on a thin crust.", price: 15.50 },
  { id: 3, name: "Crispy Chicken Sandwich", description: "Fried chicken breast with pickles and spicy mayo on a brioche bun.", price: 13.75 },
  { id: 4, name: "Caesar Salad", description: "Crisp romaine lettuce, parmesan, croutons, and a creamy Caesar dressing.", price: 9.99 },
];

const reviews = [
    { id: 1, author: 'Jane Doe', rating: 5, comment: "Absolutely fantastic! The burger was one of the best I've ever had. Will be back for sure." },
    { id: 2, author: 'John Smith', rating: 4, comment: "Great food and friendly service. The pizza was delicious, but the wait was a bit long on a Friday night." },
    { id: 3, author: 'Emily White', rating: 5, comment: "I love this place! The chicken sandwich is to die for. Quick delivery too." },
];

const RestaurantPage = () => {
  console.log('RestaurantPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Banner Section */}
        <section className="h-48 md:h-64 bg-cover bg-center" style={{ backgroundImage: `url(${restaurantData.bannerUrl})` }}>
            {/* Empty banner for visual effect */}
        </section>

        {/* Restaurant Info Section */}
        <section className="container mx-auto px-4">
          <div className="relative -mt-16 sm:-mt-20 pb-8">
            <div className="bg-background rounded-lg shadow-lg p-6 flex flex-col sm:flex-row items-center gap-6">
                <Avatar className="h-24 w-24 sm:h-32 sm:w-32 border-4 border-background">
                    <AvatarImage src={restaurantData.avatarUrl} alt={restaurantData.name} />
                    <AvatarFallback>{restaurantData.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="text-center sm:text-left">
                    <h1 className="text-3xl font-bold text-gray-900">{restaurantData.name}</h1>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <p>{restaurantData.address}</p>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mt-2">
                        <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                        <span className="font-bold">{restaurantData.rating}</span>
                        <span className="text-sm text-muted-foreground">({restaurantData.reviewCount} reviews)</span>
                        <Badge variant="secondary" className="ml-2">Open</Badge>
                    </div>
                </div>
            </div>
          </div>
        </section>

        {/* Menu and Reviews Tabs */}
        <section className="container mx-auto px-4 pb-12">
            <Tabs defaultValue="menu" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="menu">Menu</TabsTrigger>
                    <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="menu" className="mt-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Our Menu</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {menuItems.map(item => (
                                <MenuItem key={item.id} {...item} />
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
                <TabsContent value="reviews" className="mt-6">
                     <Card>
                        <CardHeader>
                            <CardTitle>What People Are Saying</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {reviews.map(review => (
                                <div key={review.id} className="border-b pb-4 last:border-b-0">
                                    <div className="flex items-center mb-2">
                                        <div className="flex items-center">
                                            {[...Array(review.rating)].map((_, i) => (
                                                 <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                                            ))}
                                             {[...Array(5 - review.rating)].map((_, i) => (
                                                 <Star key={i} className="h-5 w-5 text-gray-300" />
                                            ))}
                                        </div>
                                        <p className="ml-4 font-semibold">{review.author}</p>
                                    </div>
                                    <p className="text-muted-foreground">{review.comment}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantPage;