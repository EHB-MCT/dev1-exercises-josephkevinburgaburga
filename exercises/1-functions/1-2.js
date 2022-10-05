"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

box()

function box() {
    context.strokeStyle = "red";
    context.lineWidth = 6;
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(200, 200);
    context.stroke();

    context.strokeStyle = "red";
    context.lineWidth = 6;
    context.beginPath();
    context.moveTo(200, 50);
    context.lineTo(50, 200);
    context.stroke();

    context.strokeStyle = "black";
    context.lineWidth = 6;
    context.beginPath();
    context.rect(50, 50, 150, 150);
    context.stroke();
}
