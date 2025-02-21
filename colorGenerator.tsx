import {
  themeFromSourceColor,
  argbFromHex,
} from "@material/material-color-utilities";

/**
 * Converts ARGB number type into hex string
 * @param {number} argb - You may use this to convert value generated from colorGenerator to hex strings
 * @return {string} Hex string
 */
export function argbToHex(argb: number): string {
  const r = (argb >> 16) & 0xff;
  const g = (argb >> 8) & 0xff;
  const b = argb & 0xff;
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
}

/** Implementing Material utilities for converting hex color to their defined interface for colors
 * @param {string} hexColor - The source color as hex string, HTML input color value can be used
 * @returns {Record<string, number>} Returns set of Objects for themes, value are in ARGB number.
 */
export function colorGenerator(hexColor: string) {
  const theme = themeFromSourceColor(argbFromHex(hexColor));
  const obj: Record<string, number> = theme.schemes.light.toJSON();
  obj["surfaceContainerLowest"] = theme.palettes.neutral.tone(100);
  obj["surfaceContainerLow"] = theme.palettes.neutral.tone(96);
  obj["surfaceContainer"] = theme.palettes.neutral.tone(92);
  obj["surfaceContainerHigh"] = theme.palettes.neutral.tone(87);
  obj["surfaceContainerHighest"] = theme.palettes.neutral.tone(81);
  return obj;
}

/**
 * This applies CSS variables from color theme generated from colorGenerator
 * @param {Record<string, number>} colors - Set of theme color, use colorGenerator for this one
 * @returns {void} Append CSS property in document element's root, with prefix "--color-[nameOfTheColor]";
 */
export function applyColors(colors: Record<string, number>) {
  const root = document.documentElement;
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-${key}`, argbToHex(value));
  });
}
