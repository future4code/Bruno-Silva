### Exercício 1
a) Os comandos adicionais utilizados são:
* VARCHAR(n) - Utilizado quando a variável declarada for uma string;
* DATE - Utilizando quando vamos representar uma data, no formato YYYY-MM-DD.

b) A query ```SHOW DATABASES;``` é utilizada para obtermos informações gerais sobre a base de dados, como os bancos de dados existentes numa rota.
Já a query ```SHOW TABLES;``` nos mostra todas as tabelas estruturadas existentes dentro de um banco de dados em atividade.

c) A query ```DESCRIBE Actor;``` nos fornece as informações de descrição de cada propriedade inserida dentro da tabela Actor, 
como o nome da propridade (id, name, salary, etc...), o tipo de valores que a propriedade referencia (INT, DOUBLE, DATE, etc...) e
as respectivas restrições dos valores possíveis (NOT NULL, UNIQUE, PRIMARY KEY, etc...)

### Exercício 2
a) A query desejada é:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
	"2",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```

b) A resposta de erro foi: Código de erro: 1062. Entrada duplicada '2' para a chave 'PRIMÁRIA'
Este erro ocorreu, pois foi definido como propriedade de identificação no banco de dados o atributo 'id', que deve ser único para cada
elemento criado na tabela.

c)A resposta de erro foi: Código de erro: 1136. A contagem de colunas não corresponde à contagem de valores na linha 1
Este erro ocorreu, pois foi passado apenas 3 colunas (propriedades) para 5 valores definidos (valores).

d) A resposta de erro foi: Código de erro: 1364. O campo 'nome' não tem um valor padrão
Este erro ocorre, pois não foi atribuído um valor ao campo nome.

e) A resposta de erro foi: Código de erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1
Este erro ocorreu, pois o valor atribuído à coluna 'birth_date' deve ter o formato "YYYY-MM-DD", e no nosso caso faltam aspas duplas

f) Novos atores criados com sucesso!

### Exercício 3
a) A query criada foi:
```
SELECT *
FROM Actor
WHERE gender = "female";
```

b) A query criada foi:
```
SELECT salary
FROM Actor
WHERE name = "Tony Ramos";
```

c) A query criada foi:
```
SELECT *
FROM Actor
WHERE gender = "invalid";
```
Explicando: Nenhum valor foi mostrado, pois todos os elementos criados possuem ou "male" ou "female" como gender.

d)  A query criada foi:
```
SELECT id, name, salary 
FROM Actor 
WHERE salary < 500000;
```

e) O erro foi: Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'
Este erro ocorrey, pois especificamos duas propriedades de busca (id e name) e somente fizemos a busca por uma delas (id).
Para efetuar esta busca, precisamos também especificar o que procuramos da segunda propriedade.