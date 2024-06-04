import googleFactory from '../factories/google';

const checkOrCreateFolder = async (folderName: string) => {
  let folderId: string | null | undefined;

  const { data } = await googleFactory.drive.files.list({
    q: `mimeType='application/vnd.google-apps.folder' and name='${folderName}' and trashed=false`,
  });

  if (data.files?.length === 0) {
    const { data } = await googleFactory.drive.files.create({
      name: folderName,
      mimeType: 'application/vnd.google-apps.folder',
    });

    folderId = data.id;
  } else {
    folderId = data.files?.[0].id;
  }

  return folderId;
};

export default checkOrCreateFolder;
