import { Content } from './src/types/content';
import { FooterContent } from './src/types/footerContent';
import { HeaderContent } from './src/types/headerContent';

const headerContent: HeaderContent = {
  name: 'ANDREAS BEASLEY',
  contact: 'Houston TX\n(626) 394-1608 - ANDREAS@SAPIOWEB.COM',
};

const footerContent: FooterContent = {
  text: 'linkedin.com/in/sapiobeasley • github.com/SapioBeasley',
};

const content: Content[] = [
  {
    header: 'Software Engineer',
    content: [
      {
        type: 'summary',
        value:
          'Results-driven professional with extensive software development skills, capable of creating technically robust and efficient programs at the forefront of the digital landscape. Expertise in all phases of the software development lifecycle, including initial specification, development, testing, and deployment. Experienced in automation for production environments and application management services. Proficient with the Next.js app directory framework and factory method design patterns. Excellent communication and interpersonal skills for building positive work relationships with professionals at all levels.',
      },
    ],
  },
  {
    header: 'Professional Experience',
    content: [
      {
        type: 'experience',
        value: {
          company:
            'SapioWeb LLC\nSoftware Engineer | Jan 2014 - Ongoing | Henderson NV',
          overview:
            'Specializing in full-stack development, I designed, developed, and launched web applications using Node.js, Angular, MongoDB, jQuery, SQL, and NGINX.',
          projects: [
            'Business Website Development: Built and deployed websites for multiple industries, enhancing client satisfaction and online presence.',
            'Linux Server Management: Ensured high availability and reliability by managing Linux servers with zero downtime.',
          ],
        },
      },
      {
        type: 'experience',
        value: {
          company:
            'Sirge\nLead Software Engineer | Dec 2022 – May 2024 | Fort Worth TX',
          overview:
            'I led the development and implementation of a cutting-edge marketing attribution platform. By managing a remote team of engineers and leveraging technologies like Next.js, TypeScript, and AWS, I assisted the CTO in delivering scalable and efficient systems.',
          projects: [
            'Marketing Attribution Platform: Successfully launched within 6 months, increasing user engagement by 30% through advanced automation tools and serverless architecture.',
            'Automation of Ad Image Pulling: Implemented automated processes for ad image retrieval from various ad management platforms, eliminating manual effort and improving data accuracy.',
            'Initial Pull of User Analytics: Enhanced user retention by providing immediate value through a day-zero initial pull of user analytics.',
            'AI Algorithm for Customer Stores: Developed an AI algorithm to analyze potential customer stores, offering actionable insights that boosted customer satisfaction and engagement.',
          ],
        },
      },
      {
        type: 'experience',
        value: {
          company:
            'Byte®\nSenior Full Stack Engineer | Jan 2019 – Dec 2022 | Las Vegas, NV',
          overview:
            "During Byte's startup phase, I played a crucial role in its technological growth and eventual acquisition by Dentsply Sirona for $1.04 billion. My work focused on business automation, web, and mobile app development using TypeScript, Node.js, and React Native.",
          projects: [
            'Invisible Aligner Onboarding Process: Developed key features to improve user experience and operational efficiency.',
            'Customer Impression Automation: Created processes to automate customer impression handling, increasing productivity and reducing errors.',
            'Internal and External Platforms: Developed platforms to enhance communication and workflow between customers, dentists, and treatment planners.',
            'User-Facing Mobile App: Created portions of the mobile app to track onboarding and treatment progress, enhancing user engagement and satisfaction.',
          ],
        },
      },
      {
        type: 'experience',
        value: {
          company:
            'Chargebacks911\nSr Software Engineer | Jun 2016 - Sep 2018 | Clearwater FL',
          overview:
            'In my role, I utilized Python for CRM and payment processing data accumulation, normalized data using PHP, and developed new features for internal reporting and auditing platforms.',
          projects: [
            'Internal Reporting and Auditing Platform: Improved data accuracy and reporting capabilities.',
            'Business-Specific Integrations: Enhanced data processing and operational efficiency by integrating specific business transaction data.',
            'Chargeback Case Automation: Developed processes to automate chargeback case building, reducing manual intervention and processing time.',
          ],
        },
      },
      {
        type: 'experience',
        value: {
          company:
            'Peaceful Computing / Brydan Solutions\nPHP Developer | Jan 2013 – Feb 2016 | Las Vegas NV',
          overview:
            'I improved the code base of company products and provided detailed specifications. My work included building websites for business clients, maintaining product stability through rigorous troubleshooting, and ensuring optimal performance.',
          projects: [
            'Client Website Development: Built websites for clients, enhancing their digital presence and operational efficiency.',
          ],
        },
      },
      {
        type: 'experience',
        value: {
          company:
            'Block Entertainment\nIT Specialist, Front-End Development | Oct 2011 – Jan 2013 | Los Angeles CA',
          overview:
            'I directed the Tech Department operations, developed company websites, and managed hardware. I also built in-house informational and paywall infrastructure and managed live streaming servers',
          projects: [
            'Informational and Paywall Infrastructure: Enhanced content monetization and user access management by developing in-house infrastructure.',
            'Live Streaming Server Management: Managed Icecast live streaming servers, ensuring seamless streaming and high-quality user experience.',
          ],
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
          Languages: [
            'bun',
            'Node.js',
            'Python',
            'JavaScript',
            'TypeScript',
            'PostgreSQL',
            'SQL',
            'MongoDB',
            'GraphQL',
            'RESTful APIs',
            'PHP',
          ],
          'Tech Stacks': ['NEXT.js', 'MEAN', 'LAMP'],
          Frameworks: [
            'Next.js',
            'Express',
            'Tailwind',
            'shadcn',
            'MedusaJS',
            'Socket.io',
            'Bootstrap',
            'Redux',
            'Zustand',
            'Angular',
            'React Native',
            'jQuery',
          ],
          'Development Tools': [
            'DBeaver',
            'DataGrip',
            'Docker',
            'VSCode',
            'Webpack',
            'Babel',
            'Jest',
          ],
          'Project Skills': [
            'Agile',
            'SCRUM',
            'Wireframing',
            'Prototyping',
            'Schema Design',
            'DevOps',
            'CI/CD (GitHub Actions)',
          ],
          'Server Tech': [
            'AWS',
            'Nginx',
            'Vercel',
            'Firebase',
            'Terraform',
            'Ansible',
            'Kubernetes',
            'Linux',
            'Icecast',
          ],
          'Additional Tools & Technologies': [
            'Trigger.dev',
            'Puppeteer',
            'Snowflake',
            'ElasticSearch',
            'Microservices',
            'Serverless',
            'Git',
          ],
        },
      },
    ],
  },
  {
    header: 'Education',
    content: [
      {
        type: 'education',
        value:
          'Bachelor of Science in Computer Science, 2011\nTUSKEGEE UNIVERSITY TUSKEGEE, AL',
      },
    ],
  },
];

export { content, headerContent, footerContent };
