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

### Exercício 4
a) A query criada verifica, dentro da lista Actor, aqueles cujo a propriedade name começem com A ou J, e que também tenham a
propriedade salary com valor superior a 300000. Para esta busca, encontramos a linha:
'4', 'Antônio Fagundes', '400000', '1949-04-18', 'male'

b) A query criada foi:
```
SELECT *
FROM Actor
WHERE name NOT LIKE "a%" AND salary > 350000;
```

c)A query criada foi:
```
SELECT *
FROM Actor
WHERE name LIKE "%g%";
```

d)A query criada foi:
```
SELECT *
FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;
```

### Exercício 5
a) Tipo TEXT é bem parecido com o VARCHAR e CHAR, mas com a diferença de que ao invés de limitar a escrita de strings por
número de caracteres, TEXT limita a escrita pelo tamanho do arquivo (2GB, no máx.).
A query de criação da tabela foi:
```
CREATE TABLE Movies (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopses TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL
);
```

b, c, d, e) A query utilizada nestes itens foram:
```
INSERT INTO Movies
VALUES
	("1", "Se Eu Fosse Você", "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", "2006-01-06", 7),
    ("2", "Doce de mãe", "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", "2012-12-27", 10),
    ("3", "Dona Flor e Seus Dois Maridos", "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", "2017-11-02", 8),
    ("4", "O Auto da Compadecida", "O filme mostra as aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo no sertão da Paraíba, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região. Somente a aparição da Nossa Senhora poderá salvar esta dupla.", "2000-09-10", 10);
```

### Exercício 6
a) A query criada foi:
```
SELECT id, title, rating
FROM Movies
WHERE id = "1";
```
onde, para selecionarmos as 3 informações desejadas de algum filme, basta que mudemos o valor de id em `WHERE id = desired_value`.

b) A query criada foi:
```
SELECT *
FROM Movies
WHERE title = "o auto da compadecida";
```
onde, para selecionarmos todas as informações de um filme a partir do seu título, basta que mudemos o valor de title em `WHERE title= desired_title_name`.

c) A query criada foi:
```
SELECT id, title, synopses
FROM Movies
WHERE rating >= 7;
```

### Exercício 7
a) A query criada foi:
```
SELECT *
FROM Movies
WHERE title LIKE "%vida%";
```

b) A query criada foi:
```
SELECT *
FROM Movies
WHERE title LIKE "%AUTO%"
OR synopses LIKE "%AUTO%";
```

c) A query criada foi:
```
SELECT *
FROM Movies
WHERE release_date <= "2021-07-19";
```

d) A query criada foi:
```
SELECT *
FROM Movies
WHERE release_date <= "2021-07-19"
AND (title LIKE "%AUTO%" OR synopses LIKE "%AUTO%")
AND rating >= 7;
```


