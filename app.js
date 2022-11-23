const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);
ctx.fill();

ctx.beginPath(); // 기존의 경로와 독립된 새로운 경로를 생성.
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "tomato";
setTimeout(() => {
  ctx.fill();
}, 5000);
