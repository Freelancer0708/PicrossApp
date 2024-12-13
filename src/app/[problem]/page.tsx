"use client"

import { useEffect, useState } from "react";

export default function problem() {
    const [canvasWidth, setCanvasWidth] = useState(0);
    const [canvasHeight, setCanvasHeight] = useState(0);
    const [cellWidth, setCellWidth] = useState(0);
    const [cellHeight, setCellHeight] = useState(0);
    useEffect(() => {
        setCanvasWidth(660);
        setCanvasHeight(660);
        setCellWidth(30);
        setCellHeight(30);
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        if(canvas.getContext("2d")) {
          const ctx = canvas.getContext("2d");
          if(ctx) {
            ctx.fillStyle = "#f5f5f5";
            ctx.fillRect(0, 0, canvasWidth, canvasWidth);
            ctx.lineWidth = 2;

            for(let row = 1; row < canvasWidth / cellWidth; row++) {
                ctx.beginPath();
                if((row - 1) % 5 === 0) {
                    ctx.strokeStyle = "#252525";
                } else {
                    ctx.strokeStyle = "#a5a5a5";
                }
                ctx.moveTo(row * cellWidth, cellWidth);
                ctx.lineTo(row * cellWidth, canvasWidth - cellWidth);
                ctx.stroke();
            }

            for(let column = 1; column < canvasHeight / cellHeight; column++) {
                ctx.beginPath();
                if((column - 1) % 5 === 0) {
                    ctx.strokeStyle = "#252525";
                } else {
                    ctx.strokeStyle = "#a5a5a5";
                }
                ctx.moveTo(cellHeight, column * cellHeight);
                ctx.lineTo(canvasHeight - cellHeight, column * cellHeight);
                ctx.stroke();
            }

            ctx.font = "16px notosansjp";
            ctx.fillStyle = "#252525";
            ctx.fillText("0", 20, 650);

            ctx.font = "16px notosansjp";
            ctx.fillStyle = "#252525";
            ctx.fillText("10", 320, 650);

            ctx.font = "16px notosansjp";
            ctx.fillStyle = "#252525";
            ctx.fillText("20", 620, 650);



            ctx.font = "16px notosansjp";
            ctx.fillStyle = "#252525";
            ctx.fillText("0", 635, 35);

            ctx.font = "16px notosansjp";
            ctx.fillStyle = "#252525";
            ctx.fillText("10", 635, 335);

            ctx.font = "16px notosansjp";
            ctx.fillStyle = "#252525";
            ctx.fillText("20", 635, 635);

          }
        }
      });

    return (
        <>
        <div>
        <canvas id="canvas" width={canvasWidth} height={canvasHeight}></canvas>
        </div>
        </>
    );
}