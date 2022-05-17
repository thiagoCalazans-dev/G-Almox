import { ErrorMessage, Field, Form, Formik } from "formik";
import { FloppyDisk } from "phosphor-react";
import { Fornecedores } from "../../interfaces/Fornecedores";
import * as Yup from "yup";
import { FormField } from "../FormField";

type Props = {
  onSubmit: (formValues: Fornecedores) => void;
};

const schema = Yup.object().shape({
  id: Yup.number(),
  nome: Yup.string().required("Campo obrigatório"),
  cnpj: Yup.string()
  .length(14, "Cnpj inválido")  
  .required("Campo obrigatório ")

});

export const FormCadFornecedor = ({ onSubmit }: Props) => {
  const handleSubmit = (values: Fornecedores) => {
      console.log(values)
      onSubmit(values)      
  }
  
  return (
    <>
      <div className="flex flex-col justify-center w-full h-full">
        <Formik
          validationSchema={schema}
          initialValues={{
            id: 0,
            nome: "",
            cnpj: "",
            cep: "",
            cidade: "",
            endereco: "",
            numero: "",
            complemento: "",
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="mx-auto w-5/6 h-5/6 bg-zinc-800 shadow-sm shadow-zinc-800 rounded-xl flex flex-col items-center gap-3">
              <h2 className="w-full text-center text-4xl mt-4 font-bold">
                Cadastro
              </h2>
              <div className="flex flex-col justify-between h-full w-5/6">
                <div>
                  <FormField
                    label="Nome"
                    type="text"
                    name="nome"
                    placeholder="Nome"
                  />
                  <FormField
                    label="CNPJ"
                    type="text"
                    name="cnpj"
                    placeholder="CPNJ"
                  />
                  <div className="">
                    <FormField
                      label="CEP"
                      type="text"
                      name="cep"
                      placeholder="CEP"
                    />
                  </div>
                  <div className="w-auto">
                    <FormField
                      label="Cidade"
                      type="text"
                      name="cidade"
                      placeholder="Cidade"
                    />
                  </div>
                  <FormField
                    label="Endereço"
                    type="text"
                    name="endereco"
                    placeholder="Endereço"
                  />
                  <div className="flex mt-2 items-center gap-2">
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
                  <button
                    className="flex gap-2 items-center justify-center px-8 text-xl mt-4 w-full bg-brand-500 hover:bg-brand-100 text-white py-2 rounded-md transition duration-100"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Salvar <FloppyDisk size={24} color="#ffffff" />
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
