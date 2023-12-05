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

    // textInstances.push(new ScrollingText("Scrollable text!!!!!!!!!!!", DEV_XSTART, HEIGHT + calcTextWidth("Scrollable text!!!!!!!!!!!")));
    // textInstances.push(new ScrollingText("backwards scrollable", DEV_XSTART + 560, 20, true));

    // const createNewTextInstance = (text: string, x: number, y:number, backward: boolean =  false) => {
    //   textInstances.push(new ScrollingText(text, x, y, backward));
    // }

    const TEXT_SPACER = 110;
    const SPACER_CHAR = " - ";
    const TEXT_STARTER_ORIGIN = Math.floor(BAR_HEIGHT / 2) - FONT_SIZE;

    // textInstances.push(new ScrollingText("Scrollable text!!!!!!!!!!!" + SPACER_CHAR, TEXT_STARTER_ORIGIN, HEIGHT));
    // textInstances.push(
    //   new ScrollingText(
    //     "backwards scrollable" + SPACER_CHAR,
    //     TEXT_STARTER_ORIGIN - calcTextWidth("backwards scrollable" + SPACER_CHAR) + TEXT_SPACER,
    //     HEIGHT + calcTextWidth("backwards scrollable" + SPACER_CHAR) - TEXT_SPACER
    //   )
    // );

    // each bar is offset by this value (the 4 is error correction)
    const DEV_OFFSET = Math.floor(Math.cos(45) * BAR_HEIGHT) + 4;

    // bars start at this offset to make up for the empty space at the beginning due to the rotation
    const X_ORIGIN = -BAR_HEIGHT * 7;

    const widthMaxBars = Math.ceil(WIDTH / BAR_HEIGHT) + 1;
    const maxBarsWithEmptySpace = widthMaxBars + Math.floor(widthMaxBars / 2);

    // bar limit has a few more bars due some empty space that happens on mobile
    const MAX_BARS = maxBarsWithEmptySpace + Math.floor(maxBarsWithEmptySpace / 2);

    type TextMap = ScrollingText[][];
    const TEXT_MAP: TextMap = [];
    // create an array for all bars
    for (let i = 0; i < MAX_BARS; i++) {
      TEXT_MAP[i] = [];
    }

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
        }

        if (this.backward) {
          this.x -= MOVE_STEP;
          this.y += MOVE_STEP;
        }

        ctx.restore();
      }

      destroyable() {
        if (!this.backward) {
          if (this.y < 0) {
            return true;
          }
        }

        if (this.backward) {
          if (this.y > HEIGHT + calcTextWidth(this.text)) {
            return true;
          }
        }
      }
    }

    const drawBars = (frameCount: number) => {
      // console.log(textInstances);
      // show frame count
      ctx.fillText(`${frameCount.toString()}`, WIDTH / 2, HEIGHT / 2);

      for (let i = 0; i < MAX_BARS; i++) {
        // y has some extra offset to make up for the empty space at the bottom
        const devXBar = X_ORIGIN + DEV_OFFSET * i;
        const devYBar = Math.floor(BAR_HEIGHT * 2) + X_ORIGIN + HEIGHT + DEV_OFFSET * i;
        // console.log("devXBar", devXBar, "devYBar", devYBar);
        drawBar(i, X_ORIGIN + DEV_OFFSET * i, Math.floor(BAR_HEIGHT * 2) + X_ORIGIN + HEIGHT + DEV_OFFSET * i);
      }
    };

    // const RANDOM_STRINGS = ["Scrollable text!!!!", "sample text", "shoutouts"];
    const RANDOM_STRINGS = ["WwwwWWWW", "auauuah", "sping!@"];
    const getRandomString = () => {
      return RANDOM_STRINGS[Math.floor(Math.random() * RANDOM_STRINGS.length)];
    };

    console.log("TEXT INSTANCES", TEXT_MAP);
    const drawText = (frameCount: number) => {
      TEXT_MAP.forEach((barArray, i) => {
        if (i !== 0) return;
        if (barArray.length === 0) {
          // create new text instances for empty arrays
          const newString = getRandomString() + SPACER_CHAR;
          const newCoords = DEV_OFFSET * i + HEIGHT + calcTextWidth(newString);
          const devWorkingX = DEV_OFFSET * i - calcTextWidth(newString);
          const devWorkingY = DEV_OFFSET * i + HEIGHT + calcTextWidth(newString);
          console.log("devWorkingX", devWorkingX, "devWorkingY", devWorkingY);
          console.log("newCoords", newCoords);
          TEXT_MAP[i].push(new ScrollingText(newString, devWorkingX, devWorkingY));
          // TEXT_MAP[i].push(new ScrollingText(newString, newCoords, newCoords));
        } else {
          TEXT_MAP[i].forEach((textInstance, j) => {
            textInstance.draw(ctx);

            if (textInstance.destroyable()) {
              TEXT_MAP[i].splice(j, 1);
            }
          });
        }
      });
    };
    // ===== RENDER LOOP
    const render = () => {
      FRAME++;
      drawBg();
      drawBars(FRAME);
      drawText(FRAME);
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
