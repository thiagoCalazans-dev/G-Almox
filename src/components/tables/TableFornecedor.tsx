import { Pen, Trash } from "phosphor-react";

export const TableFornecedor = () => {
  return (
    <div className= "w-full  h-full flex flex-col items-center py-8">
      <div className="w-11/12 h-full bg-zinc-800 p-4 flex flex-col items-center">      
      <h1 className="w-full text-center text-4xl font-bold my-4">Fornecedores</h1>
      <input className="bg-zinc-700 rounded-sm mt-2 w-4/12 text-center focus:w-full focus:transition-all focus:outline-none focus:shadow-sm focus:border-brand-500" placeholder="Pesquisar"/>
      <table className="w-11/12 h-full bg-zinc-800 p-4 flex flex-col">
        <tr className="h-auto flex justify-around border-zinc-100 border-b-2">
          <th  className="w-full ">Nome</th>
          <th  className="w-full">CNPJ</th>
          <th  className="w-full">CEP</th>       
          <th  className="w-full">Editar</th>
          <th  className="w-full">Excluir</th>       
        </tr>
        <tr className="h-auto flex justify-around border-b-2">
          <td className="w-full text-center ">Pablo Escobar</td>
          <td className="w-full text-center ">11.111/0001-11</td>
          <td className="w-full text-center">15.256-100</td>
          <td className="w-full text-center"><button><Pen/></button></td>
          <td className="w-full text-center"><button><Trash/></button></td>
        </tr>
    </table>
    </div> 
    </div>
  );
};
