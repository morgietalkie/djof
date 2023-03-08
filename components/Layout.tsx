import React from "react";
import { NavBar } from "./NavBar";

export type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const Layout = ({ children }: Props) => {
  return (
    <div>
      <NavBar />

      {children}
    </div>
  );
};
