import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

// Define o esquema de validação para o formulário usando Yup.
// Especifica que o campo 'email' deve ser um endereço de e-mail válido e não pode estar vazio.
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Endereço de e-mail inválido")  // Mensagem de erro para e-mail inválido.
    .required("Campo obrigatorio - Este campo não pode ficar vazio")  // Mensagem de erro para campo vazio.
});

export default function FormularioEmail() {
  return (
    <>
      <div>
        <h1>Formulário De E-mail</h1>
        <Formik
          // Define o valor inicial do estado formulário.
          initialValues={{ email: "" }}

          // Função chamada ao submeter o formulário.
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}

          // Passa o esquema de validação para o Formik.
          validationSchema={validationSchema}
        >
          {/* Renderiza o formulário usando o componente Formik */}
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                {/* Campo de entrada para o e-mail. Utiliza o componente Field do Formik */}
                <Field type="email" name="email" className="input" />

                {/* Utiliza o componente ErrorMessage do Formik para mostrar mensagens de erro. */}
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <button type="submit" className="button">Enviar</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}
