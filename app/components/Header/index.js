import React from "react";

export const Header = ({children}) => {
  return (
    <header className="relative container mx-auto">
      {children}
    </header>
  );
};
