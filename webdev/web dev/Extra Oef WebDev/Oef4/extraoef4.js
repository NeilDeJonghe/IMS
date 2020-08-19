function check(){
    var woord1 = document.getElementById('woord1').value;
    var woord2 = document.getElementById('woord2').value;

    var temp1 = woord1.toLowerCase();
    var temp2 = woord2.toLowerCase();

    var split1 = temp1.split("");
    var split2 = temp2.split("");

    split1.sort()
    split2.sort()

    var join1 = split1.join()
    var join2 = split2.join()

    if(join1 == join2){
        alert('Het is een anagram')
    } else {
        alert('Het is geen anagram')
    }

    console.log(join1);
    console.log(join2);
}