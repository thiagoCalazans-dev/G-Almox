import { useState } from "react";
import {Produto} from "../../../interfaces/Produto"
import { Navbar } from "../../../components/Navbar";
import { TableProdutos } from "../../../components/tables/TableProdutos";
import { produtoslist } from "../../../../data";
import { FormProduto } from "../../../components/forms/FormProduto";

const Produto = () => {

const [produtos, setProdutos] = useState<Produto[]>(produtoslist)

const handleSubmit = () => {
    console.log("produto")
}


    return ( 
    <div className="w-screen h-screen flex flex-col">
    <Navbar />
    <div className="flex justify-evenly w-full h-full lg:flex-col lg:items-center lg:h-auto lg:justify-center lg:my-4">
      <div className="w-1/3 border-r-[1px] border-zinc-800 border-opacity-80 lg:w-auto" >
     <FormProduto/>
     </div>
    <div className="w-2/3 lg:w-[600px]" >
    <TableProdutos produtos={produtos}/>
    </div>
    </div>
  </div>)
    }
    
    export default Produto;