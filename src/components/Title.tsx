import clsx from "clsx";
import React from "react";

interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  hideBottomBorder?: boolean;
}

export const Title = React.memo(
  ({ children, hideBottomBorder = false, ...props }: React.PropsWithChildren<Props>) => {
    return (
      <h1
        {...props}
        className={clsx(
          props.className,
          !hideBottomBorder && "underline decoration-4 decoration-primary-500",
          "text-2xl font-bold text-white"
        )}
      >
        {children}
      </h1>
    );
  }
);
