## Tecnologias utilizadas no projeto:

- TypeScript
- PostgreSQL
- Nodejs
- Docker
- ZOD

## Passo a passo para começar o projeto:

1. Certificar que tem o Node.js no seu sistema.
2. iniciar o projeto Node.js com TypeScript com o comando: 
    - `npm init y`
Isso criará o arquivo packge.json.

3. Instalar o TypeScript como uma dependência de desenvolvimento:
    - `npm install typescript --save-dev`

4. Criar o arquivo de configuração do TypeScript chamado `tsconfig.json` na raiz do projeto. E adicionar o seguinte conteúdo: 

        {
            "compilerOptions": {
                "target": "es2016",
                "experimentalDecorators": true,
                "emitDecoratorMetadata": true,
                "module": "commonjs",
                "esModuleInterop": true,
                "forceConsistentCasingInFileNames": true,
                "strict": true,
                "strictPropertyInitialization": false,
                "skipLibCheck": true,
                "outDir": "./dist",
                "rootDir": "./src"
            }
        }

Este arquivo contém as configurações necessárias para compilar o código TypeScript na pasta src e saída na pasta dist. Certifique-se de criar essas pastas em seu projeto.

5. Instale o typeorm e o ts-node-dev como dependência de desenvolvimento.
    - `npm install typeorm ts-node-dev --save-dev`

6. Instalar o driver de banco de dados para PostgreSQL.
    - `npm install pg`

7. Instalar também o reflect-metadata, que é a biblioteca usada internamente pelo typeorm:
    - `npm install reflect-metadata`

8. No package.json adicionar o script:
    
        "scripts": {
            "build": "tsc",
            "start:dev": "ts-node-dev src/index.ts"
        }
9. Instalar a biblioteca Zod para validação.
    - `npm install zod`



## Explicação da organização de pastas:

* Para manter o projeto organizado e escalável, é fundamental adotar uma estrutura de pastas bem definida. Com isso, a estrutura de pastas para o projeto seguirá sendo a seguinte:

        projeto-crm/
            ├── src/
            |   ├── controllers/
            |   |   ├── customerController.ts
            |   |   ├── taskController.ts
            |   ├── models/
            |   |   ├── customerModel.ts
            |   |   ├── taskModel.ts
            |   ├── repositories/
            |   |   ├── customerRepository.ts
            |   |   ├── taskRepository.ts
            |   ├── routes/
            |   |   ├── customerRoutes.ts
            |   |   ├── taskRoutes.ts
            |   |-- validators/
            |   |   |--customerValidator.ts
            |   ├── index.ts
            |   ├── data-source.ts
            ├── node_modules/
            ├── package.json
            ├── tsconfig.json
            |-- package-lock.json

### Detalhes das pastas:

- `controller/`: Aqui é para criar controladores para manipular solicitações relacionadas aos clientes (`customerController.ts`) e tarefas (`taskController.ts`). Esses controladores conterão as funções que lidam com as ações específicas para entidade, como criar, ler, atualizar e excluir.

- `models/`: Esta pasta conterá os modelos de dados que definem a estrutura das entidades do CRM. É necessári um modelo para os clientes (`customerModel.ts`) e outro para tarefas (`taskModel.ts`).

- `repositories/`: Acamada de repositório é responsável por realizar as operações  de leitura e gravação no banco de dados. É necessário a criação de um repositório para cada entidade: `customerRepository.ts` e tarefas (`taskRepository.ts`).

- `routes/`: Nesta pasta, será definida as rotas para o CRM. Será necessário a criação do arquivo para rodas de clientes (`customerRoutes.ts`) e para tarefas (`taskRoutes.ts`).

- `index.ts`: Este arquivo é responsável por configurar o aplicativo Express, conexão com o banco, adicionar middleware e definir as rotas principais.

- `data-source.ts`: Este arquivo é responsável por definir a sua conexão com o banco de dados.

Com esta estrutura, o projeto fica organizado em camadas distintas, facilitando a manutenção e a escalabilidade à medida que adiciona mais recursos ao aplicativo. Cada pasta e arquivo tem um proposito claro, ajudando a manter o código organizado e fácil de entender.

### Validação de dados: 
A validação dos dados de entrada é crucial para proteger a aplicação contra dados incorretos ou maliciosos. Isso ajuda a previnir erros, garantir a consistência dos dados e melhorar a segurança.
Por isso utilizei nessa aplicação o Zod, que é uma biblioteca de esquemas de validação em typescript, que fornece uma forma pratica e segura de validar os dados.
