import React from "react";

interface IProps {
  children: any;
}

export const TableHead = ({ children }: IProps) => {
  return (
    <thead>
      <tr className="h-auto flex justify-around border-zinc-100 border-b-2 ">
        {children}
      </tr>
    </thead>
  );
};
