function vermais(){
    let restoConteudo = document.getElementById("resto-conteudo");
    let btnVermais = document.getElementById("btnVerMais");
    let mais = document.getElementById("ver-mais");

  
    if(restoConteudo.style.display == "inline"){
        restoConteudo.style.display="none";
        mais.style.display="inline";
    }else{
        restoConteudo.style.display="inline";        
        mais.style.display="none";
    }
  }