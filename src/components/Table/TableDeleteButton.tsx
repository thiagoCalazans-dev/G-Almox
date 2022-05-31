import { Trash } from "phosphor-react"


interface IProps {
    onClick: () => void
}

export const TableDeleteButton = ({onClick}: IProps) => {
 return (<button onClick={onClick} className="hover:bg-contrast-500 transition-all rounded-full p-1"><Trash/></button>)
}