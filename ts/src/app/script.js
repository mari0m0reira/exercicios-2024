function vermais(){
    let restoConteudo = document.getElementById("resto-conteudo");
    
    let mais = document.getElementById("ver-mais");

    let btnVermais = document.getElementsByClassName('btn-show-more');
  
    if(restoConteudo.style.display == "inline"){
        restoConteudo.style.display="none";
        mais.style.display="inline";
    }else{
        restoConteudo.style.display="inline";        
        mais.style.display="none";
    }
}

function criarTopico(){
    let compatilheIdeias = document.getElementById("compatilhe-suas-ideias");
    let duvidasSugestoes = document.getElementById("duvidas-e-sugestoes");
    let seuTopico = document.getElementById("seu-topico");

    compatilheIdeias.style.display ="none";
    duvidasSugestoes.style.display="inline";
    seuTopico.style.display="none";
}

function enviarTopico(){
    let compatilheIdeias = document.getElementById("compatilhe-suas-ideias");
    let duvidasSugestoes = document.getElementById("duvidas-e-sugestoes");
    let seuTopico = document.getElementById("seu-topico");

    compatilheIdeias.style.display ="none";
    duvidasSugestoes.style.display="none";
    seuTopico.style.display="inline";
}

function criarNovoTopico(){
    let compatilheIdeias = document.getElementById("compatilhe-suas-ideias");
    let duvidasSugestoes = document.getElementById("duvidas-e-sugestoes");
    let seuTopico = document.getElementById("seu-topico");

    compatilheIdeias.style.display ="none";
    duvidasSugestoes.style.display="inline";
    seuTopico.style.display="none";
}

function verRespostas(){
    let respostas = document.getElementById("answers");
    let tresPontos = document.getElementById("tres=pontos");
    let restoDiscucao = document.getElementById("resto-discussao");

    if(restoDiscucao.style.display == "none"){
        answers.style.display ="inline";
        restoDiscucao.style.display ="inline";
        tresPontos.style.display="none";
    }else{
        answers.style.display ="none";
        restoDiscucao.style.display ="none";
        tresPontos.style.display="inline";
    }
}