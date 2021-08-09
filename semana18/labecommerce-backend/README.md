## PROJETO LABECOMMERCE

- Este é um projeto básico de Backend, utilizando Typescript, MySQL, além das bibliotecas knexJs e expressJs, desenvolvido para atender aos modelos REST API.

---
## DESCRIÇÃO DO PROJETO

- O projeto consiste em simular a metodologia CRUD na estruturação de Sistema E-Commerce,criando e acessando informações de usuários, produtos, viagens e compras feitas, sendo criado endpoints `GET` e `POST` para alimentar as demandas.

---
## DOCUMENTAÇÃO DE FUNCIONAMENTO

### LINK DA DOCUMENTAÇÃO NO POSTMAN: https://documenter.getpostman.com/view/15825773/Tzz4PeRJ

### `GET` All Users

`https://labecommerce-projeto.herokuapp.com/user`

- Este endpoint retorna todos os usuários registrados no sistema.
- São exibidos dos usuários seus `id`,`name`, `email` e respectivos `age` como resposta.

### Body
- `No Content`

### Headers
- `No Content`

### Path Variables
- `No content`

### Response Example
```
{
  "users": [
    {
      "id": "1.6281285616511747",
      "name": "teste",
      "email": "teste@teste.com",
      "age": 18
    },
    {
      "id": "1.628172276736768",
      "name": "teste2",
      "email": "teste2@teste.com",
      "age": 20
    }
  ]
}
```
### Validation Restrictions
- Não há restrições.

---
### `GET` All Products Ordered By Price

`https://labecommerce-projeto.herokuapp.com/product?order=`

- Este endpoint retorna todos os produtos do sistema ordenados pelo preço.
- Os produtos podem receber o tipo de ordenamento desejado (`ASC` para ascendente e `DESC` 
para descendente) por preço do produto.
- São exibidos dos produtos seus `id`,`name`, `description` e respectivos `price` como resposta.

### Body
- `No Content`

### Headers
- `No Content`

### Path Variables
- `No Content`

### Response Example
```
{
  "products": [
    {
      "id": "1.6281283732382985",
      "name": "produto",
      "description": "descrição",
      "price": 18.5
    },
    {
      "id": "1.6281762770675543",
      "name": "trip",
      "description": "descrição",
      "price": 25
    },
    {
      "id": "1.6281763134581866",
      "name": "trip2",
      "description": "descrição",
      "price": 2500
    }
  ]
}
```
### Validation Restrictions
- A query param `order` recebe apenas valores `ASC`, para ordenamento ascendente, e `DESC`, para
ordenamento descendente, como valores válidos. Caso nenhum valor seja fornecido, ou algum valor
diferente destes seja enviado, o ordenamento padrão será definido como ascendente `ASC`.

---
### `GET` All Trips

`https://labecommerce-projeto.herokuapp.com/trip`

- Este endpoint retorna todas as viagens registradas no sistema.
- São exibidos dos produtos seus `id`,`name`, `description` e respectivos `price` como resposta, além
dos campos obrigatórios `origin` e `destination` (apenas em viagens).

### Body
- `No Content`

### Headers
- `No Content`

### Path Variables
- `No Content`

### Response Example
```
{
  "trips": [
    {
      "id": "1.6281762770675543",
      "name": "trip",
      "description": "descrição",
      "price": 25,
      "origin": "Paris",
      "destination": "Lisboa"
    },
    {
      "id": "1.6281763134581866",
      "name": "trip2",
      "description": "descrição",
      "price": 2500,
      "origin": "Bogotá",
      "destination": "Camboja"
    }
  ]
}
```
### Validation Restrictions
- Não há restrições.

---
### `GET` All Purchases

`https://labecommerce-projeto.herokuapp.com/purchase`

- Este endpoint retorna todos as compras registradas no sistema.
- A busca é feita através do query param `description`.
- São exibidos dos estudantes seus `name` e respectivos `id` como resposta.
- É exibido também o nome do hobby de busca.

### Body
- `No Content`

### Headers
- `No Content`

### Query Variables
- `No Content`

### Response Example
```
{
  "purchases": [
    {
      "id": "1.6282569448094355",
      "user_id": "1.6281285616511747",
      "product_id": "1.6281283732382985",
      "quantity": 2,
      "total_price": 18.5
    },
    {
      "id": "1.6282571227781966",
      "user_id": "1.6281285616511747",
      "product_id": "1.6281283732382985",
      "quantity": 5,
      "total_price": 92.5
    }
  ]
}
```
### Validation Restrictions
- Não há restrições.

---
### `GET` All Purchases By UserId

`https://labecommerce-projeto.herokuapp.com/purchase/:userId`

- Este endpoint busca todas as compras feitos por um usuário.
- É necessário passar o `userId` como query params.
- São exibidos o `id` de registro da compra, o `user_id`, o `product_id`,
a `quantity` e o `total_price` como resposta.

### Body
- `No Content`

### Headers
- `No Content`

### Path Variables
- userId 1.6281285616511747

### Response Example
```
{
  "purchases": [
    {
      "id": "1.6282569448094355",
      "user_id": "1.6281285616511747",
      "product_id": "1.6281283732382985",
      "quantity": 2,
      "total_price": 18.5
    },
    {
      "id": "1.6282571227781966",
      "user_id": "1.6281285616511747",
      "product_id": "1.6281283732382985",
      "quantity": 5,
      "total_price": 92.5
    }
  ]
}
```

### Validation Restrictions
- `userId` deve ser um valor válido de registro. Caso não, será enviado uma lista de compras vazia.

---
### `POST` New User

`https://labecommerce-projeto.herokuapp.com/user`

- Este endpoint cria um novo usuário no sistema.

### Body
```
{
    "name": "nome",
    "email": "nome@email.com",
    "age": 25
}
```

### Headers
```
    Content-Type: application/json
```

### Path Variables
- `No Content`

### Response Example
```
{
  "message": "User created successfully!" 
}
```
### Validation Restrictions
- `name`, `email` e `age` são campos obrigatórios.
- `email` deve ser um campo único.
- `age` deve ser inserido como `number type`. Demais campos, são da forma `string type`.
- `email` deve ser inserido no formato `xxxx@yyyyy.zzz.www`.
- `id` do usuário é criado pelo próprio código.

---
### `POST` New Product

`https://labecommerce-projeto.herokuapp.com/product`

- Este endpoint cria um novo produto no sistema.

### Body
```
{
    "name": "produto",
    "description": "descrição",
    "price": 18.50
}
```

### Headers
```
    Content-Type: application/json
```

### Path Variables
- `No Content`

### Response Example
```
{
  "message": "Product created successfully!" 
}
```
### Validation Restrictions
- `name`, `description` e `price` são campos obrigatórios.
- `name` deve ser um campo único.
- `price` deve ser inserido como `number type`. Demais campos, são da forma `string type`.
- `id` do usuário é criado pelo próprio código.

---
### `POST` New Trip

`https://labecommerce-projeto.herokuapp.com/trip`

- Este endpoint cria uma nova viagem no sistema.

### Body
```
{
    "name": "name",
    "description": "descrição",
    "price": 2500.00,
    "origin": "Roma",
    "destination": "Orlando"
}
```

### Headers
```
    Content-Type: application/json
```

### Path Variables
- `No Content`

### Response Example
```
{
  "message": "Trip created successfully!" 
}
```
### Validation Restrictions
- `name`, `description`,`price`, `origin` e `destination` são campos obrigatórios.
- `name` deve ser um campo único.
- `price` deve ser inserido como `number type`. Demais campos, são da forma `string type`.
- `id` do usuário é criado pelo próprio código.

---
### `POST` New Purchase

`https://labecommerce-projeto.herokuapp.com/purchase`

-  Este endpoint cria uma nova compra no sistema por um usuário.

### Body
```
{
    "userId": "1.6281285616511747",
    "productId": "1.6281283732382985",
    "quantity": 5
}
```

### Headers
```
    Content-Type: application/json
```

### Path Variables
- `No Content`

### Response Example
```
{
  "message": "Teacher associated to class successfully!" 
}
```
### Validation Restrictions
- `userId`, `productId` e `quantity` são campos obrigatórios.
- `quantity` deve ser inserido como `number type`. Demais campos, são da forma `string type`.
- `id` do usuário é criado pelo próprio código.