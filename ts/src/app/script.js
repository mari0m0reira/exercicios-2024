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
