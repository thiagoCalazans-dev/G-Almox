import { FormFornecedor } from "../../../components/forms/FormFornecedor";
import { Navbar } from "../../../components/Navbar";
import { Fornecedor } from "../../../interfaces/Fornecedor";
import { useSWRFetch } from "../../../hooks/useFetch";
import api from "../../../services/api";
import { Modal } from "../../../components/Modal";
import { useModal } from "../../../hooks/useModal";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ArrowFatLeft, ArrowFatRight } from "phosphor-react";
import Table from "../../../components/Table";
import { RadioGroup } from "@headlessui/react";
import { FornecedorContext } from "../../../contexts/FornecedorContext";

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

type Radio = 'nome' | 'cnpj' | 'cep'

const Fornecedor = () => {

  const {searchValue} = useContext(FornecedorContext)
  const { closeModal, modal, openModal } = useModal();
  const [radioItem, setRadioitem] = useState<Radio>("nome")
  const [fornecedores, setFornecedores] = useState<Fornecedor[]>([])


  const { data } =  useSWRFetch<Fornecedor[]>("fornecedores");
  if (!data) return <div> loading</div>
  console.log(data)


  return (
    <div className="w-screen h-screen flex flex-col">
      <Navbar />
      <Modal modal={modal} closeModal={closeModal}>
        <FormFornecedor />
      </Modal>
      <div className="w-full  h-full flex flex-col items-center py-8">
        <div className="w-11/12 h-full flex flex-col items-center">
          <h1 className="w-11/12 text-center p-2 text-4xl font-bold border-b-2 rounded-t-md">
            Fornecedores
          </h1>
          <RadioGroup 
            className="flex items-center mt-4 w-11/12 gap-3 "
            value={radioItem}
            onChange={setRadioitem}
          >
            <RadioGroup.Label>Buscar:</RadioGroup.Label>
            <div className="flex gap-3 w-full items-center">
              {searchItens.map((item, key) => {
                return (
                  <RadioGroup.Option key={key} value={item.value}>
                    {({ checked }) => (
                      <span 
                        className={
                          checked
                            ? "text-brand-500 underline decoration-solid"
                            : "hover:cursor-pointer items-center"
                        }
                      >
                        {item.label}
                      </span>
                    )}
                  </RadioGroup.Option>
                );
              })}
              <div className="grow flex justify-center item-center gap-2">
                <input
                  className="bg-zinc-800 rounded-sm w-10/12 text-center  focus:outline-none focus:opacity-90 focus:outline-brand-500 "
                  placeholder={`Pesquisar: ${String(radioItem).toUpperCase()}`}               
                />
                <button className="btn">Novo</button>
              </div>
            </div>
          </RadioGroup>
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
              {fornecedores?.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Data>{item.nome}</Table.Data>
                  <Table.Data>{item.cnpj}</Table.Data>
                  <Table.Data>{item.cep}</Table.Data>
                  <Table.Data className="max-w-[5rem] shrink text-center">
                    <Table.DetailsButton
                      onClick={() => console.log(item)}
                    />
           
                  </Table.Data>
                  <Table.Data className="max-w-[5rem] shrink text-center">
                    <Table.DeleteButton
                      onClick={() => console.log(item.cnpj)}
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
