const arrayDeConteudos = []

function armazenaDados() {
    const tituloDoPost = document.getElementById("titulo-post");
    const autorDoPost = document.getElementById("autor-post");
    const conteudoDoPost = document.getElementById("conteudo-post");
    const containerDePosts = document.getElementById("container-de-posts");

    if ( (tituloDoPost.value !== "") && (autorDoPost.value !== "") && (conteudoDoPost.value !== "") ) {
        const objetoDeInformacoes = {
        titulo: tituloDoPost.value,
        autor: autorDoPost.value,
        conteudo: conteudoDoPost.value
        }

        arrayDeConteudos.push(objetoDeInformacoes);

        containerDePosts.innerHTML += `<h2>${tituloDoPost.value}</h2><h3>${autorDoPost.value}</h2><p>${conteudoDoPost.value}</p>`
                
    } else {
        alert("Favor, preencher campo(s) vazio(s)!");
    }    

    tituloDoPost.value = "";
    autorDoPost.value = "";
    conteudoDoPost.value = "";
}