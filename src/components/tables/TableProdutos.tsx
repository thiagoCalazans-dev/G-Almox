import {Produto} from "../../interfaces/Produto"

type Props = {
produtos: Produto[];
}

export const TableProdutos = ({produtos}: Props) => {
    return (
    <>
    Tabela de produtos {produtos.map((item) => (<div key={item.id}>{item.nome}</div>))}
    </>)
}