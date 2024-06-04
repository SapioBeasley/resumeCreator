import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
  keyFilename: `${__dirname}/../credentials.json`,
  scopes: [
    'https://www.googleapis.com/auth/documents.readonly',
    'https://www.googleapis.com/auth/drive',
  ],
});

export default auth;
