interface Props {
  id: number;
  question: string;
  answers: string[];
  correct: number;
}

export const quizData: Props[] = [
  {
    id: 1,
    question: "Koje godine sam rođen?",
    answers: ["1995", "2002", "2000"],
    correct: 0,
  },
  {
    id: 2,
    question: "Koji mi je rekord u trčanju na 5km?",
    answers: ["25:04", "19:20", "20:51"],
    correct: 2,
  },
  {
    id: 3,
    question: "Koja je moja omiljena boja?",
    answers: ["Ljubičasta", "Mint Zelena", "Indigo"],
    correct: 2,
  },
  {
    id: 4,
    question: "Koji mi je omiljeni domaći film?",
    answers: [
      "Maratonci trče počasni krug",
      "Balkanski špijun",
      "Mi nismo anđeli",
    ],
    correct: 1,
  },
  {
    id: 5,
    question: "Koji instrument sviram?",
    answers: ["Gitara", "Klavir", "Violina"],
    correct: 0,
  },
  {
    id: 6,
    question: "Koji sport sam trenirao?",
    answers: ["Odbojka", "Rukomet", "Košarka"],
    correct: 2,
  },
  {
    id: 7,
    question: "Koji mi je omiljeni domaći bend?",
    answers: ["Crvena jabuka", "Bijelo dugme", "Osvajači"],
    correct: 2,
  },
  {
    id: 8,
    question: "Koja je moja omiljena hrana?",
    answers: ["Karađorđeva", "Plazma i mleko", "Pica"],
    correct: 1,
  },
  {
    id: 9,
    question: "Koje je moje omiljeno piće?",
    answers: ["Koka kola", "Fanta", "Kokta"],
    correct: 2,
  },
  {
    id: 10,
    question: "Koja je moja omiljena knjiga?",
    answers: ["Alhemičar", "1984", "Gospodar prstenova"],
    correct: 1,
  },
];
