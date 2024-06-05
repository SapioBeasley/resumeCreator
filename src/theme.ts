import { docs_v1 } from 'googleapis';

const fontColors = {
  darkGrey: { red: 67 / 255, blue: 67 / 255, green: 67 / 255 },
  redBerry: { red: 152 / 255, blue: 0 / 255, green: 0 / 255 },
};

const baseFontStyle: docs_v1.Schema$TextStyle = {
  fontSize: { magnitude: 9, unit: 'PT' },
  foregroundColor: { color: { rgbColor: fontColors.darkGrey } },
  weightedFontFamily: { fontFamily: 'Roboto Condensed', weight: 400 },
};

const fontStyles = {
  baseFontStyle,
  headerFontStyle: {
    ...baseFontStyle,
    fontSize: { magnitude: 14, unit: 'PT' },
    weightedFontFamily: { fontFamily: 'Oswald', weight: 400 },
  },
  subtitleFontStyle: {
    ...baseFontStyle,
    fontSize: { magnitude: 9, unit: 'PT' },
    weightedFontFamily: { fontFamily: 'Roboto Condensed', weight: 700 },
    bold: true,
  },
  normalTextFontStyle: {
    ...baseFontStyle,
  },
  boldTextFontStyle: {
    ...baseFontStyle,
    bold: true,
    weightedFontFamily: { fontFamily: 'Roboto Condensed', weight: 700 },
  },
};

const transparentTableBorder = {
  width: {
    magnitude: 0,
    unit: 'PT',
  },
  color: {
    color: {
      rgbColor: {
        red: 0,
        green: 0,
        blue: 0,
      },
    },
  },
  dashStyle: 'SOLID',
};

export { fontColors, transparentTableBorder, fontStyles };
