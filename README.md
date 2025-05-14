# 📚 BookTrack

**BookTrack** é uma API RESTful desenvolvida com Node.js para gerenciar leituras de usuários. Com ela, é possível registrar livros, acompanhar seu progresso e avaliar os que já foram concluídos.

## 🚀 Tecnologias e Ferramentas

* Node.js
* Express
* Prisma ORM
* JWT (autenticação)
* Zod (validação)
* Morgan (logs)
* Esbuild / Esbuild-register
* Docker (opcional)
* Nodemon (dev)

## 🔧 Instruções para Execução

1. Clone o repositório:

```bash
git clone https://github.com/lvasconcelos20/BookTrack.git
cd server
```

2. Instale as dependências:

```bash
npm install
```

3. Configure o banco de dados:

* Configure o arquivo `.env` com sua URL de conexão do banco

4. Execute as migrations do Prisma:

```bash
npx prisma migrate dev --name init
```

5. Inicie a aplicação:

```bash
npm run dev 

```

## 📫 Exemplos de Rotas (via Postman/Insomnia)

### 🔐 Autenticação

* **GET** `/auth/user` - autenticação do usuário

### 📚 Livros

* **GET** `/books` - Lista todos os livros do usuário autenticado
* **PUT** `/books/:id` - Atualiza livro

### Usuários

* **GET** `/users` - Lista usuários

* **DELETE** `/users/:id` - Deleta usuário

