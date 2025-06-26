import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';
import { toast } from 'sonner';

interface MenuItemProps {
  id: string | number;
  name: string;
  description: string;
  price: number;
  // A real implementation would have a callback like:
  // onQuantityChange: (itemId: string | number, newQuantity: number) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ id, name, description, price }) => {
  const [quantity, setQuantity] = useState(0);
  console.log(`MenuItem loaded: ${name}`);

  const handleIncrement = () => {
    if (quantity === 0) {
      toast.success(`${name} added to cart!`);
    }
    setQuantity(prev => prev + 1);
    // onQuantityChange(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(prev => prev - 1);
      // onQuantityChange(id, quantity - 1);
    }
  };

  return (
    <div className="flex justify-between items-start gap-4 py-4 border-b last:border-b-0">
      <div className="flex-1">
        <p className="font-semibold text-md text-gray-800">{name}</p>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <p className="text-md font-bold text-gray-900 mt-2">${price.toFixed(2)}</p>
      </div>

      <div className="flex flex-col items-center justify-center min-w-[100px] mt-1">
        {quantity === 0 ? (
          <Button variant="outline" onClick={handleIncrement} className="w-full">
            Add
          </Button>
        ) : (
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleDecrement}
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-bold text-lg w-8 text-center" aria-live="polite">
              {quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              onClick={handleIncrement}
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;