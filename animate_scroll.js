document.addEventListener("scroll", (e) => {
    document.body.style.setProperty("--scrollheight", window.scrollY+"px");
});