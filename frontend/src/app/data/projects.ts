export const projectsData: any[] = [
  {
    id: 'dassault-aviation',
    title: 'IoT Plateform',
    subtitle: 'Dassault Aviation',
    image: {
      folder: 'dassault-aviation',
      backgroundColor: '#426eb0',
      layers: [
        {
          widths: [200, 793, 1180, 1400],
          offset: 0,
          extension: 'jpg',
        },
        {
          widths: [200, 1400],
          offset: 5,
          extension: 'png',
        },
      ],
    },
    slidesUrl:
      'https://drive.google.com/file/d/1SVg7MTTNiJogSOGbiav2wjcY7s7RW4Lp/view?usp=sharing',
    quickOverview: {
      languages: ['Typescript', 'C#', 'SCSS', 'HTML'],
      frameworks: ['Kuzzle', 'Angular'],
      databases: ['Elasticsearch', 'Redis'],
      concepts: [
        'Internet of Things (IoT)',
        'ETL',
        'Software Integration',
        'Temperature Monitoring',
        'Data Visualization',
        'Containerization',
      ],
    },
  },
  {
    id: 'xyz-ingenierie',
    title: 'XYZ Ingénierie',
    subtitle: 'Personal Project',
    image: {
      folder: 'xyz-ingenierie',
      backgroundColor: '#faf2fd',
      layers: [
        {
          widths: [200, 1400],
          offset: -5,
          extension: 'png',
        },
        {
          widths: [200, 1400],
          offset: 3,
          extension: 'png',
        },
        {
          widths: [200, 1400],
          offset: 5,
          extension: 'png',
        },
      ],
    },
    sourceCodeUrl: 'https://github.com/NicolasDesnoust/XYZ-Ingenierie',
    quickOverview: {
      languages: ['Java', 'Typescript', 'SCSS', 'HTML'],
      frameworks: ['Spring Boot', 'Angular'],
      databases: ['H2'],
      concepts: [
        'Single Page Application',
        'Reactive Programming',
        'Centralized State Management',
        'Design patterns',
      ],
    },
  },
  {
    id: 'adm',
    title: 'Atelier des métiers',
    subtitle: 'Aix-Marseille University',
    image: {
      folder: 'adm',
      backgroundColor: '#3967b2',
      layers: [
        {
          widths: [200, 860, 1296, 1400],
          offset: 0,
          extension: 'jpg',
        },
        {
          widths: [200, 1400],
          offset: 5,
          extension: 'png',
        },
      ],
    },
    slidesUrl:
      'https://docs.google.com/presentation/d/10oWDqGLhDWdqb2moowZV0i5JAt7u6Usa/edit?usp=sharing&ouid=110983295053167197060&rtpof=true&sd=true',
    quickOverview: {
      languages: ['Java', 'Typescript', 'SCSS', 'HTML'],
      frameworks: ['Spring Boot', 'Angular'],
      databases: ['HyperSQL', 'MySQL'],
      concepts: [
        'Reverse Search Engine',
        'Centralized and Single Sign-On Authentication System (CAS SSO)',
        'User Experience',
      ],
    },
  },
  {
    id: 'wordsearch',
    title: 'Wordsearch',
    subtitle: 'Personal Project',
    image: {
      folder: 'wordsearch',
      backgroundColor: '#abedd2',
      layers: [
        {
          widths: [1400],
          offset: -5,
          extension: 'png',
        },
        {
          widths: [1400],
          offset: 0,
          extension: 'png',
        },
        {
          widths: [1400],
          offset: 1,
          extension: 'png',
        },
      ],
    },
    sourceCodeUrl: 'https://github.com/NicolasDesnoust/wordsearch',
    quickOverview: {
      languages: ['Java', 'Gherkin'],
      frameworks: ['Spring Boot'],
      librairies: ['Cucumber', 'ArchUnit', 'Tesseract'],
      concepts: [
        'Clean architecture',
        'Optical Character Recognition',
        'Multi-stage Docker builds',
      ],
    },
  },
  {
    id: 'marble-wars',
    title: 'Marble Wars',
    subtitle: 'Supervised Project',
    image: {
      folder: 'marble-wars',
      backgroundColor: 'black',
      layers: [
        {
          widths: [200, 1246, 1400],
          offset: -5,
          extension: 'jpg',
        },
        {
          widths: [200, 444, 620, 768, 900, 1019, 1128, 1231, 1332, 1400],
          offset: 5,
          extension: 'png',
        },
      ],
    },
    sourceCodeUrl: 'https://github.com/NicolasDesnoust/MarbleWars',
    quickOverview: {
      languages: ['C'],
      librairies: ['GTK'],
      concepts: ['Zuma Revenge', 'Graphical Interfaces', 'Bezier Curves'],
    },
  },
  {
    id: 'geolocalisation',
    title: 'Géolocalisation',
    subtitle: 'Supervised Project',
    image: {
      folder: 'geolocalisation',
      backgroundColor: 'white',
      layers: [
        {
          widths: [200, 1400],
          offset: -5,
          extension: 'png',
        },
        {
          widths: [200, 1400],
          offset: 3,
          extension: 'png',
        },
        {
          widths: [200, 1400],
          offset: 5,
          extension: 'png',
        },
        {
          widths: [200, 1400],
          offset: 5,
          extension: 'png',
        },
      ],
    },
    sourceCodeUrl: 'https://github.com/NicolasDesnoust/GEOLOCALISATION',
    quickOverview: {
      languages: ['Javascript', 'CSS', 'HTML'],
      frameworks: ['JQuery'],
      concepts: ['Geolocation', 'Multi-Criteria Filtering'],
    },
  },
  {
    id: 'desnote-book',
    title: 'Desnote Book',
    subtitle: 'Personal Project',
    image: {
      folder: 'desnote-book',
      backgroundColor: '#c1f9fa',
      layers: [
        {
          widths: [200, 1400],
          offset: -5,
          extension: 'png',
        },
        {
          widths: [200, 1400],
          offset: 5,
          extension: 'png',
        },
      ],
    },
    applicationUrl: 'https://nicolasdesnoust.github.io/Desnote-Book/home',
    sourceCodeUrl: 'https://github.com/NicolasDesnoust/Desnote-Book',
    quickOverview: {
      languages: ['Typescript', 'SCSS', 'HTML'],
      frameworks: ['Angular'],
      concepts: ['JAMstack', 'Markdown transpilation to HTML'],
    },
  },
  {
    id: 'ascenseur',
    title: 'Ascenseur',
    subtitle: 'Supervised Project',
    image: {
      folder: 'ascenseur',
      backgroundColor: 'rgb(244 244 244)',
      layers: [
        {
          widths: [200, 1151, 1400],
          offset: 0,
          extension: 'png',
        },
        {
          widths: [200, 1400],
          offset: 2,
          extension: 'png',
        },
      ],
    },
    sourceCodeUrl: 'https://github.com/NicolasDesnoust/ASCENSEUR',
    quickOverview: {
      languages: ['Java'],
      librairies: ['JavaFx'],
      concepts: [
        'Software Engineering',
        'Simulation',
        'Model-View-Controller (MVC) Design Pattern',
      ],
    },
  },
  {
    id: 'pendu-socket',
    title: 'Pendu socket',
    subtitle: 'Supervised Project',
    image: {
      folder: 'pendu-socket',
      backgroundColor: '#dde5e7',
      layers: [
        {
          widths: [200, 1400],
          offset: 4,
          extension: 'png',
        },
        {
          widths: [200, 1400],
          offset: 5,
          extension: 'png',
        },
      ],
    },
    sourceCodeUrl: 'https://github.com/NicolasDesnoust/PenduSocket',
    quickOverview: {
      languages: ['Java'],
      concepts: ['java.net Package', 'Sockets', 'TCP Protocol'],
    },
  },
];
