### Exercício 1
a) Ao utilizar este comando a coluna "salary" na tabela "Actor" será excluída.

b) Ao utilizar este comando a coluna intitulada "gender" será substituída pela coluna de nome `sex` e tipo `VARCHAR(6)`.

C) Ao utilizar este comando a coluna intitulada "gender" será modificada em tipo de valor atribuído (antes era um `VARCHAR(6)` e agora
será um `VARCHAR(255)`).

d) A query utilizada nesta modificação será:
```
ALTER TABLE Actor
CHANGE gender gender VARCHAR(100);
```

### Exercício 2
a) A query utilizada foi:
```
UPDATE Actor
SET name = "Eva Green", birth_date = "1980-07-06"
WHERE id = "003";
```

b) A query utilizada para mudar de "Juliana Paes" para "JULIANA PAES" foi:
```
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```

Já para voltar:
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

c) A query utilizada foi:
```
UPDATE Actor
SET
	name = "Keanu Reeves",
    salary = 15000000,
    birth_date = "1964-09-02",
    gender = "male"
WHERE id = "005";
```

d) A query criada foi:
```
UPDATE Actor
SET name = "Jackie Chan"
WHERE id = 8;
```
 Ao executá-la, embora nenhum mensagem de erro seja verificada, não há atualização da tabela com o valor inserido. Isto ocorre, pois
o elemento não foi criado anteriormente e, portanto, não existe a possibilidade de ser atualizada.

### Exercício 3
a) A query criada foi:
```
DELETE
FROM Actor
WHERE name = "Fernanda Montenegro";
```

b) A query criada foi:
```
DELETE
FROM Actor
WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4
a) A query criada foi:
```
SELECT MAX(salary)
FROM Actor;
```

b) A query criada foi:
```
SELECT MIN(salary)
FROM Actor
WHERE gender = "female";
```

c) A query criada foi:
```
SELECT COUNT(*)
FROM Actor
WHERE gender = "female";
```

d ) A query criada foi:
```
SELECT SUM(salary)
FROM Actor;
```

### Exercício 5
a) A query exemplificada tem como resultado uma tabela contendo 2 dados relacionados: um contador e o valor respectivo ao contador
da colunda "gender". Ilustrando, teríamos:

Contador | gender
:----- | :-----
Quantidade de pessoas com gender = "male" | "male"
Quantidade de pessoas com gender = "female" | "female"

b) A query criada foi:
```
SELECT id, name
FROM Actor
ORDER BY name DESC;
```

c) A query criada foi:
```
SELECT *
FROM Actor
ORDER BY salary;
```

d) A query criada foi:
```
SELECT *
FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e) A query criada foi:
```
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6
a) A query criada foi:
```
ALTER TABLE Movie
ADD playing_limit_date DATE;
```

b) A query criada foi:
```
ALTER TABLE Movie
CHANGE rating rating FLOAT NOT NULL;
```

c) A query criada foi:
```
UPDATE Movie
SET playing_limit_date = "DATE_VALUE"
WHERE id = "VALID_ID";
```

onde, em `DATE_VALUE` inserimos o valor da data de exibição do filme, e em `VALID_ID` o id do filme desejado (entre 1 e 4, para 
valores válidos, no caso).

d) As querys desejadas são:
```
DELETE
FROM Movie
WHERE id = "001";
```
onde, deletamos todas as informações da linha de id `001`.

```
UPDATE Movie
SET synopses = "Criando sinopse"
WHERE id = "001";
```
onde, tentamos alterar a coluna `synopses` da linha de id `001` deletada anteriormente.

Resultado: Embora o código seja executado, nenhuma alteração ocorre, pois o elemento de id `001`não existe e, portanto, não é 
passível de modificações.
