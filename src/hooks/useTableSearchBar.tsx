import { RadioGroup } from "@headlessui/react";
import { ChangeEvent, useState } from "react";

interface Iprops<t>{
    data: t[] | undefined
    searchItens: searchItem[]    
}

interface searchItem {      
        value: string,
        label: string,    
}

type Radio = 'nome' | 'cnpj' | 'cep'

export const useSearchBar =<t extends {}>({data, searchItens,}: Iprops<t>) => {
    const [searchValue, setSearchValue] = useState('');
    const [radioItem, setRadioitem] = useState<Radio>('nome')
  
    const filteredList = searchValue
      ? data?.filter((item: any) => {
          return item[radioItem].toLowerCase().includes(searchValue.toLowerCase());
        })
      : data;
  
    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(e.target.value)
    }
   
   
   
   const SearchComponent = () => {
    return (
  <RadioGroup className="flex items-center mt-4 w-11/12 gap-3" value={radioItem} onChange={setRadioitem}>
  <RadioGroup.Label>Buscar:</RadioGroup.Label> 
  <div className="flex gap-3 w-full">
  {searchItens.map((item, key) => {
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
      )
   }

   return {SearchComponent, filteredList}
}