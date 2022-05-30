interface IProps {
    className?: string;
    children: React.ReactNode;
}

export const TableData = ({className, children}: IProps) => {
    return  ( <td  className={`w-full text-center ${className}`}>{children}</td>)
}