// Import React and clsx library for handling CSS class names
import React from "react";
import clsx from "clsx";

// Define a type for the props that the Bounded component will receive
type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

// Create the Bounded component using React.forwardRef
const Bounded = React.forwardRef<HTMLDivElement, BoundedProps>(
  // Destructure the props received by the component
  ({ as: Comp = "section", className, children, ...restProps }, ref) => {
    // Return JSX representing the Bounded component
    return (
      <Comp
        ref={ref} // Forward the ref to the underlying component
        className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)} // Apply dynamic CSS classes
        {...restProps} // Spread any remaining props onto the underlying component
      >
        {/* Nested div for additional styling and to contain children */}
        <div className="mx-auto w-full max-w-7xl">{children}</div>
      </Comp>
    );
  },
);

// Set a display name for the component (useful for debugging and development tools)
Bounded.displayName = "Bounded";

// Export the Bounded component as the default export
export default Bounded;
