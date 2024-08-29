<h1>Documentação do Counter e Teste</h1>

<h2>Instalação e Configuração</h2>
    <ol>
        <li><strong>Instale as dependências do projeto</strong></li>
        <p>Para garantir que todas as dependências necessárias estejam instaladas, execute o comando:</p>
        <pre><code>npm install</code></pre>

<li><strong>Execução dos Testes</strong></li>
        <p>Para rodar os testes e garantir que tudo está funcionando conforme o esperado, execute o comando:</p>
        <pre><code>npm test</code></pre>
    </ol>

<h2>Documentação do Componente e Testes</h2>

<h3>Criação do Componente</h3>
    <p>O componente <code>Counter.js</code> é um contador simples com dois botões:</p>
    <ul>
        <li><strong>Incrementar:</strong> Aumenta o valor do contador em 1.</li>
        <li><strong>Decrementar:</strong> Diminui o valor do contador em 1.</li>
    </ul>
    <p>O componente exibe o valor atual do contador e atualiza o valor quando os botões são clicados.</p>

<h3>Documentação dos Testes</h3>
    <p>No arquivo de teste para o componente <code>Counter.test.js</code>, os seguintes testes foram escritos:</p>

<ul>
        <li><strong>Teste de Incremento:</strong></li>
        <p>Este teste verifica se o contador inicia com o valor correto. Em seguida, simula um clique no botão de incremento e confirma se o valor do contador é atualizado para o novo valor esperado.</p>

<li><strong>Teste de Decremento:</strong></li>
        <p>Este teste verifica se o contador inicia com o valor correto. Em seguida, simula um clique no botão de decremento e confirma se o valor do contador é atualizado para o novo valor esperado.</p>
    </ul>
    <p>Cada teste utiliza o <strong>React Testing Library</strong> para renderizar o componente, interagir com ele e verificar o resultado.</p>

<h2>Pontos Importantes</h2>
    <ul>
        <li><strong>Configuração do Ambiente de Testes:</strong> Verifique se todas as dependências estão instaladas e configuradas corretamente para evitar problemas durante a execução dos testes.</li>
    </ul>
