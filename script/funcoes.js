const clickMenu =()=>{
    if(menu.style.display == 'block'){
        menu.style.display = 'none'
    }else{
        menu.style.display = 'block'
    }
}
const mudouTamanho = () =>{
    if(window.innerWidth >= 768){
        menu.style.display = 'block'
        burguer.style.display = 'none'
    }else{
        menu.style.display = 'none'
        burguer.style.display = 'block'
    }
}
