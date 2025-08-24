fetch('/api/status')
  .then(res => res.json())
  .then(data => {
    const link = document.getElementById('login-logout-link');
    if (link) {
      if (data.autenticado) {
        link.textContent = 'Sair';
        link.href = '/logout';
      } else {
        link.textContent = 'Faça Login';
        link.href = './login.html';
      }
    }
  });