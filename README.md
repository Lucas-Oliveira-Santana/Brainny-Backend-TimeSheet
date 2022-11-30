<h1> Brainny Backend TimeSheet </h1>
This challenge was proposed for a backend developer position, where a TimeSheet should be created.


## Requirements:

Before start, you'l need install: [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) , [NodeJs](https://nodejs.org/en/download/), [Docker](https://docs.docker.com/engine/install/) , [Docker-compose](https://docs.docker.com/compose/install/)


## Runing Local
To run the project, follow the next steps:

## Clone Repository

```bash
 git clone https://github.com/Lucas-Oliveira-Santana/Brainny-Backend-TimeSheet.git
 
 cd Brainny-Backend-TimeSheet
```

## Install dependecies 
```bash
 npm install

 ```
 
 ## Docker up
  ```bash
  sudo docker-compose up -d
  ```
  
 ## Run Migrations

 ```bash
 npm run typeorm migration:run
 ```
 
 ## Server up
 
 ```bash
 npm run dev
 ```
 
 
 
 # Routes
  
  Create a new user, if your want add a new admin, you should put "isAdmin":true
  ```bash
  http://localhost:2222/users
  
  
  Example:
    {
      "email":"Lucas@gmail.com",
      "password":"lucas123"
    }
    
    for create a admin
    
    {
      "email":"Pedro@gmail.com",
      "password":"Pedro123",
      "isAdmin":true
    }
  
   ```
   
   ![foto1](https://user-images.githubusercontent.com/107402924/204840779-f8f8db44-05f9-4089-be26-3cbd982eea21.png)
  
  
  Login and generate a jwt Token
  ```bash

  http://localhost:2222/users/login
  
  Example:
  
    {
      "email":"Lucas@gmail.com",
      "password":"lucas123"
    }
    
  ```
  
  ![foto2](https://user-images.githubusercontent.com/107402924/204841072-ab57d4d3-a447-483b-a6fc-4b72075889ab.png)
  
  To start a day
  
  ```bash
  http://localhost:2222/timeSheet/start
  
  
  You should put a token in Bearer Token route
  ```
  
  ![foto3](https://user-images.githubusercontent.com/107402924/204841144-618aa6a4-2a83-4947-b9ec-93a44da0d907.png)
  
  To end a day
  
  ```bash
  http://localhost:2222/timeSheet/end
  
  You should put a token in Bearer Token route
  ```
  
  ![foto4](https://user-images.githubusercontent.com/107402924/204841209-d8878faf-dd6c-4ca4-82e9-072598ab8e5a.png)
  
  List all registers in TimeSheet
  
  ```bash
  http://localhost:2222/timeSheet/list
  
  You should put a Admin token in Bearer Token route
  ```
  
  ![foto5](https://user-images.githubusercontent.com/107402924/204841300-2f3975c1-790a-4b37-9286-98bbdf7ff2e7.png)




## Technologies used
- [Typescript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/), [docker-compose](https://docs.docker.com/compose/)
- [TypeORM](https://typeorm.io/)
- [PostgresSQL](https://www.postgresql.org/)
- [JWT](https://jwt.io/)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs)
- [tsyringe](https://www.npmjs.com/package/tsyringe)




