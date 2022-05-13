import { FloppyDisk } from "phosphor-react"
import { ChangeEventHandler, FormEvent, useState } from "react"
import InputMask from "react-input-mask"
import { Fornecedores } from "../../interfaces/Fornecedores"

 
type Props = {
  onSubmit: (formValues: Fornecedores ) => void
}

const initialValues = {
  id: 0,
  nome: '',
  cnpj: '',
  cep: '',
  cidade: '',
  endereco: '',
  numero: '',
  complemento: '',
}

export const FormCadFornecedor = ({onSubmit}: Props) => {

const [formValues, setFormValues] = useState<Fornecedores>(initialValues)

const  handleFornecedoresFormInputsChange = (event: any) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value    
    });
  }

  const HandlerFornecedoresFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formValues)
    setFormValues(initialValues)
  }
  
  return ( 
    <>
    <div className="flex flex-col justify-center w-full h-full">     
    <form onSubmit={HandlerFornecedoresFormSubmit} className="mx-auto w-5/6 h-5/6 bg-zinc-800 shadow-sm shadow-zinc-800 rounded-xl flex flex-col items-center gap-3">    
    <h2 className="w-full text-center text-4xl mt-4 font-bold">Cadastro</h2>
    <div className="flex flex-col justify-between h-full w-5/6">
    <div>    
      <label className="block text-md mt-2 font-bold" htmlFor="user">
        Nome 
      </label>
      <input
        className="px-4 w-full border-0 py-2 rounded-md text-sm outline-none bg-zinc-700"
        type="text"
        name="nome"
        placeholder="Nome"
        value={formValues.nome}
        onChange={handleFornecedoresFormInputsChange}
      />     
      <label className="block text-md font-bold mt-2" htmlFor="cnpj">
        CPNJ 
      </label>
      <input
        className="px-4 w-full  py-2  border-0 rounded-md text-sm outline-none bg-zinc-700 focus:border-brand-300"
        type="text"
        name="cnpj"
        placeholder="CPNJ"
        value={formValues.cnpj}
        onChange={handleFornecedoresFormInputsChange}
      />
      <div className="flex mt-2 items-center gap-2">
          <div className="flex flex-col">
      <label className="block text-md font-bold" htmlFor="cep">
        CEP
      </label>
      <input
        // mask="99.999-99"
        className="px-4 w-full  py-2  border-0 rounded-md text-sm outline-none bg-zinc-700 focus:border-brand-300"
        type="text"
        name="cep"
        placeholder="CEP"
        value={formValues.cep}
        onChange={handleFornecedoresFormInputsChange}
      />
      </div>
      <div className="flex flex-col">
        <label className="text-md font-bold" htmlFor="cidade    ">
        Cidade 
      </label>
      <input
        className="px-4 w-full  py-2  border-0 rounded-md text-sm outline-none bg-zinc-700 focus:border-brand-300"
        type="text"
        name="cidade"
        placeholder="Cidade"
        value={formValues.cidade}
        onChange={handleFornecedoresFormInputsChange}
      />
      </div>
      </div>
        <label className="block text-md font-bold mt-2" htmlFor="cnpj">
        Endereço 
      </label>
      <input
        className="px-4 w-full  py-2  border-0 rounded-md text-sm outline-none bg-zinc-700 focus:border-brand-300"
        type="text"
        name="endereco"
        placeholder="Endereço"
        value={formValues.endereco}
        onChange={handleFornecedoresFormInputsChange}
      />
       <div className="flex mt-2 items-center gap-2">
       <div className="flex flex-col w-1/4">
      <label className="text-md font-bold" htmlFor="numero">
        Número
      </label>
      <input
        className="px-4 py-2 border-0 rounded-md text-sm outline-none bg-zinc-700 focus:border-brand-300"
        type="text"
        name="numero"
        placeholder="Nº"
        value={formValues.numero}
        onChange={handleFornecedoresFormInputsChange}
      />
      </div>
       <div className="flex flex-col grow">
        <label className="text-md font-bold" htmlFor="complemento    ">
        Complemento 
      </label>
      <input
        className="px-4 w-full  py-2  border-0 rounded-md text-sm outline-none bg-zinc-700 focus:border-brand-300"
        type="text"
        name="complemento"
        placeholder="Complemento"
        value={formValues.complemento}
        onChange={handleFornecedoresFormInputsChange}
      />
     </div>
      </div>              
    </div>   
    <div className = "pb-4">  
    <button className="flex gap-2 items-center justify-center px-8 text-xl mt-4 w-full bg-brand-500 hover:bg-brand-100 text-white py-2 rounded-md transition duration-100"
         type="submit">
      Salvar <FloppyDisk size={24} color="#ffffff" />
    </button>
    </div> 
    </div > 
  </form>  
  </div>   
  </>)

}