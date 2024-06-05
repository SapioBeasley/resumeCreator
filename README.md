# Resume Creator

This project creates a Google Document based on provided content and templates.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/SapioBeasley/resumeCreator.git
   cd resumeCreator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Create `credentials.json`

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing project.
3. Enable the Google Docs API for your project:

   - Navigate to the **API Library**.
   - Search for "Google Docs API".
   - Click on the **Google Docs API** and then click **Enable**.

4. Create credentials for the Google Docs API:

   - Go to the **Credentials** page.
   - Click **Create Credentials** and select **Service Account**.
   - Fill in the required details and click **Create**.
   - On the next screen, click **Done**.
   - Find your newly created service account in the list, click the **Edit** icon.
   - Go to the **Keys** tab.
   - Click **Add Key** and select **JSON**. This will download the `credentials.json` file.

5. Place the `credentials.json` file in the root directory of the project.

### Running the Project

1. To create a Google Document, run the following command:
   ```bash
   npm run createDocument
   ```

### Scripts

- `build`: Compiles the TypeScript files.
- `createDocument`: Runs the script to create a Google Document.

### Project Structure

- `src/`: Contains the TypeScript source files.
- `dist/`: Contains the compiled JavaScript files.
- `content.ts`: Contains the content to be added to the document.
- `modules/`: Contains the modules responsible for creating and populating the document.

### Content Structure

- `headerContent`: Contains the header information.
- `footerContent`: Contains the footer information.
- `content`: Contains the main content of the document, structured in sections.

### Example Content

```typescript
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
```

### Example Output

![image](Screenshot%202024-06-04%20at%204.02.21%20PM.png)

### Author

Andreas Beasley - [andreas@sapioweb.com](mailto:andreas@sapioweb.com)

### License

This project is licensed under the MIT License.

### Issues

If you encounter any issues, please report them [here](https://github.com/SapioBeasley/resumeCreator/issues).
