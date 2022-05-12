import { useState } from "react";
import { FormCadFornecedor } from "../../../components/forms/formFornecedor";
import { Navbar } from "../../../components/Navbar";
import { TableFornecedor } from "../../../components/tables/TableFornecedor";

const fornecedorlist = [
  {
    id: 1,
    nome: "Mercadao",
    cnpj: "1111111111",
  },
  {
    id: 2,
    nome: "Papelaria",
    cnpj: "2222222222",
  },
  {
    id: 3,
    nome: "Lanchonete",
    cnpj: "3333333333",
  },
];

const Fornecedor = () => {
  
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex justify-evenly w-full h-full ">
        <div className="w-1/3">
       <FormCadFornecedor/>
       </div>
      <div className="w-2/3">
      <TableFornecedor/>
      </div>
      </div>
    </div>
  );
};

export default Fornecedor;
