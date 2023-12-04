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
      ctx.fillStyle = "#444";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);
      ctx.restore();
    };

    const drawBar = (number: number, x: number, y: number) => {
      const calcedWidth = WIDTH < 1000 ? 1500 : WIDTH + Math.floor(WIDTH * 0.33);
      ctx.save();

      ctx.fillStyle = number % 2 === 0 ? "#0a0a0a" : "#050505";

      // set anchor point to bottom left
      ctx.translate(x, BAR_HEIGHT);

      ctx.rotate((-45 * Math.PI) / 180);
      ctx.fillRect(x, y, calcedWidth, BAR_HEIGHT);

      ctx.restore();
    };

    const calcTextWidth = (text: string) => {
      return Math.floor(ctx.measureText(text).width);
    };

    class ScrollingText {
      text: string;
      x: number;
      y: number;
      backward: boolean;

      constructor(text: string, x: number, y: number, backward: boolean = false) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.backward = backward;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.save();

        ctx.fillStyle = "#fff";
        ctx.font = FONT_SIZE + "px sans-serif";

        ctx.translate(this.x, this.y);
        ctx.rotate((-45 * Math.PI) / 180);
        ctx.fillText(this.text, 0, 0);

        if (!this.backward) {
          this.x += MOVE_STEP;
          this.y -= MOVE_STEP;

          if (this.y < 0) {
            // destroy this instance
            this.destroy();
          }
        }

        if (this.backward) {
          this.x -= MOVE_STEP;
          this.y += MOVE_STEP;

          if (this.y > HEIGHT + calcTextWidth(this.text)) {
            // destroy this instance
            this.destroy();
          }
        }

        ctx.restore();
      }

      destroy() {
        textInstances.splice(textInstances.indexOf(this), 1);
      }
    }

    const textInstances: ScrollingText[] = [];

    // textInstances.push(new ScrollingText("Scrollable text!!!!!!!!!!!", DEV_XSTART, HEIGHT + calcTextWidth("Scrollable text!!!!!!!!!!!")));
    // textInstances.push(new ScrollingText("backwards scrollable", DEV_XSTART + 560, 20, true));

    // const createNewTextInstance = (text: string, x: number, y:number, backward: boolean =  false) => {
    //   textInstances.push(new ScrollingText(text, x, y, backward));
    // }

    textInstances.push(new ScrollingText("Scrollable text!!!!!!!!!!!", 0, HEIGHT));
    textInstances.push(new ScrollingText("backwards scrollable", 0 - calcTextWidth("backwards scrollable") + 50, HEIGHT + calcTextWidth("backwards scrollable") - 50));

    // each bar is offset by this value (the 4 is error correction)
    const DEV_OFFSET = Math.floor(Math.cos(45) * BAR_HEIGHT) + 4;

    // bars start at this offset to make up for the empty space at the beginning due to the rotation
    const BACK_OFFSET = -BAR_HEIGHT * 7;

    const draw = (frameCount: number) => {
      // console.log(textInstances);
      // show frame count
      ctx.fillText(`${frameCount.toString()}`, WIDTH / 2, HEIGHT / 2);

      const widthMaxBars = Math.ceil(WIDTH / BAR_HEIGHT) + 1;
      const maxBarsWithEmptySpace = widthMaxBars + Math.floor(widthMaxBars / 2);

      // bar limit has a few more bars due some empty space that happens on mobile
      const maxBars = maxBarsWithEmptySpace + Math.floor(maxBarsWithEmptySpace / 2);

      for (let i = 0; i < maxBars; i++) {
        // y has some extra offset to make up for the empty space at the bottom
        drawBar(i, BACK_OFFSET + DEV_OFFSET * i, Math.floor(BAR_HEIGHT * 2) + BACK_OFFSET + HEIGHT + DEV_OFFSET * i);
      }

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
