# Jornada-FrontEnd

Este é um projeto React que utiliza a API Rick and Morty para exibir informações sobre os personagens.

## Tecnologias Utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- React.js + Vite
- JavaScript
- CSS3
- HTML5

## API e Endpoints
A API utilizada neste projeto é a [API Rick and Morty](https://rickandmortyapi.com/api/character/). Esta API retorna informações sobre os personagens do desenho animado Rick and Morty.

O endpoint utilizado para fazer um `GET` é o seguinte:

```javascript
const response = await fetch("https://rickandmortyapi.com/api/character/");
const json = await response.json();
const results = json.results;
```

## Como Baixar e Rodar o Projeto
Siga os passos abaixo para baixar e rodar este projeto em sua máquina:

1. Clone o repositório para a sua máquina local utilizando o comando `git clone https://github.com/leandrolima-dev/Jornada-FrontEnd.git`
2. Navegue até a pasta do projeto clonado utilizando o comando `cd Jornada-FrontEnd`
3. Instale todas as dependências necessárias utilizando o comando `npm install`
4. Inicie o servidor de desenvolvimento utilizando o comando `npm start`
5. O projeto agora deve estar rodando em `http://localhost:3000`

Por favor, note que você precisa ter o Node.js e o npm instalados em sua máquina para baixar e rodar este projeto. Se você não os tiver instalados, você pode baixá-los [aqui](https://nodejs.org/).

## Visualizando o Projeto na Vercel
Você também pode visualizar o projeto rodando na Vercel através do seguinte link: [https://jornada-front-end-ocean.vercel.app](https://jornada-front-end-ocean.vercel.app/)

## Imagens do Projeto
Aqui estão duas imagens da página do projeto rodando na Vercel e mostrando os personagens:

![Imagem 1](^i^)
![Imagem 2](^i^)
