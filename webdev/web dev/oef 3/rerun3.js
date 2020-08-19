var array = ['appel', 'banaan', 'peer'];

function toonarray(){
    var table = document.getElementById("table");
    var tableinput = "<tr>"

    for (var i = 0; i <=array.length-1; i++){
        tableinput+="<td id="+i+">"+array[i]+"</td>";
    }
    tableinput+="</tr>";
    table.innerHTML=tableinput
}

function addelement(){
    var input =  prompt();
    array.push(input);
    toonarray();
}

function delelement(){
    var remover = document.getElementById("deleteinput").value;
    var index = array.indexOf(remover);
    array.splice(index,1);
    toonarray();
}

function sortarray(){
    array.sort();
    toonarray();
}

function colors(){

    for (var i = 0; i <= array.length-1; i++){
        var color =  "#"+((1<<24)*Math.random()|0).toString(16)
        document.getElementById(i).style.background=color
    }
}