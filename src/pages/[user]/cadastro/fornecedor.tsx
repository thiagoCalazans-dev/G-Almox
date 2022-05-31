import { FormFornecedor } from "../../../components/forms/FormFornecedor";
import { Navbar } from "../../../components/Navbar";
import { Fornecedor } from "../../../interfaces/Fornecedores";
import { useSWRFetch } from "../../../hooks/useFetch";
import api from "../../../services/api";
import { useSearchBar } from "../../../hooks/useTableSearchBar";
import { Table } from "../../../components/Table";
import { TableHead } from "../../../components/Table/TableHead";
import { TableTitleColumns } from "../../../components/Table/TableTitleColumns";
import { TableBody } from "../../../components/Table/TableBody";
import { TableRow } from "../../../components/Table/TableRow";
import { TableData } from "../../../components/Table/TableData";
import { TableDetailsButton } from "../../../components/Table/TableDetailsButton";
import { TableDeleteButton } from "../../../components/Table/TableDeleteButton";
import { Modal } from "../../../components/Modal";
import { useModal } from "../../../hooks/useModal";
import { useState } from "react";
import { ArrowFatLeft, ArrowFatRight } from "phosphor-react";
import { Button } from "../../../components/Button";

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
  const { closeModal, openModal, modal } = useModal();
  const { data, mutate } = useSWRFetch<Fornecedor[]>("fornecedores");
  const { SearchComponent, filteredList } = useSearchBar({ data, searchItens });
  const [detailsData, setDetailsData] = useState({} as Fornecedor);

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
      <div className="flex justify-evenly w-full h-full lg:flex-col lg:items-center lg:h-auto lg:justify-center lg:my-4">
        <div className="w-1/3 border-r-[1px] border-zinc-800 border-opacity-80 lg:w-auto">
          <FormFornecedor
            onSubmit={postFornecedor}  />        
        </div>
        <div className="w-2/3 lg:w-[600px]">
          <div className="w-full  h-full flex flex-col items-center py-8">
            <div className="w-11/12 h-full flex flex-col items-center">
              <h1 className="w-11/12 text-center p-2 text-4xl font-bold border-b-2 rounded-t-md">
                Fornecedores
              </h1>
              <SearchComponent />
              <Table>
                <TableHead>
                  <TableTitleColumns title="Nome" />
                  <TableTitleColumns title="CNPJ" />
                  <TableTitleColumns title="CEP" />
                  <TableTitleColumns
                    title="Detalhes"
                    className="max-w-[5rem] shrink"
                  />
                  <TableTitleColumns
                    title="Excluir"
                    className="max-w-[5rem] shrink"
                  />
                </TableHead>
                <TableBody>
                  {filteredList?.map((item) => (
                    <TableRow key={item.id}>
                      <TableData>{item.nome}</TableData>
                      <TableData>{item.cnpj}</TableData>
                      <TableData>{item.cep}</TableData>
                      <TableData className="max-w-[5rem] shrink text-center">
                        <TableDetailsButton
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
                            <Button>Editar</Button>
                            <button className="hover:bg-contrast-500 transition-all rounded-full px-2">
                              <ArrowFatRight size={26} />
                            </button>
                          </div>
                        </Modal>
                      </TableData>
                      <TableData className="max-w-[5rem] shrink text-center">
                        <TableDeleteButton
                          onClick={() => deleteFornecedor(item.cnpj)}
                        />
                      </TableData>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fornecedor;
