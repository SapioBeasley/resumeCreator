import { docs_v1, drive_v3, google } from 'googleapis';
import auth from '../modules/auth';
import { GaxiosResponse } from 'gaxios';

const docs = google.docs({ version: 'v1', auth });
const drive = google.drive({ version: 'v3', auth });

const checkResponse = <R>(
  response: GaxiosResponse,
  errorMessage: string
): GaxiosResponse<R> => {
  if (response.status !== 200) {
    throw new Error(errorMessage);
  }

  return response;
};

const googleFactory = {
  documents: {
    batchUpdate: async (
      documentId: string,
      requests: docs_v1.Schema$Request[]
    ): Promise<GaxiosResponse<docs_v1.Schema$BatchUpdateDocumentResponse>> => {
      const response = await docs.documents.batchUpdate({
        documentId,
        requestBody: {
          requests,
        },
      });

      return checkResponse(response, 'Failed to update document');
    },
    create: async (
      payload: docs_v1.Schema$Document
    ): Promise<GaxiosResponse<docs_v1.Schema$Document>> => {
      const response = await docs.documents.create({
        requestBody: payload,
      });

      return checkResponse(response, 'Failed to create document');
    },
  },
  drive: {
    files: {
      list: async ({
        q,
      }: drive_v3.Params$Resource$Files$List): Promise<
        GaxiosResponse<drive_v3.Schema$FileList>
      > => {
        const response = await drive.files.list({
          q,
          spaces: 'drive',
          fields: 'files(id, name)',
        });

        return checkResponse(response, 'Failed to list files');
      },
      create: async (
        payload: drive_v3.Schema$File
      ): Promise<GaxiosResponse<drive_v3.Schema$File>> => {
        const response = await drive.files.create({
          requestBody: payload,
        });

        return checkResponse(response, 'Failed to create file');
      },
      update: async (
        payload: drive_v3.Params$Resource$Files$Update
      ): Promise<GaxiosResponse<drive_v3.Schema$File>> => {
        const response = await drive.files.update(payload);

        return checkResponse(response, 'Failed to update file');
      },
    },
    permissions: {
      create: async (
        payload: drive_v3.Params$Resource$Permissions$Create
      ): Promise<GaxiosResponse<drive_v3.Schema$Permission>> => {
        const response = await drive.permissions.create(payload);

        return checkResponse(response, 'Failed to create permission');
      },
      list: async (
        payload: drive_v3.Params$Resource$Permissions$List
      ): Promise<GaxiosResponse<drive_v3.Schema$PermissionList>> => {
        const response = await drive.permissions.list(payload);

        return checkResponse(response, 'Failed to list permissions');
      },
    },
  },
};

export default googleFactory;
