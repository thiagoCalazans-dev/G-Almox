import { FloppyDisk, MagnifyingGlass } from "phosphor-react";
import { Fornecedor } from "../../interfaces/Fornecedores";
import * as Yup from "yup";
import { FormField } from "../FormField";
import { Button } from "../Button";
import api from "../../services/api";
import { Form, Formik, FormikState } from "formik";
import { useEffect, useState } from "react";

type Props = {
  onCreate: (value: Fornecedor) => Promise<void>;
  onUpdate: (value: Fornecedor, cpnj:string) => Promise<void>;
};

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

export const schema = Yup.object().shape({
  id: Yup.number(),
  nome: Yup.string().required("Campo obrigatório"),
  cnpj: Yup.string().length(14, "Cnpj inválido").required("Campo obrigatório "),
  cep: Yup.string()
    .min(8, "CEP Inválido")
    .max(10, "CEP Inválido")
    .required("Campo obrigatório"),
  cidade: Yup.string().required("Campo obrigatório"),
  estado: Yup.string().required("Campo obrigatório"),
  endereco: Yup.string().required("Campo obrigatório"),
  bairro: Yup.string().required("Campo obrigatório"),
  numero: Yup.string().required("Campo obrigatório"),
  complemento: Yup.string(),
});

export const FormFornecedor = ({ onCreate, onUpdate }: Props) => {

  const [isCNPJExists, setIsCNPJExists] = useState(false)

  const handleSubmit = async (
    values: Fornecedor,
    resetForm: (nextState?: Partial<FormikState<Fornecedor>>) => void
  ) => {
    if (isCNPJExists) {
    try {
      await onUpdate(values, values.cnpj);
      console.log()
      resetForm({ values: initialValues });
    } catch (err) {
      console.log(err);
    }
  }
    else {
      try {
        await onCreate(values);
        resetForm({ values: initialValues });
      } catch (err) {
        console.log(err);
      }
    }
  };


  const findFornecedor = async (cnpj: string, setFieldValue: any) => {
    await api.get(`fornecedores/${cnpj}`).then((res) => {
      const { nome, cnpj, cep, bairro, cidade, endereco, numero, complemento } =
        res.data;
        setIsCNPJExists(true)
        setFieldValue("nome", nome)
        setFieldValue("cnpj", cnpj)
        setFieldValue("cep", cep)
        setFieldValue("bairro", bairro)
        setFieldValue("cidade", cidade)
        setFieldValue("complemento", complemento)
        setFieldValue("endereco", endereco)
        setFieldValue("numero", numero)
    });
  };

  const handleClickSearchCEP = (values: Fornecedor, setFieldValue: any) => {
    const cep = values.cep.replace(/[^0-9]/g, "");
    if (cep.length !== 8) return;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("endereco", data.logradouro);
        setFieldValue("bairro", data.bairro);
        setFieldValue("cidade", data.localidade);
        setFieldValue("estado", data.uf);
      });
  };

  return (
    <>
      <div className="flex flex-col justify-center w-full h-full">
        <Formik
          validationSchema={schema}
          initialValues={initialValues}
          onSubmit={(values, { resetForm }) => {
            handleSubmit(values, resetForm);
          }}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="mx-auto  w-5/6 h-5/6 bg-zinc-800 shadow-sm shadow-zinc-800 rounded-xl flex flex-col items-center gap-3 overflow-y-auto scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin lg:w-auto lg:overflow-hidden lg:h-auto">
              <h2 className="w-full text-center text-4xl mt-4 font-bold">
                Cadastro
              </h2>
              <div className="flex flex-col justify-between h-full w-5/6 gap-2">
                <div>
                  <FormField
                    label="CNPJ"
                    type="text"
                    name="cnpj"
                    placeholder="CPNJ: XX.XXX/XXXX-XX"
                    onBlur={() => findFornecedor(values.cnpj, setFieldValue)}
                  />
                  <FormField
                    label="Nome"
                    type="text"
                    name="nome"
                    placeholder="Nome"
                  />
                  <div className="flex gap-2 items-end lg:flex-col ">
                    <FormField
                      label="CEP"
                      type="text"
                      name="cep"
                      placeholder="CEP: XXXXX-XX"
                      button={
                        <Button
                          type="button"
                          onClick={() =>
                            handleClickSearchCEP(values, setFieldValue)
                          }
                          className="w-auto flex items-end justify-center px-8 text-xl bg-brand-500 hover:bg-brand-100 text-white py-2 rounded-md transition duration-100 lg:w-full"
                        >
                          <MagnifyingGlass size={20} />
                        </Button>
                      }
                    />
                  </div>
                  <div className="flex gap-2">
                    <div className="w-2/3">
                      <FormField
                        label="Cidade"
                        type="text"
                        name="cidade"
                        placeholder="Cidade"
                      />
                    </div>
                    <div className="w-1/3">
                      <FormField
                        label="Estado"
                        type="text"
                        name="estado"
                        placeholder="Estado"
                      />
                    </div>
                  </div>
                  <FormField
                    label="Endereço"
                    type="text"
                    name="endereco"
                    placeholder="Endereço"
                  />
                  <FormField
                    label="Bairro"
                    type="text"
                    name="bairro"
                    placeholder="bairro "
                  />
                  <div className="flex gap-2">
                    <div className="w-1/4">
                      <FormField
                        label="Número"
                        type="text"
                        name="numero"
                        placeholder="Nº"
                      />
                    </div>
                    <div className="grow">
                      <FormField
                        label="Complemento"
                        type="text"
                        name="complemento"
                        placeholder="Complemento"
                      />
                    </div>
                  </div>
                </div>
                <div className="pb-4">
                {isCNPJExists ?
                  <Button type="submit" disabled={isSubmitting} text="Salvar">
                     Alterar <FloppyDisk size={24} color="#ffffff" />
                   </Button> :
                  <Button type="submit" disabled={isSubmitting} text="Salvar">
                     Salvar <FloppyDisk size={24} color="#ffffff" />
                  </Button>}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
