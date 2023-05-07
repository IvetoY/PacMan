var canvas1 = document.querySelector('canvas');
canvas1.height = window.innerHeight;
canvas1.width = window.innerWidth;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.strokeStyle = "blue";
ctx.beginPath();
ctx.strokeRect(5, 5, 150, 170);

ctx.beginPath();
ctx.moveTo(80,6);
ctx.lineTo(80,25);
ctx.stroke();

ctx.strokeRect(20,17,15,8);
ctx.strokeRect(50,17,15,8);
ctx.strokeRect(95,17,15,8);
ctx.strokeRect(125,17,15,8); //1vite chetiri

ctx.strokeRect(20,35,15,8);
ctx.strokeRect(125,35,15,8); //dolnite dve

ctx.beginPath();
ctx.moveTo(65,35);
ctx.lineTo(95,35);
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(80,36);
ctx.lineTo(80,50);
ctx.stroke(); //srednata liniq

ctx.beginPath();
ctx.moveTo(50,35);
ctx.lineTo(50,80);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(51,50);
ctx.lineTo(65,50);
ctx.stroke();  //purvata stranichna

ctx.beginPath();
ctx.moveTo(95,50);
ctx.lineTo(109,50);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(110,35);
ctx.lineTo(110,80);
ctx.stroke();  //vtorata

ctx.strokeRect(65,65,30,30);


ctx.beginPath();
ctx.moveTo(80,110);
ctx.lineTo(80,124);
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(65,110);
ctx.lineTo(95,110);
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(50,124);
ctx.lineTo(65,124);
ctx.stroke(); 

ctx.beginPath();
ctx.moveTo(95,124);
ctx.lineTo(110,124);
ctx.stroke();
console.log(canvas);
