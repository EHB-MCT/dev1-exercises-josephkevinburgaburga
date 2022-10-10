"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

Rectangles();

function Rectangles() {
    context.fillStyle = "black";
    context.beginPath();
    context.rect(550, 50, 50, 50);
    context.fill(),

    context.fillStyle = "black";
    context.beginPath();
    context.rect(50, 550, 50, 50);
    context.fill(),
    
    context.strokeStyle = "red";
    context.lineWidth = 3;
    context.beginPath();
    context.rect(50, 50, 250, 250);
    context.stroke();
    
    context.strokeStyle = "red";
    context.lineWidth = 3;
    context.beginPath();
    context.rect(350, 350, 250, 250);
    context.stroke();
    
    context.fillStyle = "black";
    context.lineWidth = 3;
    context.beginPath();
    context.rect(200, 200, 250, 250);
    context.fill();
    context.stroke();

    context.fillStyle = "red";
    context.lineWidth = 3; 
    context.beginPath();
    context.rect(100, 450, 100, 100);
    context.stroke();

    
    context.fillStyle = "red";
    context.lineWidth = 3; 
    context.beginPath();
    context.rect(450, 100, 100, 100);
    context.stroke();
}