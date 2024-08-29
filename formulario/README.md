<h1>Documentação do Componente FormularioEmail</h1>
    
<h2>Descrição</h2>
    <p>
        O componente <strong>FormularioEmail</strong> é um formulário que permite aos usuários inserir um endereço de e-mail. O formulário utiliza a biblioteca Formik para gerenciar o estado e a submissão dos dados, enquanto a biblioteca Yup é empregada para definir as regras de validação.
    </p>

<h2>Funcionamento</h2>

<h3>Importação de Dependências</h3>
    <ul>
        <li>O componente importa um arquivo de estilos CSS para estilizar o formulário.</li>
        <li>Utiliza a biblioteca Formik, que facilita o gerenciamento de formulários em React, incluindo a manipulação de valores e a gestão de erros.</li>
        <li>A biblioteca Yup é utilizada para definir um esquema de validação para garantir que o e-mail inserido seja válido.</li>
    </ul>

<h3>Validação do Formulário</h3>
    <p>
        Um esquema de validação é criado usando Yup, que especifica que o campo de e-mail deve ser um endereço de e-mail válido e não pode estar vazio. Se o e-mail inserido não atender a esses critérios, uma mensagem de erro será exibida.
    </p>

<h3>Configuração do Formulário</h3>
    <ul>
        <li>O componente inicializa o Formik com um valor inicial para o campo de e-mail, que é uma string vazia.</li>
        <li>Define uma função que é chamada quando o formulário é enviado. Esta função exibe um alerta com os valores do formulário em formato JSON.</li>
    </ul>

<h3>Renderização do Formulário</h3>
    <ul>
        <li>O componente renderiza um formulário com um campo para o e-mail e um botão de submissão.</li>
        <li>O campo de e-mail utiliza o componente <strong>Field</strong> do Formik, que conecta o campo de entrada ao gerenciamento de estado do Formik e à validação.</li>
        <li>Mensagens de erro são exibidas abaixo do campo de e-mail se o valor inserido não for válido ou se o campo estiver vazio.</li>
    </ul>
