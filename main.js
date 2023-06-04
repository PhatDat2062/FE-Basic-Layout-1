function btn5() {
    document.getElementById("bang").style.backgroundColor = "red";
}

function btn4() {
    document.getElementById("bang").style.backgroundColor = "#FFCCCC";
}

function btn3() {
    document.getElementById("bang").style.backgroundColor = "#FF99CC";
}

function btn2() {
    document.getElementById("bang").style.backgroundColor = "#FF9933";
}

function btn1() {
    document.getElementById("bang").style.backgroundColor = "#339999";
}

var quote = ["Sống cho hết đời thanh xuân" , "Nói dốc sẽ bị họa bắt diều hâu tha" ] ;
var author = ["Dick(BCTM)" , "Đen"] ;
var i=0;
setInterval(function(){
    document.getElementById("quote-content").innerHTML = quote[i] ;
    document.getElementById("author-name").innerHTML = author[i];
    i++;
    if(i == quote.length) {
        i=0;
    }
    if(i == author.length) {
        i=0;
    }
},5000);