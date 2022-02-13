function spook() {
    let query = window.matchMedia("(min-width: 601px)");

    document.querySelector('a').innerHTML = "Bababooye";
    let src = document.querySelector('section');
    let img = document.createElement("img");
    img.src = "./assets/meme.png"
    src.appendChild(img);

    if(query.matches) {
        img.style.height = "85%";
        img.style.position = "absolute";
        img.style.top = "10%";
        img.style.left = "32%";
        img.style.animation = "fadeIn 1s";
        img.style.zIndex = "999";
        setTimeout(() => {(img.style.animation = "fadeOut 1s")        
        }, 700); 
        setTimeout(() => {(img.style.display = "none")       
        }, 1150);}

    else{
        img.style.height = "40%";
        img.style.position = "absolute";
        img.style.top = "28%";
        img.style.left = "15%";
        img.style.animation = "fadeIn 1s";
        img.style.zIndex = "999";
        setTimeout(() => {(img.style.animation = "fadeOut 1s")        
        }, 700); 
        setTimeout(() => {(img.style.display = "none")       
        }, 1150);}
}


function baba() {  
    let audio = new Audio("./assets/baba.mp3");
    audio.play()
}

function launch() {
    spook();
    baba();
}

document.getElementById("spook").onclick = launch;