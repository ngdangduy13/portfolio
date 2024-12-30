import React from "react";

export const Dot = React.memo(() => {
  return <div className="h-2 w-2 bg-accent-500" />;
});

Dot.displayName = "Dot";
