import { Form, Formik, FormikState } from "formik";
import { Produto } from "../../interfaces/Produto";
import { FormField } from "../FormField";
import * as Yup from "yup";
import { Button } from "../Button";



type Props = {
  closeOnSubmit: () => void
}
const initialValues = {
  id: 0,
  nome: "",
  unidade: "",
};




export const FormProduto = ({closeOnSubmit}: Props) => {
  const schema = Yup.object().shape({
    nome: Yup.string().required("Campo obrigatório"),
    unidade: Yup.string().required("Campo obrigatório "),
  });

  const handleSubmit = (
    values: Produto,
    resetForm: (nextState?: Partial<FormikState<Produto>>) => void
  ) => {
    console.log(values);
    resetForm({ values: initialValues });
    closeOnSubmit()
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
            <Form className="mx-auto flex flex-col items-center gap-3">
              <FormField
                label="Nome"
                type="text"
                name="nome"
                placeholder="Nome"
              />
              <FormField
                label="Unidade"
                type="text"
                name="unidade"
                placeholder="Unidade"
              />
              <Button type="submit">Cadastrar</Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
