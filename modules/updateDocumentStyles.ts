import googleFactory from '../factories/google';
import { fontColors, fontStyles, transparentTableBorder } from '../theme';

const updateDocumentStyles = async (
  documentId: string,
  headerId: string,
  footerId: string
) => {
  await googleFactory.documents.batchUpdate(documentId, [
    // Set header and footer margins
    {
      updateDocumentStyle: {
        documentStyle: {
          marginHeader: {
            magnitude: 14.5,
            unit: 'PT',
          },
          marginFooter: {
            magnitude: 14.5,
            unit: 'PT',
          },
        },
        fields: 'marginHeader,marginFooter',
      },
    },
    // Set header table border style
    {
      updateTableCellStyle: {
        tableStartLocation: {
          segmentId: headerId,
          index: 1,
        },
        tableCellStyle: {
          borderLeft: transparentTableBorder,
          borderRight: transparentTableBorder,
          borderTop: transparentTableBorder,
          borderBottom: {
            width: {
              magnitude: 1,
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
          },
          paddingLeft: {
            magnitude: 0,
            unit: 'PT',
          },
          paddingRight: {
            magnitude: 0,
            unit: 'PT',
          },
        },
        fields:
          'borderBottom,borderLeft,borderRight,borderTop,paddingLeft,paddingRight',
      },
    },
    // Set header left text style
    {
      updateTextStyle: {
        range: { segmentId: headerId, startIndex: 4, endIndex: 20 },
        textStyle: {
          foregroundColor: {
            color: { rgbColor: fontColors.darkGrey },
          },
          fontSize: { magnitude: 14, unit: 'PT' },
          weightedFontFamily: { fontFamily: 'Oswald', weight: 400 },
        },
        fields: 'foregroundColor,fontSize,weightedFontFamily',
      },
    },
    // Set header right text alignment
    {
      updateParagraphStyle: {
        range: {
          segmentId: headerId,
          startIndex: 21,
          endIndex: 69,
        },
        paragraphStyle: {
          alignment: 'END',
        },
        fields: 'alignment',
      },
    },
    // Set header right line 1 text style
    {
      updateTextStyle: {
        range: { segmentId: headerId, startIndex: 21, endIndex: 31 },
        textStyle: fontStyles.baseFontStyle,
        fields: 'foregroundColor,fontSize,weightedFontFamily',
      },
    },
    // Set header right line 2 text style
    {
      updateTextStyle: {
        range: { segmentId: headerId, startIndex: 31, endIndex: 69 },
        textStyle: {
          ...fontStyles.baseFontStyle,
          foregroundColor: {
            color: { rgbColor: fontColors.redBerry },
          },
        },
        fields: 'foregroundColor,fontSize,weightedFontFamily',
      },
    },
    // Set footer text alignment
    {
      updateParagraphStyle: {
        range: {
          segmentId: footerId,
          startIndex: 0,
          endIndex: 55,
        },
        paragraphStyle: {
          alignment: 'CENTER',
        },
        fields: 'alignment',
      },
    },
    // Set footer text style
    {
      updateTextStyle: {
        range: { segmentId: footerId, startIndex: 0, endIndex: 55 },
        textStyle: fontStyles.baseFontStyle,
        fields: 'foregroundColor,fontSize,weightedFontFamily',
      },
    },
  ]);
};

export default updateDocumentStyles;
