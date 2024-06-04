import { docs_v1 } from 'googleapis';
import { fontStyles } from '../theme';
import { SectionManager } from '../types/sectionManager';

const createSkills = (
  [category, skillsList]: [string, string[]],
  currentIndex: number
): SectionManager => {
  const skillsText = skillsList.join(', ');
  const categoryStartIndex = currentIndex;
  const boldTextLength = `${category}: `.length;
  const categoryEndIndex =
    categoryStartIndex + `${category}: ${skillsText}`.length + 1;

  const skillsRequests: docs_v1.Schema$Request[] = [];

  // Insert skill category and skills
  skillsRequests.push({
    insertText: {
      location: { index: categoryStartIndex },
      text: `${category}: ${skillsText}\n`,
    },
  });

  skillsRequests.push({
    updateTextStyle: {
      range: {
        startIndex: categoryStartIndex,
        endIndex: categoryStartIndex + boldTextLength,
      },
      textStyle: fontStyles.boldTextFontStyle,
      fields: 'foregroundColor,fontSize,weightedFontFamily',
    },
  });

  skillsRequests.push({
    updateTextStyle: {
      range: {
        startIndex: categoryStartIndex + boldTextLength,
        endIndex: categoryEndIndex,
      },
      textStyle: fontStyles.normalTextFontStyle,
      fields: 'bold,foregroundColor,fontSize,weightedFontFamily',
    },
  });

  return { requests: skillsRequests, newCurrentIndex: categoryEndIndex };
};

export default createSkills;
