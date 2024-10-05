
const time = new Date();
let h = time.getHours();
let m = time.getMinutes()
document.getElementById("houers").innerHTML = h;
document.getElementById("minutes").innerHTML = m;
var x, pluss, plus2, tafrigh, tafrigh2, zarb, zarb2, taghsim, taghsim2,dar;
//easy way you can use matrix
//this is hard way but easy to undrastand
function get() {
    document.getElementById('mines').value="0";
    document.getElementById('shownum').value = "";
}
function get1() {

    document.getElementById('shownum').value += 1;
}
function get2() {

    document.getElementById('shownum').value += 2;
}
function get3() {

    document.getElementById('shownum').value +=
        3;
}
function get4() {

    document.getElementById('shownum').value += 4;
}
function get5() {

    document.getElementById('shownum').value += 5;
}
function get6() {

    document.getElementById('shownum').value += 6;
}
function get7() {

    document.getElementById('shownum').value += 7;
}
function get8() {

    document.getElementById('shownum').value += 8;
}
function get9() {

    document.getElementById('shownum').value += 9;
}
function get0() {

    document.getElementById('shownum').value += 0;
}
function getz() {
if(document.getElementById('mines').value=="0"){
    document.getElementById('shownum').value += ".";
    document.getElementById('mines').value="1";
  
}


}function back() {
    var value = document.getElementById("shownum").value;
    document.getElementById("shownum").value = value.substr(0, value.length - 1);
}
function darsad(){
    
       dar = document.getElementById('shownum').value;
        document.getElementById('mines').value="0";
        document.getElementById('shownum').value=Number(dar)/100*100;
    
}
function plus() {
    x = "+";
    pluss = document.getElementById('shownum').value;
    document.getElementById('shownum').value = "";
    document.getElementById('mines').value="0";
}
function taggh() {
    x = "/";
    taghsim = document.getElementById('shownum').value;
    document.getElementById('shownum').value = "";
    document.getElementById('mines').value="0";
}
function zb() {
    x = "*";
    zarb = document.getElementById('shownum').value;
    document.getElementById('shownum').value = "";
    document.getElementById('mines').value="0";
    
}
function tgh() {
    x = "-";
    tafrigh = document.getElementById('shownum').value;
    document.getElementById('shownum').value = "";
    document.getElementById('mines').value="0";
}
function equal() {
    if (x == "+") {
        plus2 = document.getElementById('shownum').value;
        document.getElementById('shownum').value = Number(pluss) + Number(plus2);
        x = "null";
        document.getElementById('mines').value="0";

    }
    else if (x == "-") {
        tafrigh2 = document.getElementById('shownum').value;
        document.getElementById('shownum').value = Number(tafrigh) - Number(tafrigh2);
        x = "null";
        document.getElementById('mines').value="0";
    }
    else if (x == "/") {
        taghsim2 = document.getElementById('shownum').value;
        document.getElementById('shownum').value = Number(taghsim) / Number(taghsim2);
        x = "null";
        document.getElementById('mines').value="0";
    }
    else if (x == "*") {
        zarb2 = document.getElementById('shownum').value;
        document.getElementById('shownum').value = Number(zarb) * Number(zarb2);
        x = "null";
        document.getElementById('mines').value="0";
    }
}
