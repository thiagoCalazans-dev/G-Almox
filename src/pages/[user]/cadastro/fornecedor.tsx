import { useState } from "react";
import { FormFornecedor } from "../../../components/forms/FormFornecedor";
import { Navbar } from "../../../components/Navbar";
import { TableFornecedor } from "../../../components/tables/TableFornecedor";
import { Fornecedor } from "../../../interfaces/Fornecedores";
import {fornecedorlist} from "../../../../data"
import { GetServerSideProps } from "next";
import { getAllFornecedores } from "../../../lib/services/fornecedoresService";
import { useRouter } from "next/router";

type propsPage = {
  fornecedores: Fornecedor[]
}

const Fornecedor = ({fornecedores}: propsPage) => {
  
  const router = useRouter()
  const refreshData = () => {
    router.replace(router.asPath)
  }


  async function create(data: Fornecedor) {
    try {
      fetch('http://localhost:3000/api/fornecedores/create', {
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      })                   
    } catch (error) {
      console.log(error);
    }
  } 

  const [listFornecedores, setListFornecedores] = useState<Fornecedor[]>(fornecedores)

  const handleSubmit = async (data: Fornecedor) => {     
        await create(data)             
    }

  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex justify-evenly w-full h-full lg:flex-col lg:items-center lg:h-auto lg:justify-center lg:my-4">
        <div className="w-1/3 border-r-[1px] border-zinc-800 border-opacity-80 lg:w-auto" >
       <FormFornecedor onSubmit={handleSubmit}/>
       </div>
      <div className="w-2/3 lg:w-[600px]" >
      <TableFornecedor fornecedores={listFornecedores}/>
      </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const fornecedores = await getAllFornecedores();
  return {
    props: {
      fornecedores,
    },
  };
};


export default Fornecedor;
