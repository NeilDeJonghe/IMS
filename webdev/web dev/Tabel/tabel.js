function Do2(){
	//deel van de rijen en de knoppen
	var inputtext = document.getElementById("input").value;

	var tr = document.createElement("TR");
	var td1 = document.createElement("TD");
    var td2 = document.createElement("TD");
    var td3 = document.createElement("TD");
    var button1 = document.createElement("BUTTON");
    var node1 = document.createTextNode("Edit");
	var button2 = document.createElement("BUTTON");
    var node2 = document.createTextNode("Delete");


	button1.setAttribute("class","edit");

    button1.appendChild(node1);
    button2.appendChild(node2);
    td2.appendChild(button1);
    td3.appendChild(button2);
	
	
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
	
	td2.setAttribute("class","edit");
	td3.setAttribute("id","del");
	
	td2.setAttribute("onClick", "Edit()");
	td3.setAttribute("onClick", "deleteRow(this)");
	
	td1.innerHTML = inputtext;

    document.getElementById("table").appendChild(tr);
	
	//deel van de veranderende achtergrondkleur
	var count = document.getElementsByTagName("tr");
	for(i = 1; i < count.length; i++){
		if(i % 2 == 0){ 

        count[i].style.backgroundColor="grey"; 

      }else{ 

        count[i].style.backgroundColor="white"; 

      }     
	}
}

//edit functie
function Edit(r){
	document.getElementById("add").innerHTML = "Edit";
	
	/*var inputtext = document.getElementById("input").value;

	var i = r.parentNode.rowIndex;
	this.parentNode.rows[i]cells[td1].innerHTML = inputtext;
	*/
}

//delete functie
function deleteRow(r){
	var i = r.parentNode.rowIndex;
	if (i >= 1){
		document.getElementById("table").deleteRow(i);
	}else alert("Dit is niet mogelijk");
}

