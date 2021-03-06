import { ChatCenteredText, Trash } from "phosphor-react";
import React, { ReactNode } from "react";

interface IProps {
  children: JSX.Element | JSX.Element[] | undefined | string;
}

interface ButtonIProps {
    onClick?: () => void;
}

interface TitleIProps {
    className?: string
    title: string
}

interface DataIProps {
    className?: string
    children: JSX.Element | JSX.Element[] | undefined | string;
}

const Container = ({ children }: IProps) => {
  return <table className="w-11/12 h-full p-4 flex flex-col">{children}</table>;
};

const Head = ({ children }: IProps) => {
  return (
    <thead>
      <tr className="h-auto flex justify-around border-zinc-100 border-b-2 ">
        {children}
      </tr>
    </thead>
  );
};

const TitleColumns = ({ className, title }: TitleIProps) => {
  return <th className={`w-full ${className}`}>{title}</th>;
};

const Body = ({ children }: IProps) => {
  return <tbody>{children}</tbody>;
};

const Data = ({ className, children }: DataIProps) => {
  return <td className={`w-full text-center ${className}`}>{children}</td>;
};

const Row = ({ children }: IProps) => {
  return (
    <tr className="h-auto flex justify-around border-b-2  hover:bg-zinc-700">
      {children}
    </tr>
  );
};

const DeleteButton = ({ onClick }: ButtonIProps) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-contrast-500 transition-all rounded-full p-1"
    >
      <Trash />
    </button>
  );
};

export const DetailsButton = ({ onClick }: ButtonIProps) => {
  return (
    <button
      onClick={onClick}
      className="hover:bg-brand-500 transition-all rounded-full p-1"
    >
      <ChatCenteredText />
    </button>
  );
};

const Table = {
  Container,
  Head,
  TitleColumns,
  Body,
  Row,
  Data,
  DeleteButton,
  DetailsButton,
};

export default Table;
