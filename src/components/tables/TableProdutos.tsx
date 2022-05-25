import { RadioGroup } from "@headlessui/react";
import { Pen, Trash } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import {Produto} from "../../interfaces/Produto"

type Props = {
produtos: Produto[];
}  
  type Radio = 'nome' | 'unidade' 
  const searchItens = {
    1: {
      value: 'nome',
      label:  'Nome'
    },
    2: {
      value: 'unidade',
      label: 'Unidade',
    },
}

export const TableProdutos = ({produtos}: Props) => {
    const [searchValue, setSearchValue] = useState('');
  const [radioItem, setRadioitem] = useState<Radio>('nome')

  const filteredList = searchValue
    ? produtos.filter((item) => {
        return item[radioItem].toLowerCase().includes(searchValue.toLowerCase());
      })
    : produtos;

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className= "w-full  h-full flex flex-col items-center py-8">
      <div className="w-11/12 h-full flex flex-col items-center">      
      <h1 className="w-11/12 text-center p-2 text-4xl font-bold border-b-2 rounded-t-md">Fornecedores</h1>
      <RadioGroup className="flex items-center mt-4 w-11/12 gap-3" value={radioItem} onChange={setRadioitem}>
      <RadioGroup.Label>Buscar:</RadioGroup.Label> 
      <div className="flex gap-3 w-full">
      {Object.entries(searchItens).map(([key, item]) => {
          return (
       <RadioGroup.Option key={key} value={item.value}>
        {({ checked }) => (
          <span className={checked ? 'text-brand-500 underline decoration-solid' : 'hover:cursor-pointer '}>{item.label}</span>
        )}
      </RadioGroup.Option>
      )})} 
      <div className= "grow flex justify-center">
                <input className="bg-zinc-800 rounded-sm w-10/12 text-center  focus:outline-none focus:opacity-90 focus:outline-brand-500 " 
         placeholder={`Pesquisar: ${radioItem.toUpperCase()}`}
         value = {searchValue}
         onChange= {handleSearch}
         />    
         </div>        
         </div>  
       </RadioGroup>
   
         
      <table className="w-11/12 h-full p-4 flex flex-col">
        <thead>
        <tr className="h-auto flex justify-around border-zinc-100 border-b-2 ">
          <th  className="w-full ">Nome</th>
          <th  className="w-full">Unidade</th>         
          <th  className="w-full max-w-[4rem] shrink">Editar</th>
          <th  className="w-full max-w-[4rem] shrink">Excluir</th>       
        </tr>
        </thead>
        <tbody>
        {filteredList.map((item) => 
        ( <tr key={item.id} className="h-auto flex justify-around border-b-2  hover:bg-zinc-700">
          <td className="w-full text-center">{item.nome}</td>
          <td className="w-full text-center ">{item.unidade}</td>         
          <td className="w-full max-w-[4rem] shrink text-center"><button className="hover:bg-brand-500 transition-all rounded-full p-1"><Pen/></button></td>
          <td className="w-full max-w-[4rem] shrink text-center"><button className="hover:bg-contrast-500 transition-all rounded-full p-1"><Trash/></button></td>
        </tr>
        ))}      
        </tbody>
    </table>
    </div> 
    </div>
  );
}