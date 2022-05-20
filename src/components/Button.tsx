import React from "react"

interface Props {
    children?: React.ReactNode;
    className?: string
    type?: "button" | "submit" | "reset" | undefined;
    [x:string]: any;
    onClick?: () => void
      
}

export const Button = ({children, text, className, type, onClick, ...props}: Props) => {
    return (<button
    onClick={onClick}
    className={className ? className : `w-full flex items-end justify-center gap-2 px-8 text-xl bg-brand-500 hover:bg-brand-300 text-zinc-100 py-2 rounded-md transition duration-100 lg:w-full`}
    type={type}
  >
  {children}
  </button>)
}

