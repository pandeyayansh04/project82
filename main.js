var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
var color="black";
mouse_event="";

var lastxposition, lastyposition, currentxposition, currentyposition;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
mouse_event="mousedown";
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
mouse_event="mouseup";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
mouse_event="mouseleave";
}

canvas.addEventListener("mousemove",mymousemove)
function mymousemove(e){
currentxposition=e.clientX-canvas.offsetLeft;
currentyposition=e.clientY-canvas.offsetTop
if(mouse_event=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;
//ctx.moveTo(lastxposition, lastyposition);
//ctx.lineTo(currentxposition, currentyposition);
ctx.arc(currentxposition, currentyposition, 40,0,2*Math.PI)
ctx.stroke();
}
lastxposition=currentxposition
lastyposition=currentyposition
}
