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
function criarTopico(){
    let compatilheIdeias = document.getElementById("compatilhe-suas-ideias");
    let duvidasSugestoes = document.getElementById("duvidas-e-sugestoes");
    let seuTopico = document.getElementById("seu-topico");
    let backGray = document.getElementById("back-gray");
    let preenchimentoEnviar = document.getElementsByClassName('preenchimento-enviar');
    let btnCreateTopic = document.getElementById("create-topic");
    let formatacaoBotao = document.getElementById("formatacaoBotao");    
    
    let riscoEsquerda = document.getElementById("risco-esquerda");
    let riscoDireita = document.getElementById("risco-direita");

    
    var style = document.createElement('style');

    if(btnCreateTopic.textContent == 'Enviar'){                
        btnCreateTopic.textContent = 'criar novo tópico';
        btnCreateTopic.classList.add('btn-create-new-topic');

        style.innerHTML = '.create-topic::before { content: none; }';
        document.head.appendChild(style);

        riscoDireita.style.display = "inline";
        riscoEsquerda.classList.add('risco-horizontal');
        riscoEsquerda.classList.remove('preenchimento-enviar');
        riscoEsquerda.style.display = "inline";
        
        backGray.style.display ="inline";        
        
        seuTopico.style.display="inline";
        compatilheIdeias.style.display ="none";
        duvidasSugestoes.style.display ='none';

    }else if(btnCreateTopic.textContent == 'criar tópico'){  
        btnCreateTopic.textContent = 'Enviar';
        formatacaoBotao.classList.add('enviar');        
        btnCreateTopic.classList.add('btn-enviar');

        style.innerHTML = '.create-topic::before { content: none; }';
        document.head.appendChild(style);

        riscoDireita.style.display = "none";
        riscoEsquerda.classList.add('preenchimento-enviar');
        riscoEsquerda.style.display = "inline";      
        backGray.style.display ="none";
        compatilheIdeias.style.display ="none";
        duvidasSugestoes.style.display ="inline";

    }else if(btnCreateTopic.textContent == 'criar novo tópico'){
        btnCreateTopic.textContent = 'Enviar';        
        btnCreateTopic.classList.remove('btn-create-new-topic');
        formatacaoBotao.classList.add('enviar');
        btnCreateTopic.classList.add('btn-enviar');
        
        style.innerHTML = '.create-topic::before { content: none; }';
        document.head.appendChild(style);

        riscoDireita.style.display = "none";
        riscoEsquerda.classList.add('preenchimento-enviar');
        riscoEsquerda.style.display = "inline";

        backGray.style.display ="none";
        
        seuTopico.style.display="none";
        compatilheIdeias.style.display ="none";
        duvidasSugestoes.style.display ="inline";
    }      
}

