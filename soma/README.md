<h1>Documentação da Página de Soma</h1>
    
<h2>Descrição</h2>
    <p>
        Esta página permite ao usuário inserir dois números em um formulário e, ao submeter o formulário, exibe a soma desses dois números. A página é construída usando Next.js e estilizada com Tailwind CSS.
    </p>

<h2>Estrutura</h2>
    <p>
        A página consiste em um formulário com dois campos de entrada para números e um botão de submissão. Ao submeter o formulário, o resultado da soma dos números inseridos é exibido na mesma página.
    </p>

<h2>Lógica Utilizada</h2>

<h3>1. Gerenciamento de Estado</h3>
    <p>
        A página usa o hook <code>useState</code> do React para gerenciar o estado dos valores dos inputs e o resultado da soma.
        Três estados são utilizados:
    </p>
    <ul>
        <li>Um para armazenar o valor do primeiro número (<code>num1</code>).</li>
        <li>Um para armazenar o valor do segundo número (<code>num2</code>).</li>
        <li>Um para armazenar o resultado da soma ou uma mensagem de erro (<code>soma</code>).</li>
    </ul>

<h3>2. Manipulação do Formulário</h3>
    <p>
        Quando o formulário é submetido, a função associada ao evento de submissão é chamada.
        Esta função previne o comportamento padrão do formulário (que seria recarregar a página).
        Os valores dos campos de entrada são convertidos para números. Se ambos os valores forem números válidos, a soma é calculada.
        Caso contrário, é exibida uma mensagem solicitando que o usuário insira números válidos.
    </p>

<h3>3. Exibição dos Resultados</h3>
    <p>
        Após o cálculo, o resultado da soma ou a mensagem de erro é exibido abaixo do formulário.
        A exibição do resultado é condicional, ou seja, só aparece se houver um valor definido para o resultado da soma.
    </p>

<h2>Conclusão</h2>
    <p>
        A página foi projetada para ser simples, permitindo ao usuário realizar uma operação básica de soma de forma direta e clara.
    </p>

