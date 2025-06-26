import React, { useState, useEffect } from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page-specific Components
import CuisineFilter, { Cuisine } from '@/components/CuisineFilter';
import RestaurantCard from '@/components/RestaurantCard';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Icons
import { Search } from 'lucide-react';

// --- MOCK DATA ---
const mockCuisines: Cuisine[] = [
  { name: 'Pizza' },
  { name: 'Burgers' },
  { name: 'Italian' },
  { name: 'Sushi' },
  { name: 'Mexican' },
  { name: 'Chinese' },
  { name: 'Indian' },
];

const mockRestaurants = [
  {
    slug: 'bella-italia',
    name: 'Bella Italia Trattoria',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop',
    cuisineTypes: ['Italian', 'Pizza'],
    rating: 4.5,
    deliveryTime: '25-35 min',
  },
  {
    slug: 'burger-bliss',
    name: 'Burger Bliss',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop',
    cuisineTypes: ['Burgers', 'American'],
    rating: 4.7,
    deliveryTime: '20-30 min',
  },
  {
    slug: 'sushi-zen',
    name: 'Sushi Zen',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop',
    cuisineTypes: ['Sushi', 'Japanese'],
    rating: 4.8,
    deliveryTime: '30-40 min',
  },
  {
    slug: 'taco-fiesta',
    name: 'Taco Fiesta',
    imageUrl: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=2071&auto=format&fit=crop',
    cuisineTypes: ['Mexican'],
    rating: 4.4,
    deliveryTime: '25-35 min',
  },
  {
    slug: 'golden-dragon',
    name: 'Golden Dragon',
    imageUrl: 'https://images.unsplash.com/photo-1585851336109-bf1246f63341?q=80&w=2070&auto=format&fit=crop',
    cuisineTypes: ['Chinese'],
    rating: 4.3,
    deliveryTime: '35-45 min',
  },
  {
    slug: 'curry-house',
    name: 'The Curry House',
    imageUrl: 'https://images.unsplash.com/photo-1565557623262-b9a72063a604?q=80&w=1935&auto=format&fit=crop',
    cuisineTypes: ['Indian'],
    rating: 4.6,
    deliveryTime: '30-40 min',
  },
    {
    slug: 'pizza-palace',
    name: 'Pizza Palace',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop',
    cuisineTypes: ['Pizza', 'Italian'],
    rating: 4.2,
    deliveryTime: '25-35 min',
  },
  {
    slug: 'the-grill-sergeant',
    name: 'The Grill Sergeant',
    imageUrl: 'https://images.unsplash.com/photo-1626082903338-a1e389531825?q=80&w=2070&auto=format&fit=crop',
    cuisineTypes: ['Burgers', 'BBQ'],
    rating: 4.5,
    deliveryTime: '30-40 min',
  },
];


const HomePage = () => {
  console.log('HomePage loaded');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState(mockRestaurants);

  useEffect(() => {
    let restaurants = mockRestaurants;

    // Filter by search term
    if (searchTerm) {
      restaurants = restaurants.filter(r =>
        r.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by selected cuisines
    if (selectedCuisines.length > 0) {
      restaurants = restaurants.filter(r =>
        r.cuisineTypes.some(cuisine => selectedCuisines.includes(cuisine))
      );
    }

    setFilteredRestaurants(restaurants);
  }, [searchTerm, selectedCuisines]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-muted/20 py-12 md:py-20 text-center border-b">
          <div className="container">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">
              Delicious food, delivered to you
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find your next favorite meal from our curated selection of local restaurants.
            </p>
            <div className="max-w-xl mx-auto flex gap-2">
              <div className="relative flex-grow">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                 <Input
                  type="search"
                  placeholder="What are you craving?"
                  className="w-full pl-10 h-12 text-base"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button size="lg" className="h-12">Search</Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="container py-8">
          <CuisineFilter
            cuisines={mockCuisines}
            selectedCuisines={selectedCuisines}
            onSelectionChange={setSelectedCuisines}
          />
          
          <h2 className="text-2xl font-bold tracking-tight mt-6 mb-4">
            {selectedCuisines.length > 0 ? `${selectedCuisines.join(', ')} Restaurants` : 'All Restaurants'}
          </h2>

          {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.slug}
                  slug={restaurant.slug}
                  name={restaurant.name}
                  imageUrl={restaurant.imageUrl}
                  cuisineTypes={restaurant.cuisineTypes}
                  rating={restaurant.rating}
                  deliveryTime={restaurant.deliveryTime}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No restaurants found. Try adjusting your search or filters.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;