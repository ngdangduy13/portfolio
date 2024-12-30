import clsx from "clsx";
import React from "react";

interface Props
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {}

export const Link = React.memo(({ children, ...props }: React.PropsWithChildren<Props>) => {
  return (
    <a
      {...props}
      className={clsx(props.className, "text-white hover:text-primary-500 cursor-pointer")}
    >
      {children}
    </a>
  );
});

Link.displayName = "Link";
