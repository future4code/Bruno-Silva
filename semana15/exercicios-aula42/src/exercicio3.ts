/* Letra a) Copie o código acima para um arquivo .ts. 
Depois, crie um type para representar um post e utilize-o para fazer a tipagem do array posts.

 Resposta:

type Posts = {
    autor: string,
    texto: string
}

const posts: Posts[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

console.log(posts) */

/* Letra b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:
Quais são as entradas e saídas dessa função? 
Copie a função para o mesmo arquivo .ts do array de posts e faça a tipagem necessária.

 Resposta:
    Entradas: 
        posts -> tipo Array of Objects;
        autorInformado -> tipo string;

    Saídas: posts.filter -> tipo Array of Objects

------ Código ------- 

type Posts = {
    autor: string,
    texto: string
};

const posts: Posts[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
];

type PostSelecionado = {
    autor: string,
    texto: string
}

function buscarPostsPorAutor(posts: Posts[], autorInformado: string): PostSelecionado[] {
    return posts.filter(
        (post: Posts) => {
            return post.autor === autorInformado;
        }
    );
};

console.log(buscarPostsPorAutor(posts, "Dobby"));*/
