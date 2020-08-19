var array = ['banaan','peer','appel'];

function showarray(){
    var tanbleinput = "<tr>";
    for (var i = 0; i <=array.length -1; i++){
        tanbleinput+="<td id="+i+">"+array[i]+"</td>"
    }
    tanbleinput+= "</tr>";
    document.getElementById("table").innerHTML=tanbleinput;
    console.log(array);
}

function add(){
    var prompinput = prompt("Add element");
    array.push(prompinput);
    showarray();
}

function remove(){
    var remover = document.getElementById("removetext");
    var index = array.indexOf(remover);
    array.splice(index);
    showarray();
}

function sort(){
    array.sort();
    showarray();
}

function kleuren(){

    for (var i = 0; i <= array.length-1; i++){
        var color =  "#"+((1<<24)*Math.random()|0).toString(16)
        document.getElementById(i).style.background=color
    }
}
