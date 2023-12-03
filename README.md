# Dockerized-Base-Fullstack-Application

Este é o repositório de uma aplicação full-stack, atentamente dockerizada e feita com o objetivo de ser utilizada de base para outros projetos. 
Contempla serviços front-end, back-end e banco de dados prontos para uso, apresentando um arquivo Docker Compose otimizado para uma inicialização simples e simultânea de todos os componentes.

## Sobre a aplicação

Esta é uma aplicação simples que se baseia em um **CRUD** de **animais marinhos**. 

No backend, está sendo montado cinco endpoints, seguindo o CRUD:
1. Create Animal
2. Read All Animals
3. Read One Animal   
4. Update Animal
5. Delete Animal

No nosso banco de dados **marine_animals**, temos a tabela **Animals** que guarda os animais com os seguintes atributos: `id`, `common_name`, `scientific_name`, `life_expectancy`, `habitat`

Já no frontend, temos componentes para cada operação do CRUD, que exibem os dados e se comunicam com a API para a execução das ações comandadas pelo usuário.

## Como subir e derrubar a aplicação

Para subir a aplicação, primeiro clone este projeto, e em seguida suba com o docker compose:

   ```python
    # rodando a aplicação em foreground
    docker-compose up
   ```
   ```python
    # rodando a aplicação em background
    docker-compose up -d
   ```

Você também pode usar o docker compose para parar e derrubar a aplicação:

   ```python
    docker-compose down
   ```

Caso você deseje entrar no container do BD para visualizar os dados, utilize o seguinte comando enquanto o container estiver em execução. A senha padrão é `docker`, definida na constante `MYSQL_ROOT_PASSWORD`, presente no arquivo `docker-compose.yml`.

   ```python
    docker exec -it <container_id> mysql -u root -p
   ```
