import googleFactory from '../factories/google';

const shouldShareFolder = async (folderId: string, emailAddress: string) => {
  try {
    const { data } = await googleFactory.drive.permissions.list({
      fileId: folderId,
      fields: 'permissions(id, emailAddress)',
    });

    return !data.permissions?.some(
      (permission) => permission.emailAddress === emailAddress
    );
  } catch (error) {
    console.error('Error checking folder permissions:', error);
    return false;
  }
};

export default shouldShareFolder;
