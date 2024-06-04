import createBlankDocument from './modules/createBlankDocument';
import createHeaderFooter from './modules/createHeaderFooter';
import populateHeaderFooter from './modules/populateHeaderFooter';
import updateDocumentStyles from './modules/updateDocumentStyles';
import { content, headerContent, footerContent } from './content';

import populateDocumentBody from './modules/populateDocumentBody';

(async () => {
  try {
    const documentId = await createBlankDocument();

    const { headerId, footerId } = await createHeaderFooter(documentId);

    await populateHeaderFooter(
      documentId,
      headerId,
      footerId,
      headerContent,
      footerContent
    );

    await updateDocumentStyles(documentId, headerId, footerId);

    await populateDocumentBody(documentId, content);
  } catch (error) {
    let message = 'Unknown error';

    if (error instanceof Error) {
      message = error.message;
    }

    console.error(message);
  }
})();
