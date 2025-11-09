# Tarefa 2 - Linguagem de Programação

## Descrição
Este projeto é uma aplicação desenvolvida em **TypeScript** como parte de uma tarefa acadêmica de linguagem de programação. O repositório contém um exemplo completo de projeto moderno com configurações de desenvolvimento.

## Tecnologias Utilizadas

- **TypeScript** - Linguagem de programação principal (100%)
- **Node.js** - Runtime JavaScript
- **Docker** - Containerização da aplicação
- **npm** - Gerenciador de pacotes

## Estrutura do Projeto

```
Tarefa2_LinguagemDeProgramacao/
├── src/                 # Código-fonte da aplicação
├── docker-compose.yml   # Configuração do Docker Compose
├── package.json         # Dependências do projeto
├── package-lock.json    # Lock de versões das dependências
├── tsconfig.json        # Configuração do TypeScript
├── .env.example         # Exemplo de variáveis de ambiente
├── .gitignore           # Arquivos ignorados pelo Git
└── README.md            # Este arquivo
```

## Como Executar

### Pré-requisitos
- Node.js instalado (versão 14 ou superior)
- npm ou yarn
- Docker (opcional, para execução em containers)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/FelipeDevRec/Tarefa2_LinguagemDeProgramacao.git
cd Tarefa2_LinguagemDeProgramacao
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env
```

### Execução Local

```bash
npm start
```

### Execução com Docker

```bash
docker-compose up
```

## Desenvolvimento

Para compilar o TypeScript:
```bash
npm run build
```

Para executar em modo de desenvolvimento:
```bash
npm run dev
```

## Contribuições

Este é um projeto de tarefa acadêmica. Para sugestões ou melhorias, sinta-se livre para abrir uma issue ou pull request.

## Autor
**Felipe Alves** - [GitHub Profile](https://github.com/FelipeDevRec)

## Licença
Este projeto está disponível sob licença pública. Consulte o arquivo LICENSE para mais detalhes.

---

**Status do Projeto:** ✅ Tarefa Concluída

**Última Atualização:** Novembro de 2025
