import { FloppyDisk, MagnifyingGlass } from "phosphor-react";
import { Fornecedor } from "../../interfaces/Fornecedor";
import * as Yup from "yup";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { FornecedorContext } from "../../contexts/FornecedorContext";


type Props = {
  onSubmit: (value: Fornecedor) => Promise<void>;
};

// export const validationSchema = Yup.object().shape({
//   id: Yup.number(),
//   nome: Yup.string().required("Campo obrigatório"),
//   cnpj: Yup.string().length(14, "Cnpj inválido").required("Campo obrigatório "),
//   cep: Yup.string()
//     .min(8, "CEP Inválido")
//     .max(10, "CEP Inválido")
//     .required("Campo obrigatório"),
//   cidade: Yup.string().required("Campo obrigatório"),
//   estado: Yup.string().required("Campo obrigatório"),
//   endereco: Yup.string().required("Campo obrigatório"),
//   bairro: Yup.string().required("Campo obrigatório"),
//   numero: Yup.string().required("Campo obrigatório"),
//   complemento: Yup.string(),
// });

export const FormFornecedor = () => {
const {FormDefaultValues} = useContext(FornecedorContext);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: FormDefaultValues,
    // resolver: yupResolver(validationSchema),
  });
  
  const onSubmit = async (
    values: Fornecedor
  ) => {
    try {
      await onSubmit(values);    
    } catch (err) {
      console.log(err);
    }
  };

  const findFornecedor = async (cnpj: string, setFieldValue: any) => {
    await api.get(`fornecedores/${cnpj}`).then((res) => {
      if (res.status !== 200) {
        console.log(res);
      }
      console.log(res);
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
        <form className="mx-auto py-4 w-5/6 h-auto bg-zinc-800 shadow-sm shadow-zinc-800 rounded-xl flex flex-col items-center gap-3 overflow-y-auto scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin lg:w-auto lg:overflow-hidden lg:h-auto">
          <h2 className="w-full text-center text-4xl font-bold">
            Cadastro
          </h2>
          <div className="flex flex-col gap-y-1 h-full w-5/6 p-4">
            <label className="label">CPNJ:</label>
            <input
              className="input"
              type="text"
              name="cnpj"
              placeholder="CPNJ: XX.XXX/XXXX-XX"
            />
            <label className="label">Nome:</label>
            <input
              className="input"
              type="text"
              name="nome"
              placeholder="Nome"
            />          
              <label className="label">CEP:</label>
              <div className="flex gap-2 items-end lg:flex-col ">
              <input
                className="input"
                type="text"
                name="cep"
                placeholder="CEP: XXXXX-XX"
              />
              <button type="button" className="btn">
                <MagnifyingGlass size={20} />
              </button>
            </div>
            <div className="flex gap-2">
              <div className="w-2/3">
                <label className="label">Cidade:</label>
                <input
                  className="input"
                  type="text"
                  name="cidade"
                  placeholder="Cidade"
                />
              </div>
              <div className="w-1/3">
              <label className="label">Estado:</label>
                <input
                  className="input"
                  type="text"
                  name="estado"
                  placeholder="Estado"
                />
              </div>
            </div>
            <label className="label">Endereço:</label>
            <input
              className="input"
              type="text"
              name="endereco"
              placeholder="Endereço"
            />
               <label className="label">Bairro:</label>
            <input
              className="input"
              type="text"
              name="bairro"
              placeholder="bairro "
            />
            <div className="flex gap-2">
              <div className="w-1/4">
              <label className="label">Nº:</label>
                <input
                  className="input"
                  type="text"
                  name="numero"
                  placeholder="Nº"
                />
              </div>
              <div className="grow">
              <label className="label">Complemento:</label>
                <input
                  className="input"
                  type="text"
                  name="complemento"
                  placeholder="Complemento"
                />
              </div>
            </div>
            <button className="btn flex mt-4 gap-1 justify-center" type="submit">
              Salvar <FloppyDisk size={24} color="#ffffff" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
function yupResolver(validationSchema: any): import("react-hook-form").Resolver<any, any> | undefined {
  throw new Error("Function not implemented.");
}

