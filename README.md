# GitHub Profile Viewer

Visualizador simples de perfis do GitHub: busca dados do usuário e exibe até 10 repositórios.

## Descrição

Projeto front-end que consome a API pública do GitHub para mostrar informações básicas de um usuário (avatar, nome, bio, seguidores, seguindo) e uma lista de repositórios.

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)
- Fetch API (consumo da API do GitHub)

## Como executar

Opções rápidas:

- Abrir diretamente: basta abrir `index.html` no navegador (funciona na maioria dos navegadores modernos).
- Servir localmente (recomendado para evitar problemas de módulos):

```
# com Python 3
python -m http.server 8000

# ou com npm (instale o pacote 'serve' globalmente ou use npx)
npx serve .

# depois abra
http://localhost:8000
```

## Uso

1. Insira o nome de usuário do GitHub no campo de busca.
2. Pressione "Buscar".
3. O app exibirá os dados do perfil e até 10 repositórios (ordenados por criação).

Mensagens de feedback aparecem quando o usuário não é encontrado ou quando o campo está vazio.

## Observações

- A aplicação consome a API pública do GitHub sem autenticação; existem limites de taxa (60 requisições por hora por IP).
- Os repositórios exibidos são limitados a 10 (`per_page=10&sort=created`).

## Estrutura do projeto

```
index.html
README.md
src/
	css/
		animations.css
		reset.css
		responsive.css
		styles.css
		variables.css
	js/
		githubApi.js      # chamadas à API do GitHub
		index.js          # lógica do formulário e orquestração
		profileView.js    # renderização do DOM / mensagens de feedback
```
