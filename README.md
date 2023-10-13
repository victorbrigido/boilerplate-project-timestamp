# Timestamp Microservice

**Projeto: URL Shortener Microservice**

Este projeto é um microserviço de encurtamento de URLs construído com Node.js, Express.js e MongoDB. Ele fornece uma maneira simples de encurtar URLs longas em algo mais gerenciável e fácil de compartilhar.
![Captura de tela 2023-10-13 183759](https://github.com/victorbrigido/boilerplate-project-timestamp/assets/110338761/a87683b8-801c-4ccf-ab2e-d3a8f374a05d)


**Funcionalidades Principais:**

- Configuração do servidor Express para lidar com requisições HTTP.
- Integração com MongoDB para armazenar e gerenciar as URLs encurtadas.
- Utilização de dotenv para configurar variáveis de ambiente.
- Suporte a requisições POST e GET para encurtar e redirecionar URLs.

**Utilidade:**

Este projeto demonstra a implementação de um microserviço prático para encurtar URLs. Pode ser usado como um componente em projetos maiores ou como uma aplicação autônoma. A capacidade de encurtar URLs é útil em diversas situações, como em redes sociais, campanhas de marketing e outras atividades online.

**Instruções de Uso:**

1. Clone este repositório em seu ambiente local.
2. Execute `npm install` para instalar as dependências necessárias.
3. Configure as variáveis de ambiente no arquivo `.env`.
4. Certifique-se de ter um servidor MongoDB em execução ou forneça a URL do banco de dados no arquivo `.env`.
5. Inicie o servidor com o comando `node server.js` ou `npm start`.
6. Acesse a aplicação através do navegador web.

**Observações Adicionais:**

- O projeto utiliza o CORS para permitir requisições de diferentes origens.
- Os arquivos estáticos estão disponíveis na rota `/public`.
- Certifique-se de ter o Node.js, npm e MongoDB instalados em seu ambiente para executar este projeto.
- Este projeto pode ser facilmente hospedado em plataformas de nuvem como Heroku ou Netlify para torná-lo acessível na web.

**Tecnologias Utilizadas:**

- Node.js
- Express.js
- MongoDB
- CORS

**Licença:**

Este projeto é licenciado sob a MIT License - veja o arquivo [LICENSE](./LICENSE) para detalhes.



# Project: URL Shortener Microservice

This project is a URL shortening microservice built with Node.js, Express.js, and MongoDB. It provides a simple way to shorten long URLs into something more manageable and easy to share.

## Key Features

- Configuration of an Express server to handle HTTP requests.
- Integration with MongoDB to store and manage the shortened URLs.
- Use of dotenv to configure environment variables.
- Support for POST and GET requests to shorten and redirect URLs.

## Utility

This project demonstrates the implementation of a practical URL shortening microservice. It can be used as a component in larger projects or as a standalone application. The ability to shorten URLs is useful in various situations, such as on social media, marketing campaigns, and other online activities.

## Usage Instructions

1. Clone this repository to your local environment.
2. Run `npm install` to install the necessary dependencies.
3. Configure the environment variables in the `.env` file.
4. Make sure you have a running MongoDB server or provide the database URL in the `.env` file.
5. Start the server with the command `node server.js` or `npm start`.
6. Access the application through a web browser.

## Additional Notes

- The project uses CORS to allow requests from different origins.
- Static files are available at the `/public` route.
- Ensure you have Node.js, npm, and MongoDB installed in your environment to run this project.
- This project can be easily hosted on cloud platforms like Heroku or Netlify to make it accessible on the web.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- CORS

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

