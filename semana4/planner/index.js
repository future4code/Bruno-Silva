// function inserirTarefas() {
//     const descricaoTarefa = document.getElementById("tarefa");
//     const diaDaTarefa = document.getElementById("dias-semana");

//     if (diaDaTarefa.value === "domingo") {
//         const diaSelecionado = document.getElementById("domingo");
//         diaSelecionado.innerHTML += `<p>-${descricaoTarefa.value}</p>`
//     } else if (diaDaTarefa.value === "segunda") {
//         const diaSelecionado = document.getElementById("segunda");
//         diaSelecionado.innerHTML += `<p>-${descricaoTarefa.value}</p>`
//     } else if (diaDaTarefa.value === "terca") {
//         const diaSelecionado = document.getElementById("terca");
//         diaSelecionado.innerHTML += `<p>-${descricaoTarefa.value}</p>`
//     } else if (diaDaTarefa.value === "quarta") {
//         const diaSelecionado = document.getElementById("quarta");
//         diaSelecionado.innerHTML += `<p>-${descricaoTarefa.value}</p>`
//     } else if (diaDaTarefa.value === "quinta") {
//         const diaSelecionado = document.getElementById("quinta");
//         diaSelecionado.innerHTML += `<p>-${descricaoTarefa.value}</p>`
//     } else if (diaDaTarefa.value === "sexta") {
//         const diaSelecionado = document.getElementById("sexta");
//         diaSelecionado.innerHTML += `<p>-${descricaoTarefa.value}</p>`
//     } else if (diaDaTarefa.value === "sabado") {
//         const diaSelecionado = document.getElementById("sabado");
//         diaSelecionado.innerHTML += `<p>-${descricaoTarefa.value}</p>`
//     }

//     descricaoTarefa.value = ""
// }

function inserirTarefas() {
    const descricaoTarefa = document.getElementById("tarefa");
    const diaDaTarefa = document.getElementById("dias-semana");
    let diaSelecionado = document.getElementById(diaDaTarefa.value);

    if (descricaoTarefa.value !== "") {
        switch (diaDaTarefa.value) {
            case "domingo":
                diaSelecionado.innerHTML += `<p onclick="tacharTexto(this)">-${descricaoTarefa.value}</p>`
                break;
            case "segunda":
                diaSelecionado.innerHTML += `<p onclick="tacharTexto(this)">-${descricaoTarefa.value}</p>`
                break;
            case "terca":
                diaSelecionado.innerHTML += `<p onclick="tacharTexto(this)">-${descricaoTarefa.value}</p>`
                break;
            case "quarta":
                diaSelecionado.innerHTML += `<p onclick="tacharTexto(this)">-${descricaoTarefa.value}</p>`
                break;
            case "quinta":
                diaSelecionado.innerHTML += `<p onclick="tacharTexto(this)">-${descricaoTarefa.value}</p>`
                break;
            case "sexta":
                diaSelecionado.innerHTML += `<p onclick="tacharTexto(this)">-${descricaoTarefa.value}</p>`
                break;
            case "sabado":
                diaSelecionado.innerHTML += `<p onclick="tacharTexto(this)">-${descricaoTarefa.value}</p>`
                break;
            default:
                break;
        }
    } else {
        alert("Favor inserir uma tarefa!");
    }

    descricaoTarefa.value = "" 
}

function tacharTexto(parametro){
    parametro.style = "text-decoration:line-through";
}