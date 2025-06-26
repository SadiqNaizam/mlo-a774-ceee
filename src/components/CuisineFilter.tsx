import React from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

// Define a type for a single cuisine item, which can optionally include an icon
export interface Cuisine {
  name: string;
  icon?: React.ReactNode;
}

// Define the props for the CuisineFilter component
interface CuisineFilterProps {
  // An array of cuisine objects to display as filter options
  cuisines: Cuisine[];
  // An array of strings representing the names of the currently selected cuisines
  selectedCuisines: string[];
  // A callback function that is invoked when the selection changes
  onSelectionChange: (selected: string[]) => void;
  // Optional className to allow for additional styling
  className?: string;
}

/**
 * A component that renders a set of interactive toggles for filtering by cuisine.
 * It is a controlled component, receiving its state via props.
 */
const CuisineFilter: React.FC<CuisineFilterProps> = ({
  cuisines,
  selectedCuisines,
  onSelectionChange,
  className,
}) => {
  console.log("CuisineFilter loaded");

  return (
    <div className={cn("py-4", className)}>
      <h3 className="text-base font-semibold mb-3 text-gray-700">Filter by Cuisine</h3>
      <ToggleGroup
        type="multiple"
        variant="outline"
        value={selectedCuisines}
        onValueChange={onSelectionChange}
        className="flex flex-wrap justify-start gap-2"
        aria-label="Cuisine filter"
      >
        {cuisines.map((cuisine) => (
          <ToggleGroupItem
            key={cuisine.name}
            value={cuisine.name}
            aria-label={`Filter by ${cuisine.name}`}
            className="flex items-center gap-2 px-3 py-1.5 h-auto"
          >
            {cuisine.icon}
            <span>{cuisine.name}</span>
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default CuisineFilter;