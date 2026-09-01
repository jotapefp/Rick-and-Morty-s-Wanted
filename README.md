## 🛸 Rick and Morty Wanted

Projeto autoral desenvolvido para fins de estudo, com o objetivo de praticar consumo de API, componentização em React e boas práticas de desenvolvimento front-end usando TypeScript.

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
