## 🛸 Rick and Morty Wanted

Projeto autoral desenvolvido para fins de estudo, com o objetivo de praticar consumo de API, componentização em React e boas práticas de desenvolvimento front-end usando TypeScript.

Link para teste https://rick-and-morty-wanted.vercel.app/

### 🧪 Tecnologias utilizadas

- React
- TypeScript
- HTML5 semântico
- CSS3
- [Rick and Morty API](https://rickandmortyapi.com/) (API pública)

### ⚙️ Funcionalidades (v1)

- **Home**: página principal da aplicação, acessível a qualquer momento pelo link "Home" na navbar
- **Busca de personagens**: campo de input onde o usuário digita o nome (ou parte do nome) de um personagem
- **Listagem de resultados**: exibe todos os personagens cujo nome corresponde à busca, com seus dados (nome, status, espécie, gênero, origem, localização e imagem)
- **Tratamento de erro**: página/mensagem de erro exibida quando nenhum personagem é encontrado com o nome pesquisado

### 🎨 Estilização

A v1 utiliza um CSS inicial, funcional mas ainda simples. Refinamentos visuais (paleta de cores, tipografia, responsividade e identidade visual mais elaborada) estão planejados para versões futuras.

### 🐛 Limitação conhecida (a ser corrigida na v2)

Atualmente, a busca retorna **apenas a primeira página** de resultados da API. A Rick and Morty API já possui um sistema de paginação nativo (`info.next` / `info.prev`), que ainda não foi implementado nesta versão — ou seja, buscas com muitos resultados não exibem a lista completa. Essa é a principal melhoria planejada para a v2.

### 🗺️ Roadmap (próximas versões)

- [ ] Implementar paginação completa dos resultados da API
- [ ] Refinar identidade visual (paleta, tipografia, responsividade)
- [ ] Página de detalhes por personagem
- [ ] Implementação da escolha de idioma (inglês, espanhol e português)
- [ ] Possibilidade de favoritar um ou mais personagens
- [ ] Compatibilidade com diferentes tamanhos de tela

### 📎 Créditos e referências

Este projeto utiliza assets e recursos de terceiros, listados abaixo com os devidos créditos:

- **Ícone do site**: [Rick and Morty Icons — Icons8](https://icons8.com.br/icons/set/rick-e-morty)
- **Imagem do título (logo)**: [Rick and Morty logo — Wikimedia Commons](https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg)
- **Fontes**:
  - [Get Schwifty, por Jonizaak — DeviantArt](https://www.deviantart.com/jonizaak/art/Get-Schwifty-A-Rick-and-Morty-font-638073728)
  - [Bangers — Google Fonts](https://fonts.google.com/specimen/Bangers)
- **Dados dos personagens**: [Rick and Morty API](https://rickandmortyapi.com/)

*Rick and Morty é uma propriedade intelectual da Adult Swim. Este é um projeto não-comercial, feito exclusivamente para fins de estudo e portfólio.*
