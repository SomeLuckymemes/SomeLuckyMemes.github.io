let showContent = false;

function showAll(){
    document.getElementsByClassName("main")[0].classList.add("instant-reveal")
    let toReveal = document.querySelectorAll(".main-content > :not(.revealed)");
    for(let i = 0; i < toReveal.length; i++){
        let elem = toReveal[i];
        if(elem.getBoundingClientRect().top <= window.innerHeight * 0.8){
            elem.classList.add("instant-reveal");
            elem.classList.add("revealed");
        }
    }
}

function scrollReact(){
    //if(!showContent) return;
    let toReveal = document.querySelectorAll(".main-content > :not(.revealed)");
    if(toReveal.length == 0) return;
    let elem = toReveal[0];
    for(let i = 0; i < toReveal.length; i++){
        if(toReveal[i].getBoundingClientRect().top < elem.getBoundingClientRect().top) elem=toReveal[i];
    }
    if(elem.getBoundingClientRect().top <= window.innerHeight * 0.8){
        elem.classList.add("revealed");
    }
    if(toReveal.length > 1){
        setTimeout(scrollReact, 50);
    }
}

document.addEventListener("scroll", scrollReact);
window.addEventListener("resize", scrollReact);

window.onload = () => {
    if(window.location.hash || window.scrollY > 0){
        showContent = true;
        showAll();
    }
    setTimeout(() => {
        showContent = true;
        scrollReact();
    }, 1000);
}