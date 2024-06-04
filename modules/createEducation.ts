import { docs_v1 } from 'googleapis';
import { fontStyles } from '../theme';
import { SectionManager } from '../types/sectionManager';
import generateRangeIndexes from './generateRangeIndexes';

const createEducation = (
  education: string,
  currentIndex: number
): SectionManager => {
  const { startIndex: educationStartIndex, endIndex: educationEndIndex } =
    generateRangeIndexes(currentIndex, education);
  const [boldText, normalText] = education.split('\n');
  const boldTextLength = boldText.length;

  const educationRequests: docs_v1.Schema$Request[] = [];

  educationRequests.push({
    insertText: {
      location: { index: educationStartIndex },
      text: `${boldText}\n${normalText}\n`,
    },
  });

  educationRequests.push({
    updateTextStyle: {
      range: {
        startIndex: educationStartIndex,
        endIndex: educationStartIndex + boldTextLength,
      },
      textStyle: fontStyles.boldTextFontStyle,
      fields: 'foregroundColor,fontSize,weightedFontFamily',
    },
  });

  educationRequests.push({
    updateTextStyle: {
      range: {
        startIndex: educationStartIndex + boldTextLength + 1,
        endIndex: educationEndIndex,
      },
      textStyle: fontStyles.normalTextFontStyle,
      fields: 'foregroundColor,fontSize,weightedFontFamily',
    },
  });

  return {
    requests: educationRequests,
    newCurrentIndex: educationEndIndex,
  };
};

export default createEducation;
