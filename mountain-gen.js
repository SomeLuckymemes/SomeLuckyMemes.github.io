let target_elem = document.getElementsByClassName("name-bg")[0];

let svg_width = window.innerWidth;
let svg_height;

let max_mountain_height;

let svgstart;
let svgend;

let firstload = true;

function getMountain(){
    let samples = Math.round(svg_width / 30);

    let str = `<polyline class="mountain-line" style="" points="0,`+(svg_height + 4).toString() + ' ';
    let glow_str = `<polyline class="mountain-glow" style="" points="`;

    let height = svg_height - Math.random() * max_mountain_height;
    let dy = Math.random() * 4 - 2;

    for(let i = 0; i <= samples; i++){
        str += ((i / samples) * svg_width).toString() + ',' + height.toString() + ' ';
        glow_str += ((i / samples) * svg_width).toString() + ',' + height.toString() + ' ';

        height += dy * (1/samples) * svg_width;
        if(height > svg_height){
            height = svg_height;
            dy = -1;
        }
        if(height < (svg_height - max_mountain_height)){
            height = (svg_height - max_mountain_height);
            dy = 1;
        }
        dy += Math.random() * 2 - 1;
        if(dy < -4) dy = -4;
        else if(dy > 4) dy = 4;
    }

    str += svg_width.toString()+`,`+(svg_height + 4).toString() + `" />`;
    glow_str += `" />`;

    return glow_str + str;
}

function getSvg(){
    svg_width = (target_elem.offsetWidth * 2);
    svg_height = (target_elem.offsetHeight);

    max_mountain_height = svg_height / 2;

    if(firstload){
        firstload = false;
        svgstart = `<svg class="mountains-svg" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 `+target_elem.offsetWidth.toString()+` `+target_elem.offsetHeight.toString()+`'>`;
    }
    else{
        svgstart = `<svg class="mountains-svg loaded" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 `+target_elem.offsetWidth.toString()+` `+target_elem.offsetHeight.toString()+`'>`;
    }
    svgend = `</svg>`;

    return svgstart + getMountain() + svgend;
}

function svgResize(){
    document.getElementsByClassName("mountains-svg")[0].setAttribute("viewBox", "0 0 "+target_elem.offsetWidth.toString()+` `+target_elem.offsetHeight.toString());
    if(target_elem.offsetWidth > svg_width){
        target_elem.innerHTML = getSvg();
    }
}

//target_elem.style.backgroundImage = "url('data:image/svg+xml;base64," + window.btoa(getSvg()) + "')";

target_elem.innerHTML = getSvg();

window.onresize = svgResize;
