let lightTheme = false;
let colorSwitch;

function updateColor(){
    if(lightTheme){
        document.body.classList.add("light");
    }
    else{
        document.body.classList.remove("light");
    }
}

function mediaColorChanged(){
    lightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
    updateColor();
}
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', mediaColorChanged);
mediaColorChanged();

window.addEventListener("load", () => {
    colorSwitch = document.getElementsByClassName("color-switch")[0];
    colorSwitch.addEventListener("click", () => {
        lightTheme = !lightTheme;
        updateColor();
    });
})