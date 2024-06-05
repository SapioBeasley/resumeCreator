import googleFactory from '../factories/google';
import { FooterContent } from '../types/footerContent';
import { HeaderContent } from '../types/headerContent';

const populateHeaderFooter = async (
  documentId: string,
  headerId: string,
  footerId: string,
  headerContent: HeaderContent,
  footerContent: FooterContent
) => {
  await googleFactory.documents.batchUpdate(documentId, [
    {
      insertTable: {
        rows: 1,
        columns: 2,
        location: {
          segmentId: headerId,
          index: 0,
        },
      },
    },
    {
      insertText: {
        location: {
          segmentId: headerId,
          index: 4,
        },
        text: headerContent.name,
      },
    },
    {
      insertText: {
        location: {
          segmentId: headerId,
          index: 21,
        },
        text: headerContent.contact,
      },
    },
    {
      insertText: {
        location: { segmentId: footerId, index: 0 },
        text: footerContent.text,
      },
    },
  ]);
};

export default populateHeaderFooter;
