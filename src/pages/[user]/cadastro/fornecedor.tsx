import { FormFornecedor } from "../../../components/forms/FormFornecedor";
import { Navbar } from "../../../components/Navbar";
import { TableFornecedor } from "../../../components/tables/TableFornecedor";
import { Fornecedor } from "../../../interfaces/Fornecedores";
import { useSWRFetch } from "../../../hooks/useFetch";
import api from "../../../services/api";
import { AxiosRequestConfig } from "axios";


const Fornecedor = () => {

  const { data , mutate } = useSWRFetch<Fornecedor[]>('fornecedores');
  
const postFornecedor = async(value: Fornecedor) =>  {
    await api.post("fornecedores", value); 
    await mutate()
  }

const deleteFornecedor = async (id: number) => {
  await api.delete(`fornecedores/${id}`);
  await mutate()
} 
  
  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <div className="flex justify-evenly w-full h-full lg:flex-col lg:items-center lg:h-auto lg:justify-center lg:my-4">
        <div className="w-1/3 border-r-[1px] border-zinc-800 border-opacity-80 lg:w-auto" >
       <FormFornecedor onSubmit={postFornecedor}/>
       </div>
      <div className="w-2/3 lg:w-[600px]" >
      <TableFornecedor fornecedores={data} onDelete={deleteFornecedor} />
      </div>
      </div>
    </div>
  );
};

export default Fornecedor;
