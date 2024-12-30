import React from "react";

export const Tag = React.memo((props: React.PropsWithChildren) => {
  return (
    <div className="py-2 px-4 flex justify-center items-center bg-[#45523C]">
      <div className="text-primary-500 text-xs">{props.children}</div>
    </div>
  );
});
