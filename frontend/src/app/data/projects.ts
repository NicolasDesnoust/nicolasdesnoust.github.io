export const projectsData: any[] = [
  {
    id: 'dassault-aviation',
    title: 'Plateforme IoT',
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
      langages: ['Typescript', 'C#', 'SCSS', 'HTML'],
      frameworks: ['Kuzzle', 'Angular'],
      'base de données': ['Elasticsearch', 'Redis'],
      concepts: [
        'Internet des objets (IoT)',
        'ETL',
        'Intégration logicielle',
        'Monitoring de températures',
        'Visualisation de données',
        'Conteneurisation',
      ],
    },
  },
  {
    id: 'xyz-ingenierie',
    title: 'XYZ Ingénierie',
    subtitle: 'Projet personnel',
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
      langages: ['Java', 'Typescript', 'SCSS', 'HTML'],
      frameworks: ['Spring Boot', 'Angular'],
      'base de données': ['H2'],
      concepts: [
        'Single Page Application',
        'Programmation réactive',
        "Gestion d'état centralisée",
        'Design patterns',
      ],
    },
  },
  {
    id: 'adm',
    title: 'Atelier des métiers',
    subtitle: 'Aix-Marseille Université',
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
      langages: ['Java', 'Typescript', 'SCSS', 'HTML'],
      frameworks: ['Spring Boot', 'Angular'],
      'base de données': ['HyperSQL', 'MySQL'],
      concepts: [
        'Moteur de recherche inversé',
        'Système d’authentification centralisée et unique (CAS SSO)',
        'Expérience utilisateur',
      ],
    },
  },
  {
    id: 'wordsearch',
    title: 'Wordsearch',
    subtitle: 'Projet personnel',
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
      langages: ['Java', 'Gherkin'],
      frameworks: ['Spring Boot'],
      librairies: ['Cucumber', 'ArchUnit', 'Tesseract'],
      concepts: [
        'Clean architecture',
        'Reconnaissance optique de caractères',
        'Multi-stage Docker builds',
      ],
    },
  },
  {
    id: 'marble-wars',
    title: 'Marble Wars',
    subtitle: 'Projet encadré',
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
      langages: ['C'],
      librairies: ['GTK'],
      concepts: ['Zuma Revenge', 'Interfaces Graphiques', 'Courbes de Bézier'],
    },
  },
  {
    id: 'geolocalisation',
    title: 'Géolocalisation',
    subtitle: 'Projet encadré',
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
      langages: ['Javascript', 'CSS', 'HTML'],
      frameworks: ['JQuery'],
      concepts: ['Géolocalisation', 'Filtrage multi-critères'],
    },
  },
  {
    id: 'desnote-book',
    title: 'Desnote Book',
    subtitle: 'Projet personnel',
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
      langages: ['Typescript', 'SCSS', 'HTML'],
      frameworks: ['Angular'],
      concepts: ['JAMstack', 'Transpilation de Markdown vers HTML'],
    },
  },
  {
    id: 'ascenseur',
    title: 'Ascenseur',
    subtitle: 'Projet encadré',
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
      langages: ['Java'],
      librairies: ['JavaFx'],
      concepts: [
        'Génie logiciel',
        'Simulation',
        'Design pattern Modèle-Vue-Contrôleur (MVC)',
      ],
    },
  },
  {
    id: 'pendu-socket',
    title: 'Pendu socket',
    subtitle: 'Projet encadré',
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
      langages: ['Java'],
      concepts: ['Package java.net', 'Sockets', 'Protocole TCP'],
    },
  },
];
