import { FormFornecedor } from "../../../components/forms/FormFornecedor";
import { Navbar } from "../../../components/Navbar";
import { Fornecedor } from "../../../interfaces/Fornecedor";
import { useSWRFetch } from "../../../hooks/useFetch";
import api from "../../../services/api";
import { useSearchBar } from "../../../hooks/useTableSearchBar";
import { TableDetailsButton } from "../../../components/Table/TableDetailsButton";
import { TableDeleteButton } from "../../../components/Table/TableDeleteButton";
import { Modal } from "../../../components/Modal";
import { useModal } from "../../../hooks/useModal";
import { useState } from "react";
import { ArrowFatLeft, ArrowFatRight } from "phosphor-react";
import Table from "../../../components/Table";

const searchItens = [
  {
    value: "nome",
    label: "Nome",
  },
  {
    value: "cnpj",
    label: "CNPJ",
  },
  {
    value: "cep",
    label: "CEP",
  },
];

const Fornecedor = () => {
  const { data, mutate } = useSWRFetch<Fornecedor[]>("fornecedores");
  const { SearchComponent, filteredList } = useSearchBar({ data, searchItens });
  const [detailsData, setDetailsData] = useState({} as Fornecedor);
  const {closeModal, modal, openModal} = useModal()

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

  const handleDetailsClick = (item: Fornecedor) => {
    openModal();
    setDetailsData(item);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />  
              <Modal modal={modal} closeModal={closeModal}>
               <FormFornecedor  />  
               </Modal>         
              <div className="w-full  h-full flex flex-col items-center py-8">
            <div className="w-11/12 h-full flex flex-col items-center">
              <h1 className="w-11/12 text-center p-2 text-4xl font-bold border-b-2 rounded-t-md">
                Fornecedores
              </h1>
              <SearchComponent />
              <Table.Container>
                <Table.Head>
                  <Table.TitleColumns title="Nome" />
                  <Table.TitleColumns title="CNPJ" />
                  <Table.TitleColumns title="CEP" />
                  <Table.TitleColumns
                    title="Detalhes"
                    className="max-w-[5rem] shrink"
                  />
                  <Table.TitleColumns
                    title="Excluir"
                    className="max-w-[5rem] shrink"
                  />
                </Table.Head>
                <Table.Body>
                  {filteredList?.map((item) => (
                    <Table.Row key={item.id}>
                      <Table.Data>{item.nome}</Table.Data>
                      <Table.Data>{item.cnpj}</Table.Data>
                      <Table.Data>{item.cep}</Table.Data>
                      <Table.Data className="max-w-[5rem] shrink text-center">
                        <Table.DetailsButton
                          onClick={() => handleDetailsClick(item)}
                        />
                        <Modal
                          title="Fornecedor"
                          modal={modal}
                          closeModal={closeModal}
                        >
                          {Object.entries(detailsData).map((item, key) => (
                            <div
                              key={key}
                              className="flex gap-1 py-2 justify-between border-b-2 border-zinc-500"
                            >
                              <label className="grow">
                                {item[0].toUpperCase()}:
                              </label>
                              <input                              
                                className="w-auto bg-zinc-800 text-right"
                                value={item[1]}
                              />
                            </div>
                          ))}
                          <div className="flex justify-between px-4 pt-2 gap-2">
                            <button className="hover:bg-contrast-500 transition-all rounded-full px-2">
                              <ArrowFatLeft size={26} />
                            </button>
                            <button className="btn">Editar</button>
                            <button className="hover:bg-contrast-500 transition-all rounded-full px-2">
                              <ArrowFatRight size={26} />
                            </button>
                          </div>
                        </Modal>
                      </Table.Data>
                      <Table.Data className="max-w-[5rem] shrink text-center">
                        <Table.DeleteButton                        
                          onClick={() => deleteFornecedor(item.cnpj)}
                        />
                      </Table.Data>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Container>
            </div>
          </div>  
          </div>
  );
};

export default Fornecedor;
