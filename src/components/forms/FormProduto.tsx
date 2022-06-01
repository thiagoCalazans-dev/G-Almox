import { Form, Formik, FormikState } from "formik";
import { Produto } from "../../interfaces/Produto";
import * as Yup from "yup";
import { useForm, SubmitHandler  } from "react-hook-form";

interface IProps {
  closeOnSubmit: () => void
}

interface IProdutoForm {
  nome: string
  unidade: string
}




export const FormProduto = ({closeOnSubmit}: IProps) => {
  const schema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    unidade: Yup.string().required("Campo obrigatório "),
  });

  const {handleSubmit, register} = useForm<IProdutoForm>()



  const onSubmit: SubmitHandler<IProdutoForm> = data => console.log(data);
  

  return (
    <>
      <div className="flex flex-col justify-center w-full h-full">    
            <form onSubmit={handleSubmit(onSubmit)}className="mx-auto flex flex-col items-center gap-3">
              <input  
                className="input"            
                type="text"                
                placeholder="Nome"
                {...register("unidade")}            
              />
              <input
                className="input"
                type="text"               
                placeholder="Unidade"
                {...register("unidade")}
              />
              <button className="btn" type="submit">Cadastrar</button>
            </form>         
        </div>
    </>
  );
};
