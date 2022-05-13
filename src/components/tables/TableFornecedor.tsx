import { Pen, Trash } from "phosphor-react";
import { ChangeEvent, useState } from "react";
import {Fornecedores} from "../../interfaces/Fornecedores"
import { RadioGroup } from '@headlessui/react'

type Props = {
  fornecedores: Fornecedores[]
}

type Radio = 'nome' | 'cnpj' | 'cep'
const searchItens = {
  1: {
    value: 'nome',
    label:  'Nome'
  },
  2: {
    value: 'cnpj',
    label: 'CNPJ',
  },
  3: {
    value: 'cep',
    label: 'CEP',
  },
}

export const TableFornecedor = ({fornecedores}: Props) => {

  const [searchValue, setSearchValue] = useState('');
  const [radioItem, setRadioitem] = useState<Radio>('nome')

  const filteredList = searchValue
    ? fornecedores.filter((item) => {
        return item[radioItem].toLowerCase().includes(searchValue.toLowerCase());
      })
    : fornecedores;

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
                <input className="bg-zinc-800 rounded-sm w-10/12 text-center  focus:w-full focus:transition-all focus:outline-none focus:shadow-sm focus:border-brand-500" 
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
          <th  className="w-full">CNPJ</th>
          <th  className="w-full">CEP</th>       
          <th  className="w-full max-w-[4rem] shrink">Editar</th>
          <th  className="w-full max-w-[4rem] shrink">Excluir</th>       
        </tr>
        </thead>
        <tbody>
        {filteredList.map((item) => 
        ( <tr key={item.id} className="h-auto flex justify-around border-b-2  hover:bg-zinc-700">
          <td className="w-full text-center">{item.nome}</td>
          <td className="w-full text-center ">{item.cnpj}</td>
          <td className="w-full text-center">{item.cep}</td>
          <td className="w-full max-w-[4rem] shrink text-center"><button className="hover:bg-brand-500 transition-all rounded-full p-1"><Pen/></button></td>
          <td className="w-full max-w-[4rem] shrink text-center"><button className="hover:bg-contrast-500 transition-all rounded-full p-1"><Trash/></button></td>
        </tr>
        ))}      
        </tbody>
    </table>
    </div> 
    </div>
  );
};
