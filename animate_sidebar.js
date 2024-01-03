//Populate sidebar:

let sections = document.getElementsByClassName("section-head");
let leftNav = document.getElementsByClassName("side-nav-menu")[0];

for(let i = 0; i < sections.length; i++){
    const section_head = sections[i];
    let navItem = document.createElement("div");
    let navText = document.createElement("a");

    let name = section_head.getAttribute("nav-label");
    if(!name){
        name = section_head.innerText;
    }

    navItem.classList.add("nav-item");

    navText.innerText = name;

    if(section_head.id){
        navText.setAttribute("href", "#"+section_head.id)
    }

    leftNav.appendChild(navItem);
    navItem.appendChild(navText);

    let navSubItems = document.createElement("div");
    navSubItems.classList.add("nav-subitems");

    navItem.appendChild(navSubItems);

    let subsections = section_head.nextElementSibling.getElementsByClassName("subsection-head");
    let numadded = 0;
    for(let n = 0; n < subsections.length; n++){
    	const subsection = subsections[n];
        let navSubItem = document.createElement("div");
        navSubItem.classList.add("nav-subitem");
        let name = subsection.getAttribute("nav-sublabel");
        if(!name || name == ""){
            continue;
        }
        let finish = false;
        if(numadded > 2){ //Limit to 3 subitems per section
            name = "...";
            finish = true;
        }
        navSubItem.innerText = name;
        navSubItems.appendChild(navSubItem);
        numadded++;
        if(finish){
            break;
        }
    }
}



function sidebarScrollReact(){
    if(window.scrollY > 300){
        if(!leftNav.classList.contains("revealed")){
            leftNav.classList.add("revealed");
        }
    }
    else{
        if(leftNav.classList.contains("revealed")){
            leftNav.classList.remove("revealed");
        }
    }

    let lowestViewedSection = -1;

    for(let i = 0; i < sections.length; i++){
        let elem = sections[i];
        let elemBox = elem.getBoundingClientRect();
        if(elemBox.y <= window.innerHeight * 0.5){
            lowestViewedSection = i;
        }
    }
    let nav_items = leftNav.getElementsByClassName("nav-item");
    for(let i = 0; i < nav_items.length; i++){
        let nav_item = nav_items[i];
        if(i == lowestViewedSection){
            if(!nav_item.classList.contains("current-section")){
                nav_item.classList.add("current-section");
            }
        }
        else{
            if(nav_item.classList.contains("current-section")){
                nav_item.classList.remove("current-section");
            }
        }
    }
}

document.addEventListener("scroll", sidebarScrollReact, {passive: true});
window.addEventListener("resize", sidebarScrollReact);

sidebarScrollReact();
