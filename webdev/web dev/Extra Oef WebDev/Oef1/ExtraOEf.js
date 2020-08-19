hovercount = 0;
function hovercounter(){
    hovercount++;
    document.getElementById('hovercount').innerHTML = hovercount;
}

function reversecolor(){
    document.getElementById('foto').style.filter="grayscale(0%)"
}

function reversecolor_count(){
    document.getElementById('foto').style.filter="grayscale(0%)"
    document.getElementById('hovercount').innerHTML = 0;
}

function additem(){
    var input = document.getElementById("input").value;
    var list = document.getElementById("lijst");
    var listitem = document.createElement("li");

    listitem.innerHTML = input;
    list.appendChild(listitem);

    listitem.onclick = function removeitem(){
        list.removeChild(listitem);
    }
}

function canvascolor(elem){
    /*
    var een = document.getElementById("myCanvas");
    var twee = een.getContext("2d");
    var clientX = event.clientX;
    var clientY = event.clientY;
    var drie = twee.getImageData(clientX, clientY, 1, 1);
    var vier = drie.data;
    console.log(color.style.backgroundColor);
    */

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
 
var grd = ctx.createLinearGradient(0, 0, 300, 0);
grd.addColorStop(0, "black");
grd.addColorStop("0.1", "black");
grd.addColorStop("0.2", "blue");
grd.addColorStop("0.4", "magenta");
grd.addColorStop("0.5", "red");
grd.addColorStop("0.6", "yellow");
grd.addColorStop("0.8", "green");
grd.addColorStop("0.9", "white");
grd.addColorStop(1, "white");

c.onclick = function changecolor(event){
    var coord = "clientX: " + event.clientX +" - clientY: " + event.clientY;
    console.log(coord);
    if (event.clientX < 65){
        document.getElementById("colorfollow").style.backgroundColor = "black";
    } else if (event.clientX < 100){
        document.getElementById("colorfollow").style.backgroundColor = "blue";
    } else if (event.clientX < 144){
        document.getElementById("colorfollow").style.backgroundColor = "magenta";
    } else if (event.clientX < 178){
        document.getElementById("colorfollow").style.backgroundColor = "red";
    } else if (event.clientX < 212){
        document.getElementById("colorfollow").style.backgroundColor = "yellow";
    } else if (event.clientX < 274){
        document.getElementById("colorfollow").style.backgroundColor = "green";
    } else if (event.clientX < 300){
        document.getElementById("colorfollow").style.backgroundColor = "white";
    }
}
 
ctx.fillStyle = grd;
ctx.fillRect(20, 20, 300, 300);

}

function ColorReset(){
    document.getElementById("colorfollow").style.backgroundColor="white";
}



function mousepos(event){
    
    var coord = "clientX: " + event.clientX +" - clientY: " + event.clientY;
    //console.log(coord);

}document.addEventListener("mouseover", mousepos);


function reload(){
    location.reload();
}