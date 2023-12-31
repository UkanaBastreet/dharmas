export class Space {
  private stack = [];
  constructor(
    private canvas: HTMLCanvasElement,
    private ctx: CanvasRenderingContext2D,
    private height: number,
    private width: number
  ) {}
  animate() {
    this.clear();

    setTimeout(() => {
      requestAnimationFrame(this.animate);
    }, 60);
  }
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  scale(x: number, y = x) {
    this.ctx.scale(x, y);
  }
  translate(x: number, y = x) {
    this.ctx.translate(x, y);
  }
}
