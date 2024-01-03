const pdf_container = document.getElementsByClassName("pdf-container")[0];
const pdf_title = pdf_container.getElementsByClassName("pdf-title")[0];
const pdf_iframe = pdf_container.getElementsByTagName("iframe")[0];
function openPDF(url, title){
    pdf_iframe.src = url;
    pdf_container.classList.add("visible");
    if(title){
        pdf_title.textContent = title;
    }
    else{
        pdf_title.textContent = "";
    }
}
function closePDF(){
    pdf_container.classList.remove("visible");
}

document.addEventListener("keydown", (key) => {
    if(key.code == "Escape"){
        closePDF();
    }
});