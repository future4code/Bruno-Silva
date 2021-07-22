### Exercício 1
a) Chave estrangeira, ou `FOREING KEY`, é o nome dado a uma variável de uma tabela restrita pela sua
dependência a uma chave primária, ou `PRIMARY KEY`, existente em uma tabela matriz.

b) As queries criadas para a resolução foram

b.1) Para criação da tabela:
```
CREATE TABLE Rating (
    id VARCHAR(255) PRIMARY KEY NOT NULL,
    comment TEXT NOT NULL,
    rate FLOAT NOT NULL,
    movie_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
```

b.2) Para inserção de dados na tabela:
```
INSERT INTO Rating
VALUES
    ("001", "Filme bastante divertido, mas deixou a desejar.", 6, "001"),
    ("002", "Me supreendeu! Bons atores, boa história", 9.5, "002"),
    ("003", "Filme de drama não é tão a minha praia, mas até que é legal esse.", 6.5, "003"),
    ("004", "Sem dúvidas, um dos melhores filmes do cinema nacional! Ótimos atores e história envolvente.", 10, "004");
```

c) O erro emitido foi: 
`Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.`

O erro ocorreu, pois na dependência criada entre a tabela Movie (matriz) e a tabela Rating (dependente) a chave externa à
tabela dependente não foi encontrada e, portanto, não foi possível concluir a inclusão de valores na tabela.

d) A query criada foi:
```
ALTER TABLE Movie
DROP COLUMN rating;
```

e) A query criada para a execução foi:
```
DELETE
FROM Movie
WHERE id = "001";
```

Ao executá-la, foi emitido o seguinte erro: `Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails`
Este erro ocorreu, pois foi solicitado a remoção de elemento da tabela matriz (Movie) sem que todas as devidas dependências desta 
na tabela dependente (Rating) fossem encerradas.

### Exercício 2
a) `MovieCast` é uma tabela intermediária (ou de junção) criada com o propósito de armazenar informações que se correlacionam entre
as tabelas `Actor` e `Movie`. No caso, os dados guardados serão os atores listados em `Actor` e que estão presentes nos respectivos
filmes listados em `Movie`. 

b) A query utilizada foi:
```
INSERT INTO MovieCast
VALUES
    ("001", "001"),
    ("002", "004"),
    ("003", "005"),
    ("004", "002"),
    ("001", "003"),
    ("004", "002");
```

c) A query utilizada para a tentativa foi:
```
INSERT INTO MovieCast
VALUES ("006", "001");
```
onde, id = `006` não é reconhecido como um filme válido e registrado em `Movie`.

Assim, retornamos ao seguinte erro: `Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails`
Este erro ocorreu, pois a tabela MovieCast só cria novos elementos para valores válidos, tanto da tabela `Movie` quanto da
tabela `Actor`.

d) A query utilizada foi:
```
DELETE
FROM Actor
WHERE id = "001";
```
onde tentamos excluir o elemento de id = `001`.

Ao executar, o seguinte erro foi retornado: `Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails`
Este erro ocorreu, pois o elemento a ser excluído na tabela matriz `Actor` está sendo utilizado na tabela dependente MovieCast. 
Para concluir a execução, é necessário que ou a tabela dependente seja excluída ou todas as conexões do elemento nela sejam removidos 
previamente.

### Exercício 3 
a) Ao utilizar a query fornecida conseguimos exibir uma tabela com dados cruzados entre as tabelas `Movie` e `Rating`, se baseando em
premissas de dados desejados (no caso, todas as informações das duas tabelas são fornecidas). A cláusula `ON` é utilizada para validar
quais informações serão inseridas na tabela final. Caso o `ON` não seja chamado na query, teremos como resposta da execução do método
`JOIN` uma tabela com todas as combinações possíveis e existentes entre o cruzamento dos dados (no caso, teríamos 20 linhas de elementos).

b) A query criada foi:
```
SELECT Movie.id, title AS 'Título do Filme', rate AS 'Avaliação'
FROM Movie 
INNER JOIN Rating
ON Movie.id = Rating.movie_id
ORDER BY Movie.id;
```

### Exercício 4
a) A query criada foi:
```
SELECT Movie.id, title, rate, comment
FROM Movie
LEFT JOIN Rating
ON Movie.id = Rating.movie_id
ORDER BY Movie.id;
```

b) A query criada foi:
```
SELECT Movie.id, title, actor_id AS "Identificador do ator"
FROM Movie
RIGHT JOIN MovieCast
ON Movie.id = MovieCast.movie_id
ORDER BY id;
```

c) A query criada foi:
```
SELECT Movie.id, title AS "Título", AVG(rate) AS "Média das avaliações"
FROM Movie
LEFT JOIN Rating
ON Movie.id = Rating.movie_id
GROUP BY Movie.id
ORDER BY Movie.id ASC;
```