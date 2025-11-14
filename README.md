# Front-end: Avaliação Serviço

Parte front-end do projeto de **Avaliação de Serviço**


Este projeto foi construído com:
- React
- Typescript
- Tailwind
- Vite


## Como rodar o projeto?

Para rodar o projeto (front-end) basta utilizar os seguintes comandos:

```bash
npm i
npm run dev
```

Para que as requests para o backend funcionem, é necessário que:

1. Na pasta onde seu servidor apache está monitorando (normalmente `htdocs`) seja criada a pasta de nome `avaliaca-servico`
2. Dentro desta pasta você deve rodar um `git clone [url projeto]` de ambos os projetos.
3. Isto deve criar a seguinte estrutura de pasta

```bash
avaliacao-servico
|_ avaliacao-servico-backend
|_ avaliacao-servico-frontend
```

Tendo as pastas corretamente nomeadas e o servido xampp rodando na porta 80 (conforme listado no .env do projeto), será possível ao front fazer as requests pro back-end

Caso você não deseje necessariamente nomear as pastas deste jeito, basta trocar a variável `VITE_PATH_BACKEND` no .env para o path backend que você colocou o projeto.


