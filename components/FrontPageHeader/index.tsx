import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { text } from "stream/consumers";

export default function FrontPageHeader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [DEV_CHANGER_SPEED, SET_DEV_CHANGER_SPEED] = useState(1);

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
    // const MOVE_STEP = 2;
    const MOVE_STEP = DEV_CHANGER_SPEED;

    /*
      couple of quirks with this function:
      - calling it right before the render makes calcTextWidth not work on first iterations
      - calling it before calling resizeCanvas() makes it not work at all

      so it gets called right at the beginning of all the drawing code
    */
    const setupCanvas = () => {
      ctx.fillStyle = "#ffd300";
      ctx.font = FONT_SIZE + "px sans-serif";
      ctx.textBaseline = "middle";
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

    // const BAR_WIDTH = WIDTH < 1000 ? 1500 : WIDTH + Math.floor(WIDTH * 0.33);
    const BAR_WIDTH = HEIGHT + Math.floor(HEIGHT * 0.7);
    // const BAR_WIDTH = 400;

    let DEV_XSTART = 0;
    let DEV_YSTART = HEIGHT;

    const drawBar = (number: number, x: number, y: number) => {
      const calcedWidth = WIDTH < 1000 ? 1500 : WIDTH + Math.floor(WIDTH * 0.33);
      ctx.save();

      ctx.fillStyle = number % 2 === 0 ? "#ff3e3e" : "#ffd300";
      // ctx.fillStyle = number % 2 === 0 ? "#0a0a0a" : "#050505";

      // set anchor point to bottom left
      ctx.translate(x, BAR_HEIGHT);

      ctx.rotate((-45 * Math.PI) / 180);
      ctx.fillRect(x, y, calcedWidth, BAR_HEIGHT);

      // ===== TEXTDEV

      ctx.save();

      ctx.fillStyle = "#fff";
      ctx.font = FONT_SIZE + "px sans-serif";

      // ctx.textAlign = "center";
      ctx.textBaseline = "top";
      ctx.translate(DEV_XSTART, DEV_YSTART);
      // ctx.rotate((-45 * Math.PI) / 180);
      ctx.fillText("Scrollable text", 0, 0 + BAR_HEIGHT / 2 - FONT_SIZE / 2);

      DEV_XSTART += MOVE_STEP;

      if (DEV_YSTART < 0) {
        DEV_XSTART = 0;
        DEV_YSTART = HEIGHT;
      }

      ctx.restore();

      // ===== TEXTDEV

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

    // textInstances.push(new ScrollingText("Scrollable text!!!!!!!!!!!" + SPACER_CHAR, TEXT_STARTER_ORIGIN, HEIGHT));
    // textInstances.push(
    //   new ScrollingText(
    //     "backwards scrollable" + SPACER_CHAR,
    //     TEXT_STARTER_ORIGIN - calcTextWidth("backwards scrollable" + SPACER_CHAR) + TEXT_SPACER,
    //     HEIGHT + calcTextWidth("backwards scrollable" + SPACER_CHAR) - TEXT_SPACER
    //   )
    // );

    // each bar is offset by this value (the 4 is error correction)
    const BAR_OFFSET = Math.floor(Math.cos(45) * BAR_HEIGHT) + 4;

    // bars start at this offset to make up for the empty space at the beginning due to the rotation
    const X_ORIGIN = -BAR_HEIGHT * 7;

    const widthMaxBars = Math.ceil(WIDTH / BAR_HEIGHT) + 1;
    const maxBarsWithEmptySpace = widthMaxBars + Math.floor(widthMaxBars / 2);

    // bar limit has a few more bars due some empty space that happens on mobile
    const MAX_BARS = maxBarsWithEmptySpace + Math.floor(maxBarsWithEmptySpace / 2);

    // const RANDOM_STRINGS = ["Scrollable text!!!!", "sample text", "shoutouts"];
    const RANDOM_STRINGS = ["test string", "scrollable", "plinko", "wow", "me", "typical string"];
    // const RANDOM_STRINGS = ["sample text"];
    // const RANDOM_STRINGS = ["WWW"];
    const getRandomString = () => {
      return RANDOM_STRINGS[Math.floor(Math.random() * RANDOM_STRINGS.length)] + SPACER_CHAR;
    };

    class BarTextInstance {
      text: string;
      x: number;
      y: number;
      backward: boolean;
      yCounter: number;

      constructor(text: string, x: number, y: number, backward: boolean = false, startPos?: number) {
        console.table({ text, x, y, backward, startPos, calcTextWidth: calcTextWidth(text) });
        this.text = text;

        if (!backward) {
          // x is the start of the bar
          // subtracting the width of the text starts it outside the start of the bar so it moves in seamlessly
          this.x = x - calcTextWidth(text);
        } else {
          this.x = x + BAR_WIDTH;
        }

        this.y = y;
        this.backward = backward;

        this.yCounter = 0;
        if (startPos) {
          if (!backward) {
            this.yCounter = startPos;
          } else {
            this.yCounter = startPos;
          }
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // ===== TEXTDEV

        ctx.save();

        ctx.fillStyle = "#fff";
        ctx.font = FONT_SIZE + "px sans-serif";

        // ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.translate(this.x, this.y);
        // ctx.rotate((-45 * Math.PI) / 180);
        ctx.fillText(this.text, 0, 0 + BAR_HEIGHT / 2 - FONT_SIZE / 2);

        if (!this.backward) {
          this.x += MOVE_STEP;
          this.yCounter += MOVE_STEP;
        } else {
          this.x -= MOVE_STEP;
          this.yCounter += MOVE_STEP;
        }

        // console.log("this.yCounter", this.yCounter);

        ctx.restore();

        // ===== TEXTDEV
      }

      destroyable() {
        if (!this.backward) {
          // text width is added so it gets destroyed after it leaves the bar
          if (this.yCounter > BAR_WIDTH + calcTextWidth(this.text)) {
            return true;
          }
        } else {
          if (this.yCounter > BAR_WIDTH + calcTextWidth(this.text)) {
            return true;
          }
        }
      }
    }

    class BarTextCombo {
      number: number;
      x: number;
      y: number;

      textInstances: BarTextInstance[] = [];

      constructor(number: number, x: number, y: number) {
        this.number = number;
        this.x = x;
        this.y = y;
      }

      drawBar(ctx: CanvasRenderingContext2D) {
        ctx.save();

        ctx.fillStyle = this.number % 2 === 0 ? "#ff3e3e" : "#aa0000";
        // ctx.fillStyle = number % 2 === 0 ? "#0a0a0a" : "#050505";

        // set anchor point to bottom left
        ctx.translate(this.x, BAR_HEIGHT);

        ctx.rotate((-45 * Math.PI) / 180);
        ctx.fillRect(this.x, this.y, BAR_WIDTH, BAR_HEIGHT);

        this.drawText(ctx);

        ctx.restore();
      }

      textManager() {
        if (this.textInstances.length === 0) {
          const backward = this.number % 2 === 0 ? true : false;
          // create new text instances for empty arrays
          // this.textInstances.push(new BarTextInstance(getRandomString(), this.x, this.y, backward));
          // reload page
          // window.location.reload();
        }
      }

      drawText(ctx: CanvasRenderingContext2D) {
        this.textInstances.forEach((textInstance, index) => {
          textInstance.draw(ctx);

          if (textInstance.destroyable()) {
            this.textInstances.splice(index, 1);
          }

          // the last text instance is the first one in line
          // when its yCounter reaches the width of the text then theres enough space for a new text instance
          const lastTextInstance = this.textInstances[this.textInstances.length - 1];
          if (!lastTextInstance) return;

          if (lastTextInstance.yCounter > calcTextWidth(lastTextInstance.text)) {
            const backward = this.number % 2 === 0 ? true : false;
            this.textInstances.push(new BarTextInstance(getRandomString(), this.x, this.y, backward));
          }
        });
      }

      draw(ctx: CanvasRenderingContext2D) {
        this.drawBar(ctx);
        this.textManager();
      }
    }

    const DEV_BARINSTANCES: BarTextCombo[] = [];
    // DEV_BARINSTANCES.push(new BarTextCombo(0, 0, HEIGHT));
    // DEV_BARINSTANCES[0].textInstances.push(new BarTextInstance("wowow", 0, HEIGHT));

    const DEV_BAR_ID = 6;
    for (let i = 0; i < MAX_BARS; i++) {
      // if (i !== DEV_BAR_ID) continue;
      const isBackward = i % 2 === 0 ? true : false;
      console.log("isBackward", isBackward, "i", i);
      // y has some extra offset to make up for the empty space at the bottom
      const devXBar = X_ORIGIN + BAR_OFFSET * i;
      const devYBar = Math.floor(BAR_HEIGHT * 2) + X_ORIGIN + HEIGHT + BAR_OFFSET * i;
      // console.log("devXBar", devXBar, "devYBar", devYBar);

      const newBar = new BarTextCombo(i, devXBar, devYBar);
      // const DEV_WORDS = ["0|wow", "1|reallylongword", "2|plinko"];
      const DEV_WORDS = ["0|wow", "1|plinko", "2|reallylongword"];

      // newBar.textInstances.push(new BarTextInstance(DEV_WORDS[0], devXBar, devYBar, isBackward));
      // const DEV_SELECTED_WORD = DEV_WORDS[1];
      // const DEV_SELECTED_WORD_WIDTH = calcTextWidth(DEV_SELECTED_WORD);
      // newBar.textInstances.push(new BarTextInstance(DEV_SELECTED_WORD, devXBar + DEV_SELECTED_WORD_WIDTH, devYBar, isBackward, DEV_SELECTED_WORD_WIDTH));

      let currentWidthTaken = 0;
      let DEV_MAX_COUNTER = 0;
      let currentString = DEV_MAX_COUNTER + "|" + getRandomString();
      let BAR_WIDTH_EXTRA_SPACE = calcTextWidth(currentString);
      while (currentWidthTaken < BAR_WIDTH + BAR_WIDTH_EXTRA_SPACE) {
        DEV_MAX_COUNTER++;
        newBar.textInstances.push(
          new BarTextInstance(currentString, isBackward ? devXBar - currentWidthTaken : devXBar + currentWidthTaken, devYBar, isBackward, currentWidthTaken)
        );

        // then a new string is selected and the offset is from the new string
        currentString = DEV_MAX_COUNTER + "|" + getRandomString();
        const textWidth = calcTextWidth(currentString);
        currentWidthTaken += textWidth;
        BAR_WIDTH_EXTRA_SPACE = textWidth;
      }

      // the first text instance is the first one in the bar
      // but the text manager sees the last one as the first one
      // so reverse the array so its ready for the text manager
      newBar.textInstances.reverse();

      // create first text instances
      // if (!isBackward) {
      //   // ===== DEV WORKING MANUAL
      //   // let currentWidthTaken = 0;
      //   // newBar.textInstances.push(new BarTextInstance(DEV_WORDS[0], devXBar + currentWidthTaken, devYBar, isBackward, currentWidthTaken));
      //   // currentWidthTaken += calcTextWidth(DEV_WORDS[1]);
      //   // newBar.textInstances.push(new BarTextInstance(DEV_WORDS[1], devXBar + currentWidthTaken, devYBar, isBackward, currentWidthTaken));
      //   // currentWidthTaken += calcTextWidth(DEV_WORDS[2]);
      //   // newBar.textInstances.push(new BarTextInstance(DEV_WORDS[2], devXBar + currentWidthTaken, devYBar, isBackward, currentWidthTaken));
      //   // ===== WORKING LOOP EVEN BARS
      //   // a string has to be added first
      //   let currentWidthTaken = 0;
      //   let DEV_MAX_COUNTER = 0;
      //   let currentString = DEV_MAX_COUNTER + "|" + getRandomString() + SPACER_CHAR;
      //   let BAR_WIDTH_EXTRA_SPACE = calcTextWidth(currentString);
      //   while (currentWidthTaken < BAR_WIDTH + BAR_WIDTH_EXTRA_SPACE) {
      //     DEV_MAX_COUNTER++;
      //     newBar.textInstances.push(new BarTextInstance(currentString, devXBar + currentWidthTaken, devYBar, isBackward, currentWidthTaken));

      //     // then a new string is selected and the offset is from the new string
      //     currentString = DEV_MAX_COUNTER + "|" + getRandomString() + SPACER_CHAR;
      //     const textWidth = calcTextWidth(currentString);
      //     currentWidthTaken += textWidth;
      //     BAR_WIDTH_EXTRA_SPACE = textWidth;
      //   }
      // } else {
      //   // ===== DEV WOKRING MANUAL
      //   // let currentWidthTaken = 0;
      //   // newBar.textInstances.push(new BarTextInstance(DEV_WORDS[0], devXBar - currentWidthTaken, devYBar, isBackward, currentWidthTaken));
      //   // currentWidthTaken += calcTextWidth(DEV_WORDS[1]);
      //   // newBar.textInstances.push(new BarTextInstance(DEV_WORDS[1], devXBar - currentWidthTaken, devYBar, isBackward, currentWidthTaken));
      //   // currentWidthTaken += calcTextWidth(DEV_WORDS[2]);
      //   // newBar.textInstances.push(new BarTextInstance(DEV_WORDS[2], devXBar - currentWidthTaken, devYBar, isBackward, currentWidthTaken));
      //   // =====
      //   let currentWidthTaken = 0;
      //   let DEV_MAX_COUNTER = 0;
      //   let currentString = DEV_MAX_COUNTER + "|" + getRandomString() + SPACER_CHAR;
      //   let BAR_WIDTH_EXTRA_SPACE = calcTextWidth(currentString);
      //   while (currentWidthTaken < BAR_WIDTH + BAR_WIDTH_EXTRA_SPACE) {
      //     DEV_MAX_COUNTER++;
      //     newBar.textInstances.push(new BarTextInstance(currentString, devXBar - currentWidthTaken, devYBar, isBackward, currentWidthTaken));

      //     // then a new string is selected and the offset is from the new string
      //     currentString = DEV_MAX_COUNTER + "|" + getRandomString() + SPACER_CHAR;
      //     const textWidth = calcTextWidth(currentString);
      //     currentWidthTaken += textWidth;
      //     BAR_WIDTH_EXTRA_SPACE = textWidth;
      //   }
      //   // =====
      //   // currentWidthTaken += calcTextWidth("1|chunger - ");
      //   // let currentWidthTaken = 0;
      //   // let DEV_MAX_COUNTER = 0;
      //   // while (currentWidthTaken < BAR_WIDTH && DEV_MAX_COUNTER < 2) {
      //   //   const randomString = DEV_MAX_COUNTER + "|" + getRandomString() + SPACER_CHAR;
      //   //   const textWidth = calcTextWidth(randomString);
      //   //   currentWidthTaken += textWidth;
      //   //   DEV_MAX_COUNTER++;
      //   //   newBar.textInstances.push(new BarTextInstance(randomString, devXBar + currentWidthTaken, devYBar, isBackward, currentWidthTaken - textWidth));
      //   // }
      //   // =====
      //   // let currentWidthTaken = 0;
      //   // let DEV_MAX_COUNTER = 0;
      //   // while (currentWidthTaken < BAR_WIDTH) {
      //   //   const randomString = DEV_MAX_COUNTER + "|" + getRandomString() + SPACER_CHAR;
      //   //   const textWidth = calcTextWidth(randomString);
      //   //   currentWidthTaken += textWidth;
      //   //   DEV_MAX_COUNTER++;
      //   //   newBar.textInstances.push(new BarTextInstance(randomString, devXBar + currentWidthTaken, devYBar, true, currentWidthTaken - textWidth));
      //   // }
      // }

      DEV_BARINSTANCES.push(newBar);
    }

    const drawDev = (frameCount: number) => {
      const i = 20;
      // const devXBar = X_ORIGIN + BAR_OFFSET * i;
      // const devYBar = Math.floor(BAR_HEIGHT * 2) + X_ORIGIN + HEIGHT + BAR_OFFSET * i;
      // drawBar(0, 0, HEIGHT);

      // const devBar = DEV_BARINSTANCES[0];
      // devBar.draw(ctx);

      DEV_BARINSTANCES.forEach((devBar, index) => {
        // dont draw odd bars
        // if (index % 2 !== 1) return;
        devBar.draw(ctx);
      });

      const devBar = DEV_BARINSTANCES[0];
      const devBarInstance = devBar.textInstances[devBar.textInstances.length - 1];

      // ctx.fillText(`X ${DEV_XSTART} | Y ${DEV_YSTART}`, WIDTH / 2, HEIGHT / 2);
      ctx.fillText(
        `insts ${devBar.textInstances.length} | LOOKING AT [${devBarInstance.text}] | X ${devBarInstance?.x} | YCOUNTER ${devBarInstance?.yCounter}`,
        10,
        HEIGHT / 2
      );
    };

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
        const devXBar = X_ORIGIN + BAR_OFFSET * i;
        const devYBar = Math.floor(BAR_HEIGHT * 2) + X_ORIGIN + HEIGHT + BAR_OFFSET * i;
        // console.log("devXBar", devXBar, "devYBar", devYBar);
        drawBar(i, devXBar, devYBar);
      }
    };

    // const X_ORIGIN_TEXT = -BAR_HEIGHT * 7 - 13;
    const X_ORIGIN_TEXT = 0;
    console.log("X_ORIGIN_TEXT", X_ORIGIN_TEXT);

    const TEXT_OFFSET = BAR_OFFSET + 10;

    console.log("TEXT INSTANCES", TEXT_MAP);
    const drawText = (frameCount: number) => {
      TEXT_MAP.forEach((barArray, i) => {
        // if (i > 20 || i < 10) return;
        // if (![20].includes(i)) return;
        if (barArray.length === 0) {
          // create new text instances for empty arrays
          const newString = i + "|" + getRandomString() + SPACER_CHAR;
          const devWorkingX = X_ORIGIN_TEXT + TEXT_OFFSET * i - calcTextWidth(newString);
          const devWorkingY = 10 + X_ORIGIN_TEXT + TEXT_OFFSET * i + HEIGHT + calcTextWidth(newString);

          const devXBar = X_ORIGIN + BAR_OFFSET * i;
          const devYBar = Math.floor(BAR_HEIGHT * 2) + X_ORIGIN + HEIGHT + BAR_OFFSET * i;

          console.log("X_ORIGIN_TEXT", X_ORIGIN_TEXT, "devWorkingX", devWorkingX, "devWorkingY", devWorkingY);
          TEXT_MAP[i].push(new ScrollingText(newString, devWorkingX, devWorkingY));
          // TEXT_MAP[i].push(new ScrollingText(newString, devXBar, devYBar));
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
      // drawBars(FRAME);
      // drawText(FRAME);
      drawDev(FRAME);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [DEV_CHANGER_SPEED]);

  return (
    <>
      <header className={styles.wrapper}>
        <canvas className={styles.canvas} ref={canvasRef}></canvas>
      </header>
      <input type="range" min="0" max="4" value={DEV_CHANGER_SPEED} onChange={(e) => SET_DEV_CHANGER_SPEED(parseInt(e.target.value))} />
    </>
  );
}
