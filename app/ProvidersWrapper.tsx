"use client";
import React from "react";
import { HeroIntersectionContextProvider } from "./heroIntersection.context";

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <HeroIntersectionContextProvider>
      {children}
    </HeroIntersectionContextProvider>
  );
}
