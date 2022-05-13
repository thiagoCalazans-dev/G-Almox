import { useState } from "react";
import { FormCadFornecedor } from "../../../components/forms/FormFornecedor";
import { Navbar } from "../../../components/Navbar";
import { TableFornecedor } from "../../../components/tables/TableFornecedor";
import { Fornecedores } from "../../../interfaces/Fornecedores";
import {fornecedorlist} from "../../../../data"

const Fornecedor = () => {

  const [fornecedores, setFornecedores] = useState<Fornecedores[]>(fornecedorlist)

  const handleSubmit = (e: Fornecedores) => {
    setFornecedores([...fornecedores, e])
  }

  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex justify-evenly w-full h-full ">
        <div className="w-1/3 border-r-[1px] border-zinc-800 border-opacity-80">
       <FormCadFornecedor onSubmit={handleSubmit}/>
       </div>
      <div className="w-2/3">
      <TableFornecedor fornecedores={fornecedores}/>
      </div>
      </div>
    </div>
  );
};

export default Fornecedor;
