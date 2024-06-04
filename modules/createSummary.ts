import { docs_v1 } from 'googleapis';
import { fontStyles } from '../theme';
import { SectionManager } from '../types/sectionManager';
import generateRangeIndexes from './generateRangeIndexes';

const createSummary = (
  summary: string,
  currentIndex: number
): SectionManager => {
  const summaryText = `${summary}\n`;
  const { startIndex: summaryStartIndex, endIndex: summaryEndIndex } =
    generateRangeIndexes(currentIndex, summary);

  const summaryRequests: docs_v1.Schema$Request[] = [];

  summaryRequests.push({
    insertText: {
      location: { index: summaryStartIndex },
      text: summaryText,
    },
  });

  summaryRequests.push({
    updateParagraphStyle: {
      range: {
        startIndex: summaryStartIndex,
        endIndex: summaryEndIndex,
      },
      paragraphStyle: { namedStyleType: 'NORMAL_TEXT' },
      fields: 'namedStyleType',
    },
  });

  summaryRequests.push({
    updateTextStyle: {
      range: { startIndex: summaryStartIndex, endIndex: summaryEndIndex },
      textStyle: fontStyles.normalTextFontStyle,
      fields: 'foregroundColor,fontSize,weightedFontFamily',
    },
  });

  return {
    requests: summaryRequests,
    newCurrentIndex: summaryEndIndex,
  };
};

export default createSummary;
