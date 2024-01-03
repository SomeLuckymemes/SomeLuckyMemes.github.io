const scriptParent = document.currentScript.parentElement;
const popup = scriptParent.getElementsByClassName("social-popup")[0];

scriptParent.addEventListener("mouseleave", () => {
    scriptParent.classList.remove("popup-revealed");
});

scriptParent.onclick = (e) => {
    if(scriptParent.classList.contains("popup-revealed")) return;
    scriptParent.classList.add("popup-revealed");
}

window.addEventListener("load", () => {
    Array.from(document.getElementsByClassName("email-copy-button")).forEach((elem) => {
        elem.addEventListener("click", () => {
            elem.classList.add("clicked");
            setTimeout(() => {
                elem.classList.remove("clicked");
            }, 1000);
        });
    });

});
