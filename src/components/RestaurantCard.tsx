import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Star, Clock } from 'lucide-react';

interface RestaurantCardProps {
  slug: string; // Unique identifier for the restaurant
  name: string;
  imageUrl: string;
  cuisineTypes: string[];
  rating: number;
  deliveryTime: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  slug,
  name,
  imageUrl,
  cuisineTypes,
  rating,
  deliveryTime
}) => {
  console.log(`RestaurantCard loaded for: ${name}`);

  // The App.tsx defines a static '/restaurant' route. This component links there.
  // In a real app, you might pass state via the link or use a dynamic route like '/restaurant/${slug}'.
  return (
    <Link to="/restaurant" state={{ restaurantSlug: slug }} className="block group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg">
      <Card className="w-full overflow-hidden transition-all duration-300 group-hover:shadow-xl h-full flex flex-col">
        <CardHeader className="p-0 border-b">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl || 'https://via.placeholder.com/400x225.png?text=FreshBites'}
              alt={`Image of ${name} restaurant`}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </CardHeader>
        <CardContent className="p-4 flex-grow flex flex-col">
          <div className="flex-grow">
            <h3 className="text-lg font-bold tracking-tight line-clamp-1">{name}</h3>
            <div className="flex flex-wrap gap-1 mt-2">
              {cuisineTypes.slice(0, 3).map((cuisine) => (
                <Badge key={cuisine} variant="secondary" className="font-normal">
                  {cuisine}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex items-center text-sm text-muted-foreground mt-4 pt-4 border-t gap-4">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold text-foreground">{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              <span>{deliveryTime}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;