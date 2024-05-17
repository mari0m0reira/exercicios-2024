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

    answers.style.display ="inline";
}