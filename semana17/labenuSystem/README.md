## PROJETO LABENUSYSTEM

- Este é um projeto básico de Backend, utilizando Typescript, MySQL, além das bibliotecas knexJs e expressJs, desenvolvido para atender aos modelos REST API.

---
## DESCRIÇÃO DO PROJETO

- O projeto consiste em simular a metodologia CRUD na estruturação de Sistema de Registros e Cadastros de alunos,docentes e turmas em um dado sistema acadêmico, sendo criado endpoints `GET`, `POST`, `PUT` e `DELETE` para alimentar as demandas.

---
## DOCUMENTAÇÃO DE FUNCIONAMENTO

### `GET` All Students In A Class

`http://localhost:3003/class/:classId/student`

- Este endpoint retorna todos os estudantes presentes em uma dada turma.
- A turma deve ser buscada pelo seu `id`.
- São exibidos dos estudantes seus `name` e respectivos `id` como resposta.
- É exibido o `name` da turma

### Body
- `No Content`

### Headers
- `No Content`

### Path Variables
- classId     1

### Response Example
```
{
  "className": "Turma 1",
  "students": [
    {
      "id": 2,
      "name": "Pedro"
    },
    {
      "id": 5,
      "name": "Carlos"
    }
  ]
}
```
### Validation Restrictions
- `classId` deve ser um número inteiro, não-negativo e não-nulo.

---
### `GET` All Teachers In A Class

`http://localhost:3003/class/:classId/teacher`

- Este endpoint retorna todos os professores presentes em uma dada turma.
- A turma deve ser buscada pelo seu `id`.
- São exibidos dos professores seus `name` e respectivos `id` como resposta.
- É exibido o `name` da turma.

### Body
- `No Content`

### Headers
- `No Content`

### Path Variables
- classId     1

### Response Example
```
{
  "className": "Turma 1",
  "teachers": [
    {
      "id": 4,
      "name": "César"
    }
  ]
}
```
### Validation Restrictions
- `classId` deve ser um número inteiro, não-negativo e não-nulo.

---
### `GET` A Student Age By Id

`http://localhost:3003/student/age/:studentId`

- Este endpoint retorna a idade de um aluno.
- A busca deve ser realizada pelo respectivo `id` do estudante.
- É exibido apenas a informação `age` do estudante.

### Body
- `No Content`

### Headers
- `No Content`

### Path Variables
- studentId     1

### Response Example
```
{
  "age": 41
}
```
### Validation Restrictions
- `studentId` deve ser um número inteiro, não-negativo e não-nulo.

---
### `GET` All Students By Hobby

`http://localhost:3003/student/hobby?description=value`

- Este endpoint retorna todos os estudantes com um mesmo hobby comum.
- A busca é feita através do query param `description`.
- São exibidos dos estudantes seus `name` e respectivos `id` como resposta.
- É exibido também o nome do hobby de busca.

### Body
- `No Content`

### Headers
- `No Content`

### Query Variables
- value     correr

### Response Example
```
{
  "hobby": "correr",
  "students": [
    {
      "id": 1,
      "name": "Joao"
    }
  ]
}
```
### Validation Restrictions
- `value` deve ser o nome exato de busca do hobby.

---
### `POST` Student

`http://localhost:3003/student`

- Este endpoint cria um novo estudante.

### Body
```
{
    "name": "Nome_Aluno",
    "email": "aluno@aluno.com",
    "birthDate": "10/06/1999",
    "hobbies": [{
        "description": "ping pong"
    },
    {
        "description": "ler"
    }]
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
  "message": "Student created successfully!" 
}
```
### Validation Restrictions
- `name`, `email` e `birthDate` são campos obrigatórios.
- `birthDate` deve ser inserido no formato DD/MM/YYYY.
- `hobbies` são opcionais e, caso sejam inseridos, devem ser enviados no modelo array de objetos,
cuja única propriedade é `description`.
- Todos os campos são obrigatoriamente `string type`.

---
### `POST` Teacher

`http://localhost:3003/teacher`

- Este endpoint cria um novo professor.

### Body
```
{
    "name": "Nome_Professor",
    "email": "professor@professor.com",
    "birthDate": "20/05/1995",
    "specialties": [{
        "description": "CSS"
    }]
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
  "message": "Teacher created successfully!" 
}
```
### Validation Restrictions
- `name`, `email` e `birthDate` são campos obrigatórios.
- `birthDate` deve ser inserido no formato DD/MM/YYYY.
- `specialties` são opcionais e, caso sejam inseridos, devem ser enviados no modelo array de objetos,
cuja única propriedade é `description`.
- `specialties` possui restrição aos seguintes valores: "Backend", "CSS", "Programação Orientada a Objetos",
"React", "Redux", "Testes" ou "Typescript".
- Todos os campos são obrigatoriamente `string type`.

---
### `POST` Class

`http://localhost:3003/class`

- Este endpoint cria uma nova turma.

### Body
```
{
    "name": "Nome_Turma",
    "startDate": "01/01/2021",
    "endDate": "06/06/2021",
    "module": 2,
    "period": "integral"
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
  "message": "Class created successfully!" 
}
```
### Validation Restrictions
- `name`, `startDate`, `endDate` e `module` são campos obrigatórios.
- `startDate` e `endDate` devem ser inseridos no formato DD/MM/YYYY.
- `period` é um campo opcional, que somente possui dois valores: "integral" ou "noturno".
- Caso não seja enviado valor para `period`, a turma criada tomará como padrão o valor `integral`.
- Para `period` de valor `noturno`, o valor de `name` deve obrigatoriamente terminar em `-na-night`.
- `module` possui restrição aos seguintes valores: 0, 1, 2, 3, 4, 5, 6 e 7.
- `module` deve ser preenchido como `number type`. Todos os demais campos são obrigatoriamente `string type`.

---
### `POST` Student In Class

`http://localhost:3003/class/student`

- Este endpoint aloca um estudante em uma turma.
- Devem ser enviados os respecitovs `id` do estudante e a da turma.

### Body
```
{   
    "classId": 1,
    "studentId": 2
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
  "message": "Student associated to class successfully!" 
}
```
### Validation Restrictions
- `classId` e `studentId` devem ser um número inteiro, não-negativo e não-nulo.
- Somente é possível alocar um estudante em uma única turma.

---
### `POST` Teacher In Class

`http://localhost:3003/class/teacher`

- Este endpoint aloca um professor em uma turma.
- Devem ser enviados os respectivos `id` do professor e a da turma.

### Body
```
{   
    "classId": 2,
    "professorId": 3
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
- `classId` e `teacherId` devem ser um número inteiro, não-negativo e não-nulo.
- Somente é possível associar um professor a uma única turma.

---
### `PUT` Update Module From Class

`http://localhost:3003/class/:classId/module`

- Este endpoint modifica o módulo a qual a turma se encontra no momento.
- Deve ser enviado os `module` desejado na alteração, apenas.

### Body
```
{
    "module": 2
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
  "message": "Module from class updated successfully!" 
}
```
### Validation Restrictions
- `module` deve ser um número inteiro, dentre os seguintes valores: 0, 1, 2, 3, 4, 5, 6 e 7.

---
### `DELETE` Student From Class

`http://localhost:3003/class/:classId/student/:studentId`

- Este endpoint remove um estudante de uma dada turma.
- A busca deve ser realizada pelos respectivos `id` da turma e do estudante.

### Body
- `No Content`

### Headers
- `No Content`

### Path Variables
- classId     1
- studentId   1

### Response Example
```
{
  "message": "Student has been removed from class successfully!"
}
```
### Validation Restrictions
- `classId` e `studentId` devem ser um número inteiro, não-negativo e não-nulo.

---
### `DELETE` Teacher From Class

`http://localhost:3003/class/:classId/teacher/:teacherId`

- Este endpoint remove um professor de uma dada turma.
- A busca deve ser realizada pelos respectivos `id` da turma e do professor.

### Body
- `No Content`

### Headers
- `No Content`

### Path Variables
- classId     1
- teacherId   1

### Response Example
```
{
  "message": "Teacher has been removed from class successfully!"
}
```
### Validation Restrictions
- `classId` e `teacherId` devem ser um número inteiro, não-negativo e não-nulo.