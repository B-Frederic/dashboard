import moment from "moment/moment";
import 'moment/locale/fr';

export const cardsData = [
  {
    title: "Revenus",
    change: 24,
    amount: 42056,
  },
  {
    title: "Ventes",
    change: 14,
    amount: 52125.03,
  },
  {
    title: "Dépenses",
    change: 18,
    amount: 1216.5,
  },
  {
    title: "Profits",
    change: 12,
    amount: 10125.0,
  },
];

export const ordersData = [
  {
    name: "Skateboard",
    type: "Détails",
    items: 58,
    change: 290,
  },
  {
    name: "Cours de langues",
    type: "Détails",
    items: 12,
    change: 72
  },
  {
    name: "Collaboration",
    type: "Détails",
    items: 7,
    change: 70
  },
  {
    name: "Robot",
    type: "Détails",
    items: 21,
    change: 15
  }
]


// Number format
export const groupNumber = (number) => {
  return parseFloat(number.toFixed(2)).toLocaleString("fr", {
    useGrouping: true,
  });
};


// Calendar
let eventGuid = 0
let todayStr = moment().format("YYYY-MM-DD")
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: "Déjeuner",
    start: todayStr + "T09:00:00",
  },
  {
    id: createEventId(),
    title: "Événement",
    start: moment(todayStr).add(1, "days").format("YYYY-MM-DD") + "T16:00:00"
  },
  {
    id: createEventId(),
    title: "Rencontre",
    start: moment(todayStr).add(2, "days").format("YYYY-MM-DD") + "T20:00:00"
  },
  {
    id: createEventId(),
    title: "Réunion",
    start: moment(todayStr).add(3, "days").format("YYYY-MM-DD") + "T09:00:00"
  },
  {
    id: createEventId(),
    title: "Échéance paiement",
    start: moment(todayStr).add(5, "days").format("YYYY-MM-DD") + "T13:00:00"
  },
  {
    id: createEventId(),
    title: "Réunion d'équipe",
    start: moment(todayStr).add(6, "days").format("YYYY-MM-DD") + "T13:00:00"
  },
]

export function createEventId() {
  return String(eventGuid++)
}


// Tasks
export const boardData = {
  columns: [
    {
      id: 1,
      title: "Liste",
      cards: [
        {
          id: 1,
          title: "Configuration de la base de données",
          description: "Intégration Firebase"
        },
        {
          id: 2,
          title: "Flux de données",
          description: "Diagramme d'installation avec d'autres développeurs"
        },
      ]
    },
    {
      id: 2,
      title: "A faire",
      cards: [
        {
          id: 9,
          title: "Page de tableau des données",
          description: "Pagination côté serveur",
        }
      ]
    },
    {
      id: 3,
      title: "En cours",
      cards: [
        {
          id: 10,
          title: "Extension complète du calendrier",
          description: "Créez de nouveaux événements et stockez-les dans les états mondiaux"
        },
        {
          id: 11,
          title: "Table Kanban personnalisé",
          description: "Configurer le service React-Kanban dans le tableau de bord en tant que page séparée"
        }
      ]
    },
    {
      id: 4,
      title: "Complété",
      cards: [
        {
          id: 12,
          title: "Configuration du serveur Vite",
          description: "Configurer les modules et packs requis"
        },
        {
          id: 13,
          title: "Structure modulaire",
          description: "Écrire du css sous forme de modules pour réduire les conflits de nommage"
        }
      ]
    }
  ]
}


// User table data
export const userData = [
  {
    name: {
      firstName: "John",
      lastName: "Doe",
    },
    address: "1er arrondissement",
    city: "Paris",
  },
  {
    name: {
      firstName: "John",
      lastName: "Doeuf",
    },
    address: "69 rue du lion",
    city: "Lyon",
  },
  {
    name: {
      firstName: "Beth",
      lastName: "Rave",
    },
    address: "59 chemin de l'île",
    city: "Lille",
  },
  {
    name: {
      firstName: "Andy",
      lastName: "Veuh",
    },
    address: "33 rue lardon",
    city: "Bordeaux",
  },
  {
    name: {
      firstName: "Arty",
      lastName: "Chaux",
    },
    address: "64 chemin des légumes",
    city: "Bayonne",
  }, 
  {
    name: {
      firstName: "Jane",
      lastName: "Darc",
    },
    address: "31 route du bûcher",
    city: "Toulouse",
  },
  {
    name: {
      firstName: "John",
      lastName: "Attant",
    },
    address: "35",
    city: "Rennes",
  },
  {
    name: {
      firstName: "Alex",
      lastName: "Cendri",
    },
    address: "87 avenue nostalgique",
    city: "Limoges",
  },
  {
    name: {
      firstName: "Jojo",
      lastName: "Lastikeau",
    },
    address: "59 rue des lombrics",
    city: "Tourcoing",
  },
]