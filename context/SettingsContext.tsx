"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "classic" | "sandstone" | "slate";
type Spacing = "cozy" | "compact";
type Formality = "playful" | "serious";

interface SettingsContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  //
  spacing: Spacing;
  setSpacing: (spacing: Spacing) => void;
  //
  formality: Formality;
  setFormality: (formality: Formality) => void;
  //
  roundedCorners: boolean;
  setRoundedCorners: (rounded: boolean) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined,
);

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
};

interface SettingsProviderProps {
  children: React.ReactNode;
}

export const SettingsProvider: React.FC<SettingsProviderProps> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("sandstone");
  const [spacing, setSpacing] = useState<Spacing>("cozy");
  const [formality, setFormality] = useState<Formality>("serious");
  const [roundedCorners, setRoundedCorners] = useState<boolean>(true);

  useEffect(() => {
    const root = document.documentElement;

    // Apply Theme
    if (theme === "sandstone") {
      // Default values from _variables.css (already set by CSS, but explicit here for switching back)
      root.style.setProperty("--color-text", "#55291a");
      root.style.setProperty("--color-text-header", "#240d05");
      root.style.setProperty("--color-surface", "#e8ddd0");
      root.style.setProperty("--color-background", "#0a0505");
      root.style.setProperty("--color-muted", "#987e74");
    } else if (theme === "slate") {
      root.style.setProperty("--color-text", "#e2e8f0");
      root.style.setProperty("--color-text-header", "#f8fafc");
      root.style.setProperty("--color-surface", "#1e293b");
      root.style.setProperty("--color-background", "#0f172a");
      root.style.setProperty("--color-muted", "#94a3b8");
    } else if (theme === "classic") {
      // Light theme placeholder
      root.style.setProperty("--color-text", "#1a202c");
      root.style.setProperty("--color-text-header", "#000000");
      root.style.setProperty("--color-surface", "#ffffff");
      root.style.setProperty("--color-background", "#f7fafc");
      root.style.setProperty("--color-muted", "#718096");
    }

    // Apply Spacing
    if (spacing === "cozy") {
      root.style.setProperty("--grid-margin", "var(--space)");
    } else {
      root.style.setProperty("--grid-margin", "var(--space-s)");
    }

    // Apply Rounded Corners
    if (roundedCorners) {
      root.style.setProperty("--radius", "0.5rem");
      root.style.setProperty("--radius-xs", "10px");
      root.style.setProperty("--radius-s", "0.2rem");
      root.style.setProperty("--radius-m", "0.8rem");
      root.style.setProperty("--radius-l", "1.2rem");
      root.style.setProperty("--radius-circle", "1000px");
    } else {
      root.style.setProperty("--radius", "0px");
      root.style.setProperty("--radius-xs", "0px");
      root.style.setProperty("--radius-s", "0px");
      root.style.setProperty("--radius-m", "0px");
      root.style.setProperty("--radius-l", "0px");
      root.style.setProperty("--radius-circle", "0px");
    }
  }, [theme, spacing, roundedCorners]);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        setTheme,
        spacing,
        setSpacing,
        formality,
        setFormality,
        roundedCorners,
        setRoundedCorners,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
