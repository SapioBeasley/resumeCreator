import googleFactory from '../factories/google';

const createHeaderFooter = async (documentId: string) => {
  const {
    data: { replies },
  } = await googleFactory.documents.batchUpdate(documentId, [
    {
      createHeader: {
        sectionBreakLocation: {
          index: 0,
        },
        type: 'DEFAULT',
      },
    },
    {
      createFooter: {
        type: 'DEFAULT',
      },
    },
  ]);

  const { headerId } =
    replies?.find((reply) => reply?.createHeader)?.createHeader || {};
  const { footerId } =
    replies?.find((reply) => reply?.createFooter)?.createFooter || {};

  if (!headerId || !footerId) {
    throw new Error('Failed to create header or footer');
  }

  console.info('Header and footer created successfully');

  return { headerId, footerId };
};

export default createHeaderFooter;
