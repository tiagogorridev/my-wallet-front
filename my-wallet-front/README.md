# Versões

## Frontend
- Angular CLI: 16.2.16
- Node: 18.20.6
- Package Manager: npm 10.8.2

## Backend
- Java: 17

# Como rodar o projeto
## Pré-requisitos
- Para executar o projeto localmente, é necessário ter instalado:

- Java 17
- Node.js (versão 18.20.6)
- MySQL
- Angular CLI (versão 16.2.16)
- Maven

## Configuração do Banco de Dados
- Abra o MySQL Workbench ou terminal MySQL
- Execute os seguintes comandos SQL:


```sql
CREATE DATABASE mywallet;
USE mywallet;
```

## Instalação e execução
### Frontend
```bash
# Clone o repositório:
git clone https://github.com/tiagogorridev/my-wallet-front.git
cd my-wallet-front

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
ng s -o
```

### Backend
```bash
# Clone o repositório do backend:
git clone https://github.com/tiagogorridev/my-wallet-back.git
cd my-wallet-back
```

### Configure as variáveis de ambiente
```bash
export DB_URL=jdbc:mysql://localhost:3306/sistema_gerenciamento_bd
export DB_USERNAME=seu_usuario
export DB_PASSWORD=sua_senha
```

Alternativa: Crie um arquivo application.properties na pasta src/main/resources com o conteúdo:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/sistema_gerenciamento_bd
spring.datasource.username=seu_usuario
spring.datasource.password=sua_senha
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Compile e execute o backend
```bash
mvn clean install
mvn spring-boot:run
```

## Acesse a aplicação em seu navegador:
Frontend: http://localhost:4200

## Contato
Para mais informações, entre em contato:

Email: tiagogorri@gmail.com  
GitHub: tiagogorridev
