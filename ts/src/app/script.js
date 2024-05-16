function vermais(){
    let restoConteudo = document.getElementById("resto-conteudo");
    let btnVermais = document.getElementById("btnVerMais");
    let mais = document.getElementById("ver-mais");

    restoConteudo.style.transitionDuration = "2s";
    mais.style.transitionDuration = "2s";
    btnVermais.style.transitionDuration = "2s";
  
    if(restoConteudo.style.display == "inline"){
        restoConteudo.style.display="none";
        mais.style.display="inline";
    }else{
        restoConteudo.style.display="inline";        
        mais.style.display="none";
    }
  }