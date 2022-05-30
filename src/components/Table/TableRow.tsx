interface  IProps{
    children: any
}

export const TableRow = ({children}: IProps) => {
    return <tr className="h-auto flex justify-around border-b-2  hover:bg-zinc-700">{children}</tr>
}