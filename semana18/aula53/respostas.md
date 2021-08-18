# Respostas Aula 53
---
## HERANÇAS
### Exercício 1
a) Não, pois a variável `password` tem seu acesso privado, e não foi criado um método público
que permita sua visualização.

b) O `console.log()` definido em `User` será exibido a quantidade exata de instâncias criadas para a respectiva classe.

### Exercício 2
a) O `console.log()` definido em `Customer` será exibido a quantidade exata de instâncias criadas para a 
respectiva classe.

b) O `console.log()` definido em `User` será exibido a quantidade exata de instâncias criadas para a classe `Customer`. Isto ocorreu, pois existe uma relação de herança de informações existentes em `User`
passadas à classe `Customer`.

### Exercício 3
a) Não é possível acessar a variável `password`, pois a mesma tem seu acesso privado, e na classe `User` (onde está localizada), nenhum método público que permita sua visualização.

### Exercício 4
a) O método criado foi:
```
public introduceYourself(): string {
        return "Olá, bom dia!"
};
```
A chamada do método será executada assim: `console.log(costumer.introduceYourself())`.

### Exercício 5
a) O método criado foi:
```
public introduceYourself(): string {
        return `Olá, sou ${this.name}. Bom dia!`
};
```
A chamada do método será executada assim: `console.log(costumer.introduceYourself())`.

---
## POLIMORFISMO
### Exercício 1
a)Todas as propriedades da variável-objeto criada foram passíveis de acesso, pois a estrutura `interface` é sempre permissível aos seus dados. Todavia, para acessar a propriedade `balanceBill()`, foi necessário evocá-lo como um método (`objeto.balanceBill` retorna como resposta `Function:getCreditCard]`). Isto ocorre, pois a propriedade é uma função e, portanto, precisa
ser chamada para retornar seu valor.

### Exercício 2
a) Ao tentar gerar uma instância, foi exibido o seguinte erro:
"Cannot create an instance of an abstract class."

b) Para criar uma instância, devemos criar uma segunda classe, com relação de filho(a)
para com a class `Place` e, a partir desta nova classe, executar o comando `new NewClass()`.

### Exercício 3
Os getters criados foram:
```
	public getResidentsQuantity = () => {
        return this.residentsQuantity;
    };
```
, para a classe `Residence`

```
	public getFloorsQuantity = () => {
        return this.floorsQuantity;
    };
```
, para a classe `Commerce`

```
	public getMachinesQuantity = () => {
        return this.machinesQuantity;
    };
```
, para a classe `Industry`

### Exercício 4
a) A classe `ResidentialClient` tem acesso todas as suas propriedades internas (`cpf`, `name` e `consumedEnergy`), e também a todos os métodos internos (`getCpf()` e `calculeBill()`) e de heranças externas (`getCep()` e `getResidentsQuantity()`).

### Exercício 5
a) Ambos tem as mesmas relações de herança com a classe `Place` e a interface `Client`, tendo acesso aos mesmos métodos públicos e atributos protegidos na forma `protected`.

b) As diferenças consistem nas diferenças entre a herança herdada das classes `Residence` e `Commerce`, onde temos acesso aos métodos `getResidentsQuantity()` e `getFloorsQuantity()`, respectivamente. Além disso, um novo atributo `cnpj` foi criado na nova classe, que apesar da mesma tipagem, tem validação distinta (cpfs são strings na forma XXX.XXX.XXX-XX enquanto cnpj´s são YY.YYY.YYY/YYYY-YY). Adicionalmente, apesar de o método `calculeBill()` seja comum a ambas as classes, seu retorno remonta cálculos distintos.