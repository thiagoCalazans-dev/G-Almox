
import { MagnifyingGlass } from "phosphor-react";
import { FormEvent, useState } from "react";
import { fornecedorlist } from "../../../../data";
import { Button } from "../../../components/Button";
import { Modal } from "../../../components/Modal";
import { TableFornecedor } from "../../../components/tables/TableFornecedor";
import { useModal } from "../../../hooks/useModal";
import {Fornecedores} from "../../../interfaces/Fornecedor"




const Entradas = () => {

    const [fornecedores, setFornecedores] = useState<Fornecedores[]>(fornecedorlist)
    const fornecedorModal = useModal() 
    const initialValues = {
        id: 0,
        nome: "",
        cnpj: "",
        cep: "",
        cidade: "",
        endereco: "",
        bairro: "",
        numero: "",
        complemento: "",
      };

    const [form, setForm] = useState<Fornecedores>(initialValues)
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(form)
    }

    return (
     <div className="w-screen h-screen">   
     <form onSubmit={handleSubmit} className = "flex gap-3 flex-col h-full items-center item-center w-1/2 justify-center">
        Entrada
             <input value={form.nome} 
             placeholder="Fornecedor"className="w-auto px-4 py-2 border-0 rounded-md text-sm outline-none bg-zinc-700 focus:border-brand-300"/>   
            <Button  type="button" onClick={fornecedorModal.openModal} className="w-auto flex items-end justify-center px-8 text-xl bg-brand-500 hover:bg-brand-100 text-white py-2 rounded-md transition duration-100 lg:w-full"><MagnifyingGlass size={20} /></Button>
            <Modal modal={fornecedorModal.modal} closeModal={fornecedorModal.closeModal}>            
            <TableFornecedor fornecedores={fornecedores}/>              
            </Modal>     
    
        <Button className="w-auto flex items-end justify-center px-8 text-xl bg-brand-500 hover:bg-brand-100 text-white py-2 rounded-md transition duration-100 lg:w-full">Submit</Button>
    </form>
    </div>
    )
    }

export default Entradas;