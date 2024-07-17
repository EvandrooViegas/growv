import { cn } from "@/lib/utils";

import React, { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
  bgClassName?: string;
  isFirstSection?: boolean
} & React.HTMLAttributes<HTMLDivElement>;
const Container = forwardRef<HTMLElement, Props>((props, ref) => {
  const { children, className, bgClassName, isFirstSection, ...rest } = props;
  return (
    <section  className={`w-full h-full ${bgClassName}`}   ref={ref}>
    <div className={cn(`md:px-20 px-6  ${isFirstSection ? 'py-40' : 'py-24'} max-screen-width mx-auto ${className}`)} {...rest}>
      {children}
    </div>
  </section>
  );
});

Container.displayName = "Container";

export default Container;

