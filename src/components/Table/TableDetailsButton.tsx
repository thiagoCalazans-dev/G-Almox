import { ChatCenteredText  } from "phosphor-react"


interface IProps {
    onClick: () => void
}

export const TableDetailsButton = ({onClick}: IProps) => {
 return (<button onClick={onClick} className="hover:bg-brand-500 transition-all rounded-full p-1" ><ChatCenteredText /></button>)
}