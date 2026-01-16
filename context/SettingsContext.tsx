"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Theme = "classic" | "sandstone" | "slate";
export type Spacing = "cozy" | "compact";
export type Formality = "playful" | "serious";

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
    root.classList.remove("theme-sandstone", "theme-slate", "theme-classic");
    root.classList.add(`theme-${theme}`);

    // Apply Spacing
    if (spacing === "cozy") {
      root.classList.remove("spacing-compact");
    } else {
      root.classList.add("spacing-compact");
    }

    // Apply Rounded Corners
    if (roundedCorners) {
      root.classList.remove("rounded-off");
    } else {
      root.classList.add("rounded-off");
    }
  }, [theme, spacing, roundedCorners]);

  return (
    <SettingsContext.Provider
      value={{
        theme,
        setTheme,
        //
        spacing,
        setSpacing,
        //
        formality,
        setFormality,
        //
        roundedCorners,
        setRoundedCorners,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
