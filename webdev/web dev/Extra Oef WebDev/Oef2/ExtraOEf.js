/*var ppcounter = 0;
var ppnumber = Math.floor((Math.random() * 100) + 1);
//var ppnumber = 0;

function popup(){
    var prompter = prompt("GUESS");
    if (prompter == ppnumber){
        ppcounter++;
        alert(ppnumber + "! " +"Geraden in " + ppcounter + " keer");
        return;
    } else if (prompter < ppnumber){
        ppcounter++;
        alert("HOGER");
        popup();
        return;
    } else if (prompter > ppnumber){
        ppcounter++;
        alert("LAGER");
        popup();
        return;
    }
}*/

hovercount = 0;
function hovercounter(){
    if (hovercount == 360){
        hovercount = 0;
    }else{
        hovercount++;
        var img = document.getElementById("foto");
        img.style.transform = 'rotate('+hovercount+'deg)';
        document.getElementById('hovercount').innerHTML = hovercount;
    }
}

function resethoverc(){
    hovercount = 0;
    var img = document.getElementById("foto");
    img.style.transform = 'rotate('+hovercount+'deg)';
     document.getElementById('hovercount').innerHTML = hovercount;
}

var array = [];
function Add(){
    var input = document.getElementById("input").value;
    var list = document.getElementById("list");
    var listitem = document.createElement("li");

    for (var i = 0; i<=array.length; i++){
        listitem.setAttribute('id', i)
    }

    listitem.innerText = parseInt(input);

    list.appendChild(listitem);

    listitem.onclick = function Remove(){
        list.removeChild(listitem);
        array.splice(array.indexOf(listitem), 1);
    }
    array.push(parseInt(input));
    //console.log(array);
    //console.log(list);

    document.getElementById("input").value = "";
}

function MinMax(btnid){
    var list = document.getElementById("list");
    list.innerHTML = "";
    var listinput = "";

    for (var i = 0; i <=array.length-1; i++){
        listinput+="<li id="+i+" style='background-color: white;'>"+array[i]+"</li>"
    }
    list.innerHTML = listinput;
    
    if (btnid == "maxbtn"){
        var maxgetal = Math.max(...array);
        var maxind = array.indexOf((maxgetal));
        var maxcoloring = document.getElementById(maxind);
        maxcoloring.style.backgroundColor = "yellow";

    }else if (btnid == "minbtn"){
        var mingetal = Math.min(...array);
        var minind = array.indexOf((mingetal));
        var mincoloring = document.getElementById(minind);
        mincoloring.style.backgroundColor = "pink";
    }

    
}

function Sort(){
    array.sort(function(a, b){return a-b});
    var list = document.getElementById("list");
    list.innerHTML = "";
    var listinput = "";

    for (var i = 0; i <=array.length-1; i++){
        listinput+="<li id="+i+">"+array[i]+"</li>"
    }
    list.innerHTML = listinput;
}

function Color(){

    var color = document.getElementById('colorbtn').value;
    //document.getElementsByTagName("li").getElementById(i)

    for(var i = 0; i <= array.length; i++)
   {
       
       if (parseInt(i)%2 == 0)
       {
        document.getElementById(i).style.backgroundColor = color;
        document.getElementById(i).style.filter="invert(100%)";
       }else{
        document.getElementById(i).style.backgroundColor = color;
       }
   }
}