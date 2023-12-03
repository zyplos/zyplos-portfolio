import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import { text } from "stream/consumers";

export default function FrontPageHeader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    console.log("CANVASSTART======================================");
    // ===== CANVAS SETUP
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let FRAME = 0;
    let animationFrameId: number;

    let WIDTH = canvas.width;
    let HEIGHT = canvas.height;

    const BAR_HEIGHT = 75;
    const FONT_SIZE = Math.floor(BAR_HEIGHT * 0.5);
    const MOVE_STEP = 2;

    /*
      couple of quirks with this function:
      - calling it right before the render makes calcTextWidth not work on first iterations
      - calling it before calling resizeCanvas() makes it not work at all

      so it gets called right at the beginning of all the drawing code
    */
    const setupCanvas = () => {
      ctx.fillStyle = "#ffd300";
      ctx.font = FONT_SIZE + "px sans-serif";
    };

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      WIDTH = canvas.width;
      HEIGHT = canvas.height;

      // resizing the canvas resets the fillStyle and font
      // so we need to set them again
      setupCanvas();

      console.log("resized canvas to", WIDTH, HEIGHT);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ===== ACTUAL DRAWING STUFF
    setupCanvas();

    const drawBg = () => {
      ctx.save();
      ctx.fillStyle = "#ff3e3e";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      ctx.restore();
    };

    const drawBar = (x: number, y: number) => {
      const calcedWidth = WIDTH < 1000 ? 1500 : WIDTH + Math.floor(WIDTH * 0.33);
      ctx.save();
      ctx.fillStyle = "#26190f";

      // set anchor point to bottom left
      ctx.translate(x, BAR_HEIGHT);

      ctx.rotate((-45 * Math.PI) / 180);
      ctx.fillRect(x, y, calcedWidth, BAR_HEIGHT);

      ctx.fillStyle = "#fff";
      ctx.font = FONT_SIZE + "px sans-serif";
      // ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.fillText("Scrollable text - Scrollable text - Scrollable text - Scrollable text - Scrollable text - Scrollable text", x, y + BAR_HEIGHT / 2 - FONT_SIZE / 2);

      ctx.restore();
    };

    const calcTextWidth = (text: string) => {
      console.log("CALCLING TEXT WIDTH", ctx.fillStyle, ctx.font);
      const CALCED = Math.floor(ctx.measureText(text).width);

      console.log("calcTextWidth", CALCED);

      return CALCED;
    };

    const DEV_XSTART = 0;

    class ScrollingText {
      text: string;
      x: number;
      y: number;

      constructor(text: string, x: number, y: number) {
        this.text = text;
        this.x = x;
        this.y = y;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();

        ctx.fillStyle = "#fff";
        ctx.font = FONT_SIZE + "px sans-serif";

        ctx.translate(this.x, this.y);
        ctx.rotate((-45 * Math.PI) / 180);
        ctx.fillText(this.text, 0, 0);

        this.x += MOVE_STEP;
        this.y -= MOVE_STEP;

        if (this.y < 0) {
          this.x = DEV_XSTART;
          this.y = HEIGHT + calcTextWidth(this.text);

          // destroy this instance
          // textInstances.splice(textInstances.indexOf(this), 1);
        }

        ctx.restore();
      }
    }

    const textInstances: ScrollingText[] = [];
    textInstances.push(new ScrollingText("Scrollable text!!!!!!!!!!!", DEV_XSTART, HEIGHT + calcTextWidth("Scrollable text!!!!!!!!!!!")));

    const draw = (frameCount: number) => {
      console.log("CTX DEBUG", ctx.fillStyle, ctx.font);

      // show frame count
      ctx.fillText(`${frameCount.toString()}`, WIDTH / 2, HEIGHT / 2);

      const maxBars = Math.ceil(WIDTH / BAR_HEIGHT) + 1;

      // for (let i = 0; i < maxBars + Math.floor(maxBars / 2); i++) {
      //   drawBar(ctx, 0, 0 - BAR_HEIGHT * 5 + BAR_HEIGHT * i);
      // }

      drawBar(0, HEIGHT + BAR_HEIGHT + Math.floor(BAR_HEIGHT / 2));

      textInstances.forEach((textInstance) => {
        textInstance.draw(ctx);
      });
    };

    // ===== RENDER LOOP
    const render = () => {
      FRAME++;
      drawBg();
      draw(FRAME);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <>
      <header className={styles.wrapper}>
        <canvas className={styles.canvas} ref={canvasRef}></canvas>
      </header>
    </>
  );
}
