import { Content } from './types/content';
import { FooterContent } from './types/footerContent';
import { HeaderContent } from './types/headerContent';

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
