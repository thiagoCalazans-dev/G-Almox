import { createContext, ReactNode, useState } from 'react';
import {Fornecedor, FornecedorFormData} from '../interfaces/Fornecedor'


interface FornecedorContextProps  {
    children: ReactNode;
  };

  interface FornecedorContextTypes  {
    fornecedores: Fornecedor[] | undefined
    setFornecedores: (newState: Fornecedor[]) => void;
    FormDefaultValues: FornecedorFormData
    setFormDefaultValues: (newState: FornecedorFormData) => void;
  };
  
export const FornecedorContext = createContext<FornecedorContextTypes>({} as FornecedorContextTypes);

export const UserContextProvider = ({ children }: FornecedorContextProps) => {

    const [fornecedores, setFornecedores] = useState<Fornecedor[]>()
    const [FormDefaultValues, setFormDefaultValues] = useState<FornecedorFormData>({} as FornecedorFormData);

    return (
        <FornecedorContext.Provider
          value={{
            fornecedores,
            setFornecedores,
            FormDefaultValues,
            setFormDefaultValues,
          }}
        >
          {children}         
        </FornecedorContext.Provider>
    )
}