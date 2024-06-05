import { docs_v1 } from 'googleapis';
import { fontStyles } from '../theme';
import { SectionManager } from '../types/sectionManager';
import { Experience } from '../types/experience';

const createExperience = (
  experience: Experience,
  currentIndex: number
): SectionManager => {
  const experienceStartIndex = currentIndex;

  const [companyName, positionDateLocation] = experience.company.split('\n');

  const companyText = `${experience.company}\n`;
  const overviewText = `${experience.overview}\n`;
  const keyProjectsText = `Key Projects\n`;
  const projectsText = experience.projects
    .map((project) => `${project}\n`)
    .join('');

  const experienceEndIndex =
    experienceStartIndex +
    companyText.length +
    overviewText.length +
    keyProjectsText.length +
    projectsText.length;

  const experienceRequests: docs_v1.Schema$Request[] = [];

  // Insert company
  experienceRequests.push({
    insertText: {
      location: { index: experienceStartIndex },
      text: `${companyName}\n${positionDateLocation}\n`,
    },
  });

  experienceRequests.push({
    updateParagraphStyle: {
      range: {
        startIndex: experienceStartIndex,
        endIndex: experienceStartIndex + companyText.length,
      },
      paragraphStyle: {
        namedStyleType: 'SUBTITLE',
        spaceBelow: {
          magnitude: 0,
          unit: 'PT',
        },
      },
      fields: 'namedStyleType,spaceBelow',
    },
  });

  experienceRequests.push({
    updateTextStyle: {
      range: {
        startIndex: experienceStartIndex,
        endIndex: experienceStartIndex + companyName.length,
      },
      textStyle: fontStyles.subtitleFontStyle,
      fields: 'bold,foregroundColor,fontSize,weightedFontFamily',
    },
  });

  // Insert overview
  experienceRequests.push({
    insertText: {
      location: { index: experienceStartIndex + companyText.length },
      text: overviewText,
    },
  });

  experienceRequests.push({
    updateParagraphStyle: {
      range: {
        startIndex: experienceStartIndex + companyText.length,
        endIndex:
          experienceStartIndex + companyText.length + overviewText.length,
      },
      paragraphStyle: {
        namedStyleType: 'NORMAL_TEXT',
        spaceAbove: {
          magnitude: 6,
          unit: 'PT',
        },
        spaceBelow: {
          magnitude: 6,
          unit: 'PT',
        },
      },
      fields: 'namedStyleType,spaceAbove,spaceBelow',
    },
  });

  experienceRequests.push({
    updateTextStyle: {
      range: {
        startIndex: experienceStartIndex + companyName.length,
        endIndex:
          experienceStartIndex + companyText.length + overviewText.length,
      },
      textStyle: fontStyles.normalTextFontStyle,
      fields: 'bold,foregroundColor,fontSize,weightedFontFamily',
    },
  });

  // Insert key projects
  const keyProjectsStartIndex =
    experienceStartIndex + companyText.length + overviewText.length;
  const keyProjectsEndIndex = keyProjectsStartIndex + keyProjectsText.length;

  experienceRequests.push({
    insertText: {
      location: {
        index: keyProjectsStartIndex,
      },
      text: keyProjectsText,
    },
  });

  experienceRequests.push({
    updateParagraphStyle: {
      range: {
        startIndex: keyProjectsStartIndex,
        endIndex: keyProjectsEndIndex,
      },
      paragraphStyle: {
        namedStyleType: 'NORMAL_TEXT',
        spaceAbove: {
          magnitude: 6,
          unit: 'PT',
        },
        spaceBelow: {
          magnitude: 6,
          unit: 'PT',
        },
      },
      fields: 'namedStyleType,spaceAbove,spaceBelow',
    },
  });

  experienceRequests.push({
    updateTextStyle: {
      range: {
        startIndex: keyProjectsStartIndex,
        endIndex: keyProjectsEndIndex,
      },
      textStyle: fontStyles.boldTextFontStyle,
      fields: 'bold,foregroundColor,fontSize,weightedFontFamily',
    },
  });

  // Insert projects
  const projectsStartIndex = keyProjectsEndIndex;
  const projectsEndIndex = projectsStartIndex + projectsText.length;

  experienceRequests.push({
    insertText: {
      location: {
        index: projectsStartIndex,
      },
      text: projectsText,
    },
  });

  experienceRequests.push({
    createParagraphBullets: {
      range: {
        startIndex: projectsStartIndex,
        endIndex: projectsEndIndex,
      },
      bulletPreset: 'BULLET_LEFTTRIANGLE_DIAMOND_DISC',
    },
  });

  experienceRequests.push({
    updateParagraphStyle: {
      range: {
        startIndex: projectsStartIndex,
        endIndex: projectsEndIndex,
      },
      paragraphStyle: {
        namedStyleType: 'NORMAL_TEXT',
        spaceAbove: {
          magnitude: 6,
          unit: 'PT',
        },
        spaceBelow: {
          magnitude: 6,
          unit: 'PT',
        },
      },
      fields: 'namedStyleType,spaceAbove,spaceBelow',
    },
  });

  experienceRequests.push({
    updateTextStyle: {
      range: {
        startIndex: projectsStartIndex,
        endIndex: projectsEndIndex,
      },
      textStyle: fontStyles.normalTextFontStyle,
      fields: 'bold,foregroundColor,fontSize,weightedFontFamily',
    },
  });

  return { requests: experienceRequests, newCurrentIndex: experienceEndIndex };
};

export default createExperience;
