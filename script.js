
function click1() {
    var className1 = document.getElementById("d1").className;
    var className2 = document.getElementById("d2").className;
    r = document.getElementById("d1").classList;
    r.remove(className1);
    r.add(className2);
    r2 = document.getElementById("d2").classList;
    r2.remove(className2);
    r2.add(className1);
}
function click2() {
    var className1 = document.getElementById("d3").className;
    var className2 = document.getElementById("d2").className;
    r = document.getElementById("d3").classList;
    r.remove(className1);
    r.add(className2);
    r2 = document.getElementById("d2").classList;
    r2.remove(className2);
    r2.add(className1);
}
function click4() {
    var className1 = document.getElementById("d1").className;
    var className2 = document.getElementById("d4").className;
    r = document.getElementById("d1").classList;
    r.remove(className1);
    r.add(className2);
    r2 = document.getElementById("d4").classList;
    r2.remove(className2);
    r2.add(className1);
}
function click3() {
    var className1 = document.getElementById("d3").className;
    var className2 = document.getElementById("d4").className;
    r = document.getElementById("d3").classList;
    r.remove(className1);
    r.add(className2);
    r2 = document.getElementById("d4").classList;
    r2.remove(className2);
    r2.add(className1);
}
function reset(){
    alert("Puzzle will be reset");
    var className1 = document.getElementById("d1").className;
    var className2 = document.getElementById("d2").className;
    var className3 = document.getElementById("d3").className;
    var className4 = document.getElementById("d4").className;
    r = document.getElementById("d1").classList;
    r2 = document.getElementById("d2").classList;
    r3 = document.getElementById("d3").classList;
    r4 = document.getElementById("d4").classList;
    r.remove(className1);
    r2.remove(className2);
    r3.remove(className3);
    r4.remove(className4);
}
function reseta(){
    d1.classList.add("i1");
    d2.classList.add("i2");
    d3.classList.add("i3");
    d4.classList.add("i4");
}
function submit(){
    if (document.getElementById("d1").className == "i2" && document.getElementById("d2").className == "i4" && document.getElementById("d3").className == "i3" && document.getElementById("d4").className == "i1") {
        alert("Congratulations you have sucessfully solved the puzzle!! :)");
    }
    else{
        alert("The puzzle is not solved yet :(");
    }
}