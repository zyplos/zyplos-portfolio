import { useEffect, useRef } from "react";
import styles from "./styles.module.scss";

export default function FrontPageHeader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // ===== CANVAS SETUP
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let FRAME = 0;
    let animationFrameId: number;

    let WIDTH = canvas.width;
    let HEIGHT = canvas.height;

    const resizeCanvas = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;

      WIDTH = canvas.width;
      HEIGHT = canvas.height;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // ===== ACTUAL DRAWING STUFF

    const drawBg = (ctx: CanvasRenderingContext2D, frameCount: number) => {
      // draw background
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    };

    const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
      // draw text in the middle
      ctx.fillStyle = "#fff";
      ctx.font = "48px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Welcome!", WIDTH / 2, HEIGHT / 2);

      // show frame count
      ctx.fillText(FRAME.toString(), WIDTH / 2, HEIGHT / 2 + 48 + 12);
    };

    // ===== RENDER LOOP
    const render = () => {
      FRAME++;
      drawBg(context, FRAME);
      draw(context, FRAME);
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
