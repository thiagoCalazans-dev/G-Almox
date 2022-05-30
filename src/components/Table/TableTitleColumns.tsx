interface IProps {
    className?: string;
    title: string;
}


export const TableTitleColumns = ({className, title}: IProps) => {
    return  ( <th  className={`w-full ${className}`}>{title}</th>)
}