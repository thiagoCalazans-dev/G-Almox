import React, { ReactNode } from "react"

interface IProps {
    children: any
}

export const Table = ({children}: IProps) => {
    return  <table className="w-11/12 h-full p-4 flex flex-col">{children}</table>
}