import { Content } from './src/types/content';
import { FooterContent } from './src/types/footerContent';
import { HeaderContent } from './src/types/headerContent';

const headerContent: HeaderContent = {
  name: '',
  contact: '',
};

const footerContent: FooterContent = {
  text: '',
};

const content: Content[] = [
  {
    header: 'Summary',
    content: [
      {
        type: 'summary',
        value: '',
      },
    ],
  },
  {
    header: 'Professional Experience',
    content: [
      {
        type: 'experience',
        value: {
          company: '',
          overview: '',
          projects: [],
        },
      },
    ],
  },
  {
    header: 'Technical Skills',
    content: [
      {
        type: 'skills',
        value: {
          Languages: [],
        },
      },
    ],
  },
  {
    header: 'Education',
    content: [
      {
        type: 'education',
        value: '',
      },
    ],
  },
];

export { content, headerContent, footerContent };
