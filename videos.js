Array.from(document.getElementsByTagName("video")).forEach((video) => {
    const latesrc = video.getAttribute("late-src");
    if(latesrc){
        video.setAttribute("src", latesrc);
    }
});