import { ChangeEvent, createContext, ReactNode, useState } from 'react';
import { useSWRFetch } from '../hooks/useFetch';
import {Fornecedor, FornecedorFormData} from '../interfaces/Fornecedor'
import api from '../services/api';


interface FornecedorContextProps  {
    children: ReactNode;
  };

  type Radio = 'nome' | 'cnpj' | 'cep'

  interface FornecedorContextTypes  {
    FormDefaultValues: FornecedorFormData
    setFormDefaultValues: (newState: FornecedorFormData) => void;
    radioItem: Radio
    setRadioitem: (newState: Radio) => void;
    searchValue: string
    setSearchValue: (newState: string) => void;
  };
  
export const FornecedorContext = createContext<FornecedorContextTypes>({} as FornecedorContextTypes);

export const UserContextProvider = ({ children }: FornecedorContextProps) => {
  
 const [searchValue, setSearchValue] = useState('');
 const [radioItem, setRadioitem] = useState<Radio>('nome')
 const [FormDefaultValues, setFormDefaultValues] = useState<FornecedorFormData>({} as FornecedorFormData);
     
 const { mutate} = useSWRFetch<Fornecedor[]>("fornecedores");


 
      const postFornecedor = async (value: Fornecedor) => {
        await api.post("fornecedores", value);
        await mutate();
      };
    
      const updateFornecedor = async (value: Fornecedor, cnpj: string) => {
        await api.put(`fornecedores/${cnpj}`, value);
        await mutate();
      };
    
      const deleteFornecedor = async (cnpj: string) => {
        await api.delete(`fornecedores/${cnpj}`);
        await mutate();
      };
    
      const findFornecedor = async (cnpj: string) => {
        await api
          .get(`fornecedores/${cnpj}`)
          .then((res) => console.log(res.data.cnpj));
      };

    return (
        <FornecedorContext.Provider
          value={{
            FormDefaultValues,
            setFormDefaultValues,
            radioItem,
            setRadioitem,       
            searchValue,
            setSearchValue
                 }}
        >
          {children}         
        </FornecedorContext.Provider>
    )
}