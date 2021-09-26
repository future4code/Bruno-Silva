## PROJETO REDFOX - BACKEND CASE

- Este é um projeto básico de Backend, utilizando Typescript, MySQL, além das bibliotecas knexJs e expressJs, desenvolvido para atender aos modelos REST API.

---
## DESCRIÇÃO DO PROJETO

- O projeto consiste em simular a metodologia CRUD na estruturação de Plataforma de captura de informações de Pokemons, através de endpoints `GET` para alimentar as demandas.

---
### LINK DA DOCUMENTAÇÃO NO POSTMAN: `https://documenter.getpostman.com/view/15825773/UUxxhUAJ`

---
### `GET` PokeList Ordered and Paged

`https://redfox-projeto.herokuapp.com/pokemon/list?order=ASC&size=5&page=1`

- Este endpoint retorna lista de pokemons, ordenada e paginada.
- São exibidos dos pokemons seus `pokename` e respectivos `pokeNumber` como resposta.

### Body
- `No Content`

### Headers
- `No Content`

### Path Variables
- `No Content`

### Query Variables
- order "ASC"
- size "5"
- page "1"

### Response Example
```
{
  "pokelist": [
    {
      "pokename": "Bulbasaur",
      "pokeNumber": 1
    },
    {
      "pokename": "Ivysaur",
      "pokeNumber": 2
    },
    {
      "pokename": "Venusaur",
      "pokeNumber": 3
    },
    {
      "pokename": "Charmander",
      "pokeNumber": 4
    },
    {
      "pokename": "Charmeleon",
      "pokeNumber": 5
    }
  ]
}
```
### Validation Restrictions
- Query `order` somente assume os valores de `ASC` ou `DESC`. Caso não seja enviado nenhum valor,
será atribuído o valor padrão `ASC`.
- Query `size` assume qualquer `string` de valor numérico não negativo. Caso não seja enviado, será
atribuído o valor padrão `10`.
- Query `page` assume qualquer `string` de valor numérico não negativo. Caso não seja enviado, será
atribuído o valor padrão `1`.

---
### `GET` Poke Status

`https://redfox-projeto.herokuapp.com/pokemon/Bulbasaur`

- Este endpoint retorna status de pokemon através de busca por seu `pokename`.
- São exibidos dos pokemons seus `type1`, `type2`, `attack`, `defense` e respectivos `stamina` como resposta.

### Body
- `No Content`

### Headers
- `No Content`

### Path Variables
- pokename Bulbasaur

### Response Example
```
{
  "pokeStatus": {
    "type1": "grass",
    "type2": "poison",
    "attack": 118,
    "defense": 118,
    "stamina": 90
  }
}
```
### Validation Restrictions
- `pokeName` deve ser enviado exatamente como descrito em `pokeList`.

---