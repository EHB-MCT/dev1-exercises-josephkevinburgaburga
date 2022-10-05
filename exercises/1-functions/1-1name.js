"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

name();

function name() {
    //letter J
    context.lineWidth = 6;
    context.strokeStyle = "red";
    context.beginPath();
    context.moveTo(50, 50);
    context.lineTo(250, 50);
    context.moveTo(150, 50)
    context.lineTo(150, 250);
    context.lineTo(50, 250)
    context.stroke();

    //Letter O
    context.lineWidth = 6;
    context.strokeStyle = "#CD24B6";
    context.beginPath();
    context.moveTo(300, 50);
    context.lineTo(300, 250);
    context.lineTo(450, 250);
    context.lineTo(450, 50)
    context.lineTo(300, 50)
    context.stroke();

    //letter S
    context.lineWidth = 6;
    context.strokeStyle = "#208A5C";
    context.beginPath();
    context.moveTo()
}