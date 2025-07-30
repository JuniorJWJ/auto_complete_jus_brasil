# Relato do Desenvolvimento

Este documento detalha o processo de desenvolvimento de um projeto, abordando as tecnologias utilizadas, os desafios enfrentados e as soluções implementadas.

## 1. Primeiro Contato com GraphQL

Ao iniciar o desafio, percebi a necessidade de utilizar GraphQL, uma tecnologia que até então era desconhecida para mim. Iniciei com pesquisas em vídeos introdutórios e, posteriormente, aprofundei meus estudos na documentação oficial. Recorri também a assistentes de IA (como ChatGPT e DeepSeek) para esclarecer dúvidas e obter exemplos práticos, o que me auxiliou a compreender as principais diferenças entre APIs REST e GraphQL.

## 2. Estrutura Inicial e Backend

Com o conceito mais claro, estruturei o projeto utilizando Docker e, em seguida, foquei no desenvolvimento do backend. Optei por Node.js com TypeScript, uma stack com a qual já possuo domínio, facilitando essa etapa. Criei algumas palavras de exemplo para o sistema e implementei as regras de negócio diretamente nos resolvers do GraphQL.

## 3. Experiência com GraphQL

Durante o desenvolvimento, consultei diversas referências e utilizei a IA como apoio. Consderei o GraphQL prático e flexível, representando uma ótima novidade. Embora diferente, apresenta semelhanças com o modelo REST em termos de estrutura geral de comunicação entre cliente e servidor.

## 4. Desafios com Docker

Enfrentei certa dificuldade com o Docker, pois era uma tecnologia relativamente nova para mim. A instalação e configuração foram realizadas com o auxílio de comandos sugeridos por IAs e documentação. Após algumas tentativas e ajustes, consegui montar o ambiente corretamente.

## 5. Primeiro Commit e Início do Frontend

Após o primeiro commit do backend para o Git, iniciei o desenvolvimento do frontend. Escolhi React como framework e apliquei o padrão de Atomic Design, uma metodologia que aprendi recentemente e considero útil para manter uma estrutura de código bem organizada.

## 6. Implementação do Frontend com Atomic Design

No frontend, foram criados os seguintes componentes:

*   **Átomos:** `HighlightText`, `Input`, `Loader`
*   **Moléculas:** `SuggestionItem`
*   **Organismos:** `AutoComplete`

Inicialmente, planejei usar uma pasta `template`, mas enfrentei problemas de formatação (possivelmente relacionados ao nome do diretório). Como alternativa, criei a pasta `Screen` para estruturar a tela principal.

## 7. Testes e Ajustes

Mantive o desenvolvimento simples e funcional, utilizando boas referências e reaproveitando o que fosse viável. No entanto, enfrentei um problema de sincronização entre os arquivos e o Docker — as alterações não estavam sendo refletidas automaticamente. Como solução temporária, passei a rodar o backend manualmente fora do container até resolver essa questão.

## 8. Ajustes de Layout no Frontend

Para exibir apenas 10 sugestões na lista, ajustei o `height` dos itens "no olho", o que não considero a melhor abordagem. Uma possível melhoria futura seria definir uma altura fixa e calcular a exibição com base nisso, tornando o layout mais consistente em diferentes dispositivos.

## 9. Status Atual e Próximos Passos

No segundo commit, o sistema já está funcional. Ainda planejo incluir alguns ajustes, como:

*   Um botão para limpar o campo de input.
*   Escrita e execução de testes automatizados.

## 10. Formatação do texto 

Escrevi um texto explicativo e solicitei ao ChatGPT que o revisasse para melhorar a escrita e adequá-lo ao padrão de formatação Markdown (`.md`). O objetivo foi torná-lo mais claro, organizado e com uma linguagem mais fluida e profissional.