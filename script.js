
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
    var className1 = document.getElementById("d4").className;
    var className2 = document.getElementById("d2").className;
    r = document.getElementById("d4").classList;
    r.remove(className1);
    r.add(className2);
    r2 = document.getElementById("d2").classList;
    r2.remove(className2);
    r2.add(className1);
}
function click4() {
    var className1 = document.getElementById("d1").className;
    var className2 = document.getElementById("d3").className;
    r = document.getElementById("d1").classList;
    r.remove(className1);
    r.add(className2);
    r2 = document.getElementById("d3").classList;
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