/**
 * Converts a hexadecimal color code to an RGB color array.
 *
 * @param hex - The hexadecimal color code to convert.
 * @returns An array containing the RGB components [r, g, b], or null if the conversion fails.
 */
export const hexToRgb = (hex: string): [number, number, number] | null => {
  // Remove '#' if it exists in the hex string
  const hexCleaned = hex.startsWith("#") ? hex.slice(1) : hex;

  // Parse the hex string into a number
  const hexInt = parseInt(hexCleaned, 16);

  // Check if the parsing was successful
  if (isNaN(hexInt)) {
    return null;
  }

  // Extract RGB components
  const r = (hexInt >> 16) & 0xff;
  const g = (hexInt >> 8) & 0xff;
  const b = hexInt & 0xff;

  return [r, g, b];
};

/**
 * Converts an array of hexadecimal color codes to RGB color values.
 * @param hexColors - An array of hexadecimal color codes.
 * @returns An array of RGB color values.
 */
export const hexColorsToRgb = (
  hexColors: string[]
): [number, number, number][] => {
  return hexColors
    .map((hex) => hexToRgb(hex))
    .filter((rgb) => rgb !== null) as [number, number, number][];
};
