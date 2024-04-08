document.getElementById("playagain").onclick = function(){
    window.open("index.html","_self");
}

document.getElementById("score").innerHTML = localStorage.getItem("Score")