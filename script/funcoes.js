//função do menu hamburguer

const clickMenu =()=>{
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
}
//monitoramento do tamanho do menu
const mudouTamanho = () =>{
    if(window.innerWidth >= 768){
        menu.style.display = 'block'
        burguer.style.display = 'none'
    }else{
        menu.style.display = 'none'
        burguer.style.display = 'block'
    }
}
//Está funçao precisar ser refatorada
// Função de ocutar e mostrar os articles
let botao = document.getElementById("inicio")
let botao1 = document.getElementById("surv");
let botao2 = document.getElementById("rust");
let botao3 = document.getElementById("dayz")
let botao4 = document.getElementById("florest");
let informacaoSobre = document.getElementById("informacao-sobrevivencia");
let inf = document.getElementById("informacao-survivalist");
let infR = document.getElementById("informacao-rust");
let infD = document.getElementById("informacao-dayz");
let infF = document.getElementById("informacao-florest");

botao.addEventListener("click", function(){
    informacaoSobre.style.display = "block";
    inf.classList.add("hide");
    infF.classList.add("hide");
    infR.classList.add("hide");
    infD.classList.add("hide");
});
botao1.addEventListener("click", function(){
    inf.classList.toggle("hide"); 
    informacaoSobre.style.display = "none";
    infF.classList.add("hide");
    infR.classList.add("hide");
    infD.classList.add("hide");
});
botao2.addEventListener("click", function(){
    infR.classList.toggle("hide");
    informacaoSobre.style.display = "none";
    inf.classList.add("hide");
    infD.classList.add("hide");
    infF.classList.add("hide");
});
botao3.addEventListener("click", function(){
    infD.classList.toggle("hide");
    informacaoSobre.style.display = "none";
    infF.classList.add("hide");
    inf.classList.add("hide");
    infR.classList.add("hide");
});
botao4.addEventListener("click", function(){
    infF.classList.toggle("hide");
    informacaoSobre.style.display = "none";
    inf.classList.add("hide");
    infR.classList.add("hide");
    infD.classList.add("hide");
})