type ColorPalettePictureRenderType = { url?: string } | { emoji?: string };

export const colorPalettePicture = {
  catppuccin: {
    url: "https://github.com/catppuccin/catppuccin/blob/main/assets/logos/exports/1544x1544_circle.png?raw=true",
  },
  dracula: {
    url: "https://avatars.githubusercontent.com/u/19436447?raw=true",
  },
  edge: {},
  everforest: {
    emoji: "🌲",
  },
  "gruvbox-material": {},
  gruvbox: {
    url: "https://morhetz.com/gruvbox.svg?raw=true",
  },
  nord: {
    url: "https://raw.githubusercontent.com/nordtheme/assets/main/static/images/logos/heroes/logo-typography/dark/frostic/nord3/spaced.svg?raw=true",
  },
  onedark: {
    url: "https://github.com/navarasu/onedark.nvim/assets/20145075/5dfe9607-977f-48d9-836f-88a556ec57a3?raw=true",
  },
  "rose-pine": {
    url: "https://raw.githubusercontent.com/rose-pine/rose-pine-theme/main/assets/icon.png?raw=true",
  },
  solarized: {
    url: "https://github.com/altercation/solarized/raw/master/img/solarized-yinyang.png?raw=true",
  },
  "tokyo-night": {
    emoji: "🏙",
  },
} as const satisfies Record<string, ColorPalettePictureRenderType>;

export type ColorPaletteName = keyof typeof colorPalettePicture;

export const isImagePalette = (
  palette: ColorPalettePictureRenderType
): palette is { url: string } => {
  return palette !== undefined && "url" in palette && !!palette.url;
};

export const isEmojiPalette = (
  palette: ColorPalettePictureRenderType
): palette is { emoji: string } => {
  return palette !== undefined && "emoji" in palette && !!palette.emoji;
};

export type jsonFileData = {
  fileName: ColorPaletteName;
  paletteVariations: any;
};
