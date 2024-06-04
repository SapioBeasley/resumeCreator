import { docs_v1 } from 'googleapis';
import { fontStyles } from '../theme';
import { SectionManager } from '../types/sectionManager';
import generateRangeIndexes from './generateRangeIndexes';

const createHeader = (
  sectionHeader: string,
  currentIndex: number
): SectionManager => {
  const headerText = `${sectionHeader}\n`;
  const { startIndex: headerStartIndex, endIndex: headerEndIndex } =
    generateRangeIndexes(currentIndex, sectionHeader);

  const headerRequests: docs_v1.Schema$Request[] = [];

  // Insert header
  headerRequests.push({
    insertText: {
      location: { index: headerStartIndex },
      text: headerText,
    },
  });

  headerRequests.push({
    updateParagraphStyle: {
      range: { startIndex: headerStartIndex, endIndex: headerEndIndex },
      paragraphStyle: { namedStyleType: 'HEADING_1' },
      fields: 'namedStyleType',
    },
  });

  headerRequests.push({
    updateTextStyle: {
      range: { startIndex: headerStartIndex, endIndex: headerEndIndex },
      textStyle: fontStyles.headerFontStyle,
      fields: 'foregroundColor,fontSize,weightedFontFamily',
    },
  });

  return {
    requests: headerRequests,
    newCurrentIndex: headerEndIndex,
  };
};

export default createHeader;
