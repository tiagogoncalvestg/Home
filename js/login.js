let form = document.querySelector('#inputEmail');

  // Redireciona automaticamente para o projeto
  form.addEventListener('focus', function() {
    redirect();
  });

  async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async function redirect() {
    await sleep(500);

    window.location.href = './project.html';
  }