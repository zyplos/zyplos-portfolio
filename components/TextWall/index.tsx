"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

export default function TextWall() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		// console.log("CANVASSTART======================================");
		// ===== CANVAS SETUP
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		// let FRAME = 0;
		let animationFrameId: number;

		let WIDTH = canvas.width;
		let HEIGHT = canvas.height;

		// THIS RUNS UP HERE SINCE THE CALCULATIONS BELOW
		// DEPEND ON THE WIDTH AND HEIGHT OF THE CANVAS BEING CORRECT
		const resizeCanvas = () => {
			canvas.width = canvas.clientWidth;
			canvas.height = canvas.clientHeight;

			// console.log("canvas resized to", canvas.width, canvas.height);

			WIDTH = canvas.width;
			HEIGHT = canvas.height;
		};
		resizeCanvas();

		const BAR_HEIGHT = 75;
		const FONT_SIZE = Math.floor(BAR_HEIGHT * 0.45);

		// check if user prefers reduced motion
		const prefersReducedMotion =
			typeof window !== "undefined" &&
			window.matchMedia("(prefers-reduced-motion: reduce)").matches;

		const MOVE_STEP = prefersReducedMotion ? 0 : 0.3;

		const TEXT_COLOR = "#1e1e1e";
		const FONT_STYLE = `bold ${FONT_SIZE}px sans-serif`;

		const EVEN_BAR_COLOR = "#050505";
		const ODD_BAR_COLOR = "#090909";

		// CANVAS SETUP
		// THIS ALSO NEEDS TO BE DONE UP HERE SINCE
		// EVERYTHING BELOW DEPENDS ON THE CANVAS SETUP BEING DONE ALREADY
		const setCanvasContext = () => {
			ctx.fillStyle = TEXT_COLOR;
			ctx.font = FONT_STYLE;
			ctx.textBaseline = "middle";
		};
		setCanvasContext();

		const drawBg = () => {
			ctx.save();
			ctx.fillStyle = "#5b1919";
			ctx.fillRect(0, 0, WIDTH, HEIGHT);
			ctx.restore();
		};

		// const BAR_WIDTH = WIDTH < 1000 ? 1500 : WIDTH + Math.floor(WIDTH * 0.33);
		// const BAR_WIDTH = HEIGHT + Math.floor(HEIGHT * 0.7);
		const BAR_WIDTH = HEIGHT * 2;
		// const BAR_WIDTH = 400;

		const calcTextWidth = (text: string) => {
			return Math.floor(ctx.measureText(text).width);
		};

		const SPACER_CHAR = " • ";

		// each bar is offset by this value (the 4 is error correction)
		const BAR_OFFSET = Math.floor(Math.cos(45) * BAR_HEIGHT) + 4;

		// bars start at this offset to make up for the empty space at the beginning due to the rotation
		const X_ORIGIN = -BAR_HEIGHT * 7;

		// these three variables are dependent on the width of the canvas
		// recalculate on resize
		let widthMaxBars = Math.ceil(WIDTH / BAR_HEIGHT) + 1;
		let maxBarsWithEmptySpace = widthMaxBars + Math.floor(widthMaxBars / 2);

		// bar limit has a few more bars due some empty space that happens on mobile
		let MAX_BARS =
			maxBarsWithEmptySpace + Math.floor(maxBarsWithEmptySpace / 2);

		const BAR_INSTANCES: BarTextCombo[] = [];

		// const RANDOM_STRINGS = ["Scrollable text!!!!", "sample text", "shoutouts"];
		// const RANDOM_STRINGS = ["test string", "scrollable", "plinko", "wow", "me", "particularly long string"];
		const RANDOM_STRINGS = [
			"casually professional",
			"naturally technical",
			"constantly dynamic",
			"hopelessly optimistic",
			"playfully serious",
			"intricately simple",
			//
			"calmly energetic",
			"pragmatically idealistic",
			"steadily swift",
			"unwaveringly adaptable",
			//
		];
		// const RANDOM_STRINGS = ["plinko"];

		const getRandomString = () => {
			return (
				RANDOM_STRINGS[Math.floor(Math.random() * RANDOM_STRINGS.length)] +
				SPACER_CHAR
			);
		};

		class BarTextInstance {
			text: string;
			x: number;
			y: number;
			backward: boolean;
			yCounter: number;

			constructor(
				text: string,
				x: number,
				y: number,
				backward = false,
				startPos?: number,
			) {
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
				// this is for the initial wall text which needs its yCounter already set
				if (startPos) {
					this.yCounter = startPos;
				}
			}

			draw(ctx: CanvasRenderingContext2D) {
				ctx.save();

				ctx.fillStyle = TEXT_COLOR;
				ctx.font = FONT_STYLE;

				ctx.textBaseline = "top";
				ctx.translate(this.x, this.y);
				ctx.fillText(this.text, 0, 0 + BAR_HEIGHT / 2 - FONT_SIZE / 2);

				if (!this.backward) {
					this.x += MOVE_STEP;
					this.yCounter += MOVE_STEP;
				} else {
					this.x -= MOVE_STEP;
					this.yCounter += MOVE_STEP;
				}

				ctx.restore();
			}

			destroyable() {
				// text width is added so it gets destroyed after it leaves the bar
				// added a bit more offset than the text's width
				// to hide a bug where the last item flashes and shifts a bit after something gets deleted
				if (this.yCounter > BAR_WIDTH + calcTextWidth(this.text) * 4) {
					return true;
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

				ctx.fillStyle = this.number % 2 === 0 ? EVEN_BAR_COLOR : ODD_BAR_COLOR;

				// set anchor point to bottom left
				ctx.translate(this.x, BAR_HEIGHT);

				ctx.rotate((-45 * Math.PI) / 180);
				ctx.fillRect(this.x, this.y, BAR_WIDTH, BAR_HEIGHT);

				this.drawText(ctx);

				ctx.restore();
			}

			drawText(ctx: CanvasRenderingContext2D) {
				this.textInstances.forEach((textInstance, index) => {
					textInstance.draw(ctx);

					if (textInstance.destroyable()) {
						this.textInstances.splice(index, 1);
					}

					// the last text instance is the first one in line
					// when its yCounter reaches the width of the text then theres enough space for a new text instance
					const lastTextInstance =
						this.textInstances[this.textInstances.length - 1];
					if (!lastTextInstance) return;

					if (
						lastTextInstance.yCounter > calcTextWidth(lastTextInstance.text)
					) {
						const backward = this.number % 2 === 0;
						this.textInstances.push(
							new BarTextInstance(getRandomString(), this.x, this.y, backward),
						);
					}
				});
			}

			draw(ctx: CanvasRenderingContext2D) {
				this.drawBar(ctx);
			}
		}

		const createBarInstances = (startFrom = 0) => {
			// const DEV_BAR_ID = 7;
			for (let i = startFrom; i < MAX_BARS; i++) {
				// if (i !== DEV_BAR_ID) continue;
				const isBackward = i % 2 === 0;

				// y has some extra offset to make up for the empty space at the bottom
				const devXBar = X_ORIGIN + BAR_OFFSET * i;
				const devYBar =
					Math.floor(BAR_HEIGHT * 2) + X_ORIGIN + HEIGHT + BAR_OFFSET * i;

				const newBar = new BarTextCombo(i, devXBar, devYBar);

				let currentWidthTaken = 0;
				// let DEV_MAX_COUNTER = 0;
				// let currentString = DEV_MAX_COUNTER + "|" + getRandomString();
				let currentString = getRandomString();
				let BAR_WIDTH_EXTRA_SPACE = calcTextWidth(currentString);
				while (currentWidthTaken < BAR_WIDTH + BAR_WIDTH_EXTRA_SPACE) {
					// DEV_MAX_COUNTER++;
					newBar.textInstances.push(
						new BarTextInstance(
							currentString,
							isBackward
								? devXBar - currentWidthTaken
								: devXBar + currentWidthTaken,
							devYBar,
							isBackward,
							currentWidthTaken,
						),
					);

					// then a new string is selected and the offset is from the new string
					// currentString = DEV_MAX_COUNTER + "|" + getRandomString();
					currentString = getRandomString();
					const textWidth = calcTextWidth(currentString);
					currentWidthTaken += textWidth;
					BAR_WIDTH_EXTRA_SPACE = textWidth;
				}

				// the first text instance is the first one in the bar
				// but the text manager sees the last one as the first one
				// so reverse the array so its ready for the text manager
				newBar.textInstances.reverse();

				BAR_INSTANCES.push(newBar);
			}
		};
		createBarInstances();

		const drawDev = () => {
			BAR_INSTANCES.forEach((devBar, index) => {
				// dont draw odd bars
				// if (index % 2 !== 1) return;
				devBar.draw(ctx);
			});
		};

		const addMissingBars = () => {
			// console.log("RECALCING BARS");
			// recalc max bars when resizing
			widthMaxBars = Math.ceil(WIDTH / BAR_HEIGHT) + 1;
			maxBarsWithEmptySpace = widthMaxBars + Math.floor(widthMaxBars / 2);

			// bar limit has a few more bars due some empty space that happens on mobile
			const NEW_MAX_BARS =
				maxBarsWithEmptySpace + Math.floor(maxBarsWithEmptySpace / 2);
			const OLD_MAX_BARS = MAX_BARS;
			MAX_BARS = NEW_MAX_BARS;
			if (NEW_MAX_BARS > OLD_MAX_BARS) {
				// add more bars when needed
				createBarInstances(OLD_MAX_BARS);
			}
		};
		addMissingBars();

		const resizeHandler = () => {
			// RESIZE FIRST SO THE CALCULATIONS BELOW ARE CORRECT
			resizeCanvas();
			// THEN SET THE CANVAS CONTEXT AGAIN AFTER RESIZING
			// SINCE RESIZING CLEARS THE CONTEXT
			setCanvasContext();
			// FINALLY -- ADD MISSING BARS WITH CORRECT CALCULATIONS AND CONTEXT
			addMissingBars();
		};
		window.addEventListener("resize", resizeHandler);

		// ===== RENDER LOOP
		const render = () => {
			// FRAME++;
			drawBg();
			drawDev();
			animationFrameId = window.requestAnimationFrame(render);
		};
		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
			window.removeEventListener("resize", resizeHandler);
		};
	}, []);

	return (
		<>
			<div className={styles.wrapper}>
				<canvas className={styles.canvas} ref={canvasRef} />
			</div>
		</>
	);
}
