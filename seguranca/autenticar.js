//Implementação de uma função capaz de autenticar um usuário

export default function verificarAutenticacao(requisicao, resposta, proximo) {
    if (requisicao?.session?.autenticado){
        proximo()
    }
    else{
        requisicao.session.urlOriginal = requisicao.originalUrl;
        resposta.redirect('/login.html');
    }
}
