function solution(){

var p= document.getElementById("p").value;
var r= document.getElementById("r").value;
var t= document.getElementById("t").value;

if(p === "" || r === "" || t === ""){
alert("Please enter a valid number !!");
} else{}

var p = parseFloat(p);
var r = parseFloat(r);
var t = parseFloat(t);

var ee = p*t*r/100;

var eee = p+ee;

document.getElementById("pp").innerHTML = " " + "₹" +ee.toFixed(2);

document.getElementById("ppp").innerHTML = " " + "₹" +eee.toFixed(2);

var EE = p*Math.pow((1+r/100),t) - p;

var EEE = p+EE;

document.getElementById("kk").innerHTML = " " +"₹" +EE.toFixed(2);

document.getElementById("kkk").innerHTML = " " + "₹" +EEE.toFixed(2);

}