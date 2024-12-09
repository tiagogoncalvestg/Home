function criarTarefa() {
  // Recupera os dados da nova tarefa
  id = (Math.random() * (999999 - 1) + 1) + '';
  tarefa = document.getElementById('tarefa').value;
  prioridade = document.getElementById('prioridade').value;
  colaborador = document.getElementById('exampleFormControlSelect1').value;

  bg = obterPriorityBg(prioridade);  

  url = obterPhotoUrl(colaborador);

  // Template da linha da tabela
  let newTask = `
        <tr class="fw-normal" id="`+ id + `">
            <th>
              <img
                src="`+ url + `"
                class="shadow-1-strong rounded-circle"
                alt="avatar 1"
                style="width: 55px; height: auto"
              />
              <span class="ms-2">`+ colaborador + `</span>
            </th>
            <td class="align-middle">
              <span>`+ tarefa + `</span>
            </td>
            <td class="align-middle">
              <h6 class="mb-0">
                <span class="badge `+ bg + `"
                  >`+ prioridade + `</span
                >
              </h6>
            </td>
            <td class="align-middle">
              <a
                onclick="concluirTarefa(`+ id + `)"
                data-mdb-tooltip-init=""
                aria-label="Done"
                data-mdb-original-title="Done"
                data-mdb-tooltip-initialized="true"
                ><i class="fas fa-check text-success me-3"></i
              ></a>
              <a
                onclick="removerTarefa(`+ id + `)"
                data-mdb-tooltip-init=""
                aria-label="Remove"
                data-mdb-original-title="Remove"
                data-mdb-tooltip-initialized="true"
                ><i class="fas fa-trash-alt text-danger"></i
              ></a>
            </td>
        </tr>
    `;

  document.getElementById('table-body').innerHTML += newTask;

  document.getElementById('tarefa').value = "";

  document.getElementById('exitModal').click();
}

function removerTarefa(id) {
  let element = document.getElementById(id).remove();
  console.log(element)
}

function concluirTarefa(id) {
  let element = document.getElementById(id).remove();
  console.log(element)

  // Contador de tarefas concluídas
}

function obterPriorityBg(prioridade){

  let bg = ""

  switch (prioridade) {
    case "Baixa prioridade":
      bg = "bg-success"
      break;
    case "Média prioridade":
      bg = "bg-warning"
      break;
    case "Alta prioridade":
      bg = "bg-danger"
      break;
  }

  return bg;

}

function obterPhotoUrl(colaborador) {

  let url = ""

  switch (colaborador) {
    case "Alice Mayer":
      url = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp"
      break;
    case "Kate Moss":
      url = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp"
      break;
    case "Danny McChain":
      url = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
      break;
    case "Alexa Chung":
      url = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp"
      break;
    case "Ben Smith":
      url = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-8.webp"
      break;
    case "Annie Hall":
      url = "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
      break;
  }

  return url;
}