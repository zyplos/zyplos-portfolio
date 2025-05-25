"use client";

import classNames from "classnames";
import { type JSX, useEffect } from "react";

import styles from "@/styles/Clipboard.module.scss";
import MAIN_COLOR_DATA_UNTYPED from "@/internals/colorData.json";

import MainLayout from "@/components/MainLayout";

interface ColorData {
  name: string;
  hex: string;
  rgb: {
    r: number;
    g: number;
    b: number;
  };
}

interface ASCIIData {
  character: string;
  description: string;
}

const MAIN_COLOR_DATA: ColorData[] = MAIN_COLOR_DATA_UNTYPED;

const MAIN_ASCII_DATA: ASCIIData[] = [
  {
    character: "•",
    description: "separator",
  },
  {
    character: "🡺",
    description: "forward",
  },
  {
    character: "🡹",
    description: "upward",
  },
  {
    character: "🡽",
    description: "onward",
  },
  {
    character: "\u202A",
    description: "empty space",
  },
  {
    character: "\u00A7",
    description: "color code",
  },
];

type DynamicTextColor = "#000000" | "#ffffff";

// https://stackoverflow.com/a/3943023
function getDynamicTextColor(
  red: number,
  green: number,
  blue: number
): DynamicTextColor {
  const threshold = 175;
  if (red * 0.299 + green * 0.587 + blue * 0.114 > threshold) {
    return "#000000";
  }
  return "#ffffff";
}

function changeEmblemColor(color: DynamicTextColor | "#ff3e3e") {
  const nav = document.querySelector("nav");
  if (!nav) return;
  const img = nav.querySelector("img");
  if (!img) return;

  if (color === "#ffffff") {
    img.style.filter = "brightness(100)";
  } else if (color === "#000000") {
    img.style.filter = "brightness(0)";
  } else {
    img.style.filter = "";
  }
}

function changeNavLinksColor(color: DynamicTextColor) {
  const nav = document.querySelector("nav");
  if (!nav) return;
  const links = nav.querySelectorAll("a");
  if (!links) return;

  // biome-ignore lint/complexity/noForEach: fine for DOM elements
  links.forEach((link) => {
    link.style.color = color;
  });
}

function changeFooterLinkColors(color: DynamicTextColor) {
  const footer = document.querySelector("footer");
  if (!footer) return;
  const svgs = footer.querySelectorAll("svg");

  // biome-ignore lint/complexity/noForEach: fine for DOM elements
  svgs.forEach((svg) => {
    svg.style.fill = color;
  });
}

function DynamicColorCard({ data }: { data: ColorData | ASCIIData }) {
  function handleHover() {
    if ("character" in data) {
      return;
    }

    const DYNAMIC_TEXT_COLOR = getDynamicTextColor(
      data.rgb.r,
      data.rgb.g,
      data.rgb.b
    );

    document.body.style.backgroundColor = data.hex;
    document.body.style.setProperty("--dynamicTextColor", DYNAMIC_TEXT_COLOR);

    const grid = document.querySelector(`.${styles.grid}`);
    if (grid) {
      grid.classList.add(styles.hideCards);
    }

    changeFooterLinkColors(DYNAMIC_TEXT_COLOR);
    changeEmblemColor(DYNAMIC_TEXT_COLOR);
    changeNavLinksColor(DYNAMIC_TEXT_COLOR);
  }

  function handleMouseLeave() {
    if ("character" in data) {
      return;
    }

    document.body.style.backgroundColor = "";
    document.body.style.setProperty("--dynamicTextColor", "");

    const grid = document.querySelector(`.${styles.grid}`);
    if (grid) {
      grid.classList.remove(styles.hideCards);
    }

    changeFooterLinkColors("#ffffff");
    changeEmblemColor("#ff3e3e");
    changeNavLinksColor("#ffffff");
  }

  function copyHexToClipboard() {
    if ("character" in data) {
      navigator.clipboard.writeText(data.character);
      return;
    }
    navigator.clipboard.writeText(data.hex);
  }

  function copyRGBToClipboard(
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>
  ) {
    if ("character" in data) {
      return;
    }
    event.stopPropagation();
    navigator.clipboard.writeText(
      `${data.rgb.r}, ${data.rgb.g}, ${data.rgb.b}`
    );
  }

  let InnerJSX: JSX.Element;

  if ("character" in data) {
    InnerJSX = (
      <div className={classNames(styles.colorCard, styles.defaultCard)}>
        <p className={styles.name}>{data.character}</p>
        <p className={styles.hex}>{data.description}</p>
      </div>
    );
  } else {
    InnerJSX = (
      <div
        className={classNames(styles.colorCard)}
        style={{
          backgroundColor: data.hex,
          color: getDynamicTextColor(data.rgb.r, data.rgb.g, data.rgb.b),
        }}
      >
        <p className={styles.name}>{data.name}</p>
        <p className={styles.hex}>{data.hex}</p>
        <div
          className={styles.rgb}
          onClick={(event) => copyRGBToClipboard(event)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ")
              copyRGBToClipboard(event);
          }}
        >
          rgb({data.rgb.r}, {data.rgb.g}, {data.rgb.b})
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={styles.colorCardWrapper}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      onClick={copyHexToClipboard}
    >
      {InnerJSX}
    </button>
  );
}

export default function ClipboardPage() {
  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    footer.style.backgroundColor = "transparent";

    // Cleanup function to reset footer style when component unmounts or path changes
    return () => {
      const currentFooter = document.querySelector("footer");
      if (currentFooter) {
        currentFooter.style.backgroundColor = ""; // Reset to default or previous state
      }

      // Reset body background and other styles if they were changed by this page
      document.body.style.backgroundColor = "";
      document.body.style.removeProperty("--dynamicTextColor");
      changeFooterLinkColors("#ffffff");
      changeEmblemColor("#ff3e3e");
      changeNavLinksColor("#ffffff");
    };
  }, []);

  return (
    <MainLayout>
      <h1 style={{ marginBottom: "2rem" }}>📋</h1>
      <section>
        <div className={styles.grid}>
          {MAIN_ASCII_DATA.map((asciiData) => (
            <DynamicColorCard key={asciiData.character} data={asciiData} />
          ))}
          {MAIN_COLOR_DATA.map((colorData) => (
            <DynamicColorCard key={colorData.name} data={colorData} />
          ))}
        </div>
      </section>
    </MainLayout>
  );
}
