# Sobre o projeto
Este projeto foi desenvolvido durante o vídeo "Cypress: Teste de contrato com JSON Schema usando o Ajv (Another JSON Validator)", feito por Rodrigo Matola.
O vídeo pode ser acessado em https://youtu.be/ZBy5ijQakbU.
Durante este projeto, utilizei uma máquina com Windows 11, e todas as instalações/execuções foram feitas com o WSL 2, permitindo utilizar o Ubuntu 22.04 no próprio Windows.

## Pré-requisitos
1. Instalar NVM (para gerenciar versões do Node.js), Node.js e NPM:
    https://learn.microsoft.com/pt-br/windows/dev-environment/javascript/nodejs-on-wsl

    - Para instalar o NVM, execute o comando:
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash

    - Para verificar a instalação, execute o comando (possivelmente será necessário fechar e abrir o terminal para verificar a instalação):
        command -v nvm

    - Para verificar a versão do NVM instalada, execute o comando:
        nvm --version

    - Para verificar quais versões do Node estão instaladas, execute o comando:
        nvm ls

    - Para instalar as versões LTS atuais e estáveis do Node.js:
        nvm install --lts

    - Para instalar a versão atual do Node.js:
        nvm install node

    - Para verificar se o Node.js está instalado e a versão padrão atual: 
        node --version

    - Para verificar se o NPM está instalado: 
        npm --version

    - Para ver o caminho usado para as versões padrão:
        which npm

    - Para alterar a versão do Node.js que você deseja usar para um projeto:
        - Crie um diretório de projeto: 
            mkdir NodeTest
    
        - Insira o diretório:
            cd NodeTest. 
        
        - Em seguida, digite o comando para alternar para a versão atual: 
            nvm use node
        
        - Ou o comando, para alternar para a versão LTS:
            nvm use --lts
            
        - Para usar o número específico para qualquer versão adicional instalada, use o comando:
            nvm use v8.2.1

        - Para listar todas as versões disponíveis do Node.js, use o comando: 
            nvm ls-remote

2. Iniciar um projeto node com configuração padrão (ao final da execução, verifique que o arquivo package.json foi criado):
    npm init -y

3. Instalar Cypress:
    https://docs.cypress.io/guides/getting-started/installing-cypress

    - No diretório do projeto, executar o comando (ao final da execução, verifique que o cypress foi incluído no arquivo package.json como dependência):
        npm install cypress --save-dev
    
4. Instalar Ajv (Another JSON Validator):
    https://ajv.js.org/guide/getting-started.html#install

    - No diretório do projeto, executar o comando (ao final da execução, verifique que o ajv foi incluído no arquivo package.json como dependência):
        npm install ajv --save-dev

## Implementando o teste
1.  Utilizaremos esta aplicação:
    https://covid19-brazil-api-docs.vercel.app/

2. Acessar o link da aplicação, copiar o curl, importar no Insomnia ou Postman.
3. Executar o teste e copiar o Response.
4. Acessar o JSONschema:
    https://jsonschema.net/app/schemas/0
5. Colar o Response do passo 3 e, antes de submeter, alterar algumas configurações:
    - Em "Keywords", deixar apenas "$schema", "items", "properties", "required" e "type" selecionados.
    - Em "Array Rule", selecionar "First".
    - Salvar.
6. Submeter e copiar o JSON Schema gerado.
7. Acessar o Json Schema Validator:
    https://www.jsonschemavalidator.net/
8. Em "Select schema", informar o JSON Schema gerado no passo 6.
9. Em "Input JSON", informar o Response gerado no passo 3.
10. É esperada a mensagem "No errors found. JSON validates against the schema".
11. Iniciar o Cypress:
    npx cypress open

    Observação: Tive alguns problemas ao executar o comando acima. O primeiro problema resolvi instalando as dependências, conforme este artigo:
        https://docs.cypress.io/guides/continuous-integration/introduction#Dependencies

    O segundo problema (ERROR:gpu_memory_buffer_support_x11.cc(44)] dri3 extension not supported), consegui resolver através deste tutorial:
        https://shouv.medium.com/how-to-run-cypress-on-wsl2-989b83795fb6

12. No arquivo de schema do Cypress a validar (cypress/fixtures/covidSchema.json), informar o JSON Schema gerado no passo 6.