import { docs_v1 } from 'googleapis';
import createHeader from './createHeader';
import createEducation from './createEducation';
import createExperience from './createExperience';
import createSkills from './createSkills';
import createSummary from './createSummary';
import googleFactory from '../factories/google';
import { Content } from '../types/content';

const createDocument = async (documentId: string, content: Content[]) => {
  let currentIndex = 1;

  const requests: docs_v1.Schema$Request[] = [];

  content.forEach((section) => {
    const { requests: headerRequests, newCurrentIndex } = createHeader(
      section.header,
      currentIndex
    );

    requests.push(...headerRequests);

    currentIndex = newCurrentIndex;

    section.content?.forEach((contentItem) => {
      if (contentItem.type === 'summary') {
        const { requests: summaryRequests, newCurrentIndex } = createSummary(
          contentItem.value,
          currentIndex
        );

        requests.push(...summaryRequests);

        currentIndex = newCurrentIndex;
      } else if (contentItem.type === 'experience') {
        const { requests: experienceRequests, newCurrentIndex } =
          createExperience(contentItem.value, currentIndex);

        requests.push(...experienceRequests);

        currentIndex = newCurrentIndex;
      } else if (contentItem.type === 'skills') {
        const skills = contentItem.value;

        Object.entries(skills).forEach(([category, skillsList]) => {
          const { requests: skillsRequests, newCurrentIndex } = createSkills(
            [category, skillsList],
            currentIndex
          );

          requests.push(...skillsRequests);

          currentIndex = newCurrentIndex;
        });
      } else if (contentItem.type === 'education') {
        const { requests: educationRequests, newCurrentIndex } =
          createEducation(contentItem.value, currentIndex);

        requests.push(...educationRequests);

        currentIndex = newCurrentIndex;
      }
    });
  });

  await googleFactory.documents.batchUpdate(documentId, requests);

  console.info('Document body populated successfully');
};

export default createDocument;
