import { Experience } from './experience';

export type ContentItem =
  | { type: 'summary'; value: string }
  | { type: 'education'; value: string }
  | {
      type: 'experience';
      value: Experience;
    }
  | { type: 'skills'; value: Record<string, string[]> };
