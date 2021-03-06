import { useState } from "react";
import { Produto } from "../../../interfaces/Produto";
import { Navbar } from "../../../components/Navbar";
import { TableProdutos } from "../../../components/tables/TableProdutos";
import { produtoslist } from "../../../../data";
import { FormProduto } from "../../../components/forms/FormProduto";
import { useModal } from "../../../hooks/useModal";
import { Modal } from "../../../components/Modal";


const Produto = () => {
  const [produtos, setProdutos] = useState<Produto[]>(produtoslist);
  const { closeModal, modal, openModal } = useModal();

  const handleSubmit = () => {
    console.log("produto");
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col items-center w-full h-full justify-center">
        <div className=" flex  flex-col w-1/2 items-center p-6 bg-zinc-800 shadow-sm shadow-zinc-800 rounded-xl">       
          <TableProdutos produtos={produtos} />   
          <div>
          <button className="btn"type="button" onClick={openModal}>
            Cadastrar
          </button>        
            </div>         
              <Modal title="Cadastro de produto"modal={modal} closeModal={closeModal}>
            <FormProduto closeOnSubmit={closeModal} />
          </Modal>       
        </div>
      </div>
    </div>
  );
};

export default Produto;
