import { segment1, segment2 } from "./types";

export function drawRound(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number,
  color?: string
) {
  ctx.beginPath();
  if (color) ctx.fillStyle = color;
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();
}
export function getRandomCoordsBySizes(width: number, height: number) {
  return {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
  };
}
export function drawFpc(
  ctx: CanvasRenderingContext2D,
  last: number,
  curr: number
) {
  ctx.beginPath();
  const text: string = last === 0 ? "0" : `${curr - last}`;

  ctx.font = "12px monospace";
  ctx.fillStyle = "white";

  ctx.fillText(text, 7, 15);
  ctx.moveTo(25, 10);
  ctx.lineWidth = 20;
  ctx.strokeStyle = "brown";
  ctx.lineTo(25 + (curr - last) * 4, 10);
  ctx.stroke();
  ctx.closePath();
}
export function checkCrossLines(a: segment1, b: segment2) {
  function getKOrB(a1: number, a2: number, b1: number, b2: number) {
    // return Math.floor((a1 - a2) / (b1 - b2));
    return (a1 - a2) / (b1 - b2);
  }

  const { x1, x2, y1, y2 } = a;
  const { x3, y3, x4, y4 } = b;

  const k1 = getKOrB(y1, y2, x1, x2);
  const k2 = getKOrB(y3, y4, x3, x4);
  const b1 = getKOrB(x1 * y2, x2 * y1, x1, x2);
  const b2 = getKOrB(x3 * y4, x4 * y3, x3, x4);

  if (x1 === x2) {
    return {
      x: x1,
      y: k2 * x1 + b2,
    };
  } else if (x3 === x4) {
    return {
      x: x3,
      y: k1 * x3 + b1,
    };
  } else {
    const x = getKOrB(b2, b1, k1, k2);
    const y = k1 * x + b1;
    return { x, y };
  }
}
export function getCursorCoords(e: MouseEvent, canvas: HTMLCanvasElement) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  return { x, y };
}
export function checkIsCoordsInArc(
  arcX: number,
  arcY: number,
  radius: number,
  x: number,
  y: number
): boolean {
  let g = getHypotenuse(x - arcX, y - arcY);
  return g > radius;
}
export function getHypotenuse(a: number, b: number): number {
  return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
}
